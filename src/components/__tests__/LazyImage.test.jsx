import React from 'react';
import { render, screen } from '@testing-library/react';
import LazyImage from '../LazyImage';

// Mock IntersectionObserver
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
    this.elements = new Set();
  }

  observe(element) {
    this.elements.add(element);
    // Simulate an intersection immediately
    this.callback([{ isIntersecting: true, target: element }]);
  }

  unobserve(element) {
    this.elements.delete(element);
  }

  disconnect() {
    this.elements.clear();
  }
}

// Set up the mock before tests
beforeAll(() => {
  global.IntersectionObserver = MockIntersectionObserver;
});

// Clean up after tests
afterAll(() => {
  delete global.IntersectionObserver;
});

describe('LazyImage Component', () => {
  test('renders with placeholder initially', () => {
    render(<LazyImage src="/test-image.jpg" alt="Test Image" />);
    
    // Check if the placeholder is rendered
    const placeholder = document.querySelector('.placeholder');
    expect(placeholder).toBeInTheDocument();
  });

  test('loads image when in viewport', () => {
    render(<LazyImage src="/test-image.jpg" alt="Test Image" />);
    
    // Check if the image is rendered after intersection
    const image = screen.getByAltText('Test Image');
    expect(image).toBeInTheDocument();
    expect(image.src).toContain('/test-image.jpg');
  });

  test('applies custom className', () => {
    render(<LazyImage src="/test-image.jpg" alt="Test Image" className="custom-class" />);
    
    // Check if the custom class is applied
    const container = document.querySelector('.lazyImageContainer');
    expect(container).toHaveClass('custom-class');
  });
});
