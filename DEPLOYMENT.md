# Deployment Guide

## Environment Variables

This project requires environment variables for proper functionality. Follow these steps to set them up:

### 1. Local Development

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and replace the placeholder values with your actual API keys:
   ```env
   REACT_APP_GEMINI_API_KEY=your_actual_gemini_api_key_here
   ```

### 2. GitHub Pages / Netlify / Vercel Deployment

For deployment platforms, you need to set environment variables in their respective dashboards:

#### Netlify:
1. Go to your site dashboard
2. Navigate to Site settings → Environment variables
3. Add the following variables:
   - `REACT_APP_GEMINI_API_KEY`: Your Google Gemini API key

#### Vercel:
1. Go to your project dashboard
2. Navigate to Settings → Environment Variables
3. Add the following variables:
   - `REACT_APP_GEMINI_API_KEY`: Your Google Gemini API key

#### GitHub Pages with Actions:
1. Go to your repository
2. Navigate to Settings → Secrets and variables → Actions
3. Add the following repository secrets:
   - `REACT_APP_GEMINI_API_KEY`: Your Google Gemini API key

### 3. Getting API Keys

#### Google Gemini API Key:
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and use it in your environment variables

## Security Notes

- **Never commit API keys to version control**
- The `.env` file is ignored by git to prevent accidental commits
- Use `.env.example` to document required environment variables
- For production deployments, always use the platform's environment variable system

## Build and Deploy

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. The `build/` folder contains the production-ready files for deployment.

## Troubleshooting

- If you see "API key not found" errors, ensure your environment variables are properly set
- For deployment issues, check that all required environment variables are configured in your deployment platform
- Make sure the environment variable names start with `REACT_APP_` for React to recognize them
