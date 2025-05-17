import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '../ContactForm';

describe('ContactForm Component', () => {
  test('renders form elements correctly', () => {
    render(<ContactForm />);
    
    // Check if form elements are rendered
    expect(screen.getByPlaceholderText('Name *')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email *')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Organization')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Message *')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  test('shows validation errors for required fields', async () => {
    render(<ContactForm />);
    
    // Submit the form without filling required fields
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    
    // Check if validation errors are displayed
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Message is required')).toBeInTheDocument();
    });
  });

  test('validates email format', async () => {
    render(<ContactForm />);
    
    // Fill in an invalid email
    fireEvent.change(screen.getByPlaceholderText('Email *'), {
      target: { value: 'invalid-email' }
    });
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    
    // Check if email validation error is displayed
    await waitFor(() => {
      expect(screen.getByText('Invalid email address')).toBeInTheDocument();
    });
  });

  test('submits form with valid data', async () => {
    render(<ContactForm />);
    
    // Fill in valid form data
    fireEvent.change(screen.getByPlaceholderText('Name *'), {
      target: { value: 'John Doe' }
    });
    
    fireEvent.change(screen.getByPlaceholderText('Email *'), {
      target: { value: 'john.doe@example.com' }
    });
    
    fireEvent.change(screen.getByPlaceholderText('Organization'), {
      target: { value: 'Test Company' }
    });
    
    fireEvent.change(screen.getByPlaceholderText('Phone'), {
      target: { value: '1234567890' }
    });
    
    fireEvent.change(screen.getByPlaceholderText('Message *'), {
      target: { value: 'This is a test message that is long enough to pass validation.' }
    });
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    
    // Check if form submission is in progress
    await waitFor(() => {
      expect(screen.getByText(/sending/i)).toBeInTheDocument();
    });
    
    // Check if success message is displayed after submission
    await waitFor(() => {
      expect(screen.getByText(/thank you for your message/i)).toBeInTheDocument();
    }, { timeout: 2000 });
  });
});
