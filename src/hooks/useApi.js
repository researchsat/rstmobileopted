import { useState, useCallback, useEffect } from 'react';
import useAppStore from '../store/appStore';

/**
 * Custom hook for API calls
 * @param {Function} apiFunction - The API function to call
 * @param {Object} options - Options for the API call
 * @returns {Object} API call state and methods
 */
const useApi = (apiFunction, options = {}) => {
  const {
    initialData = null,
    autoFetch = false,
    params = {},
    onSuccess = () => {},
    onError = () => {},
    cacheKey = null,
  } = options;
  
  // State for API call
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Get global loading state setter
  const setGlobalLoading = useAppStore((state) => state.setIsLoading);
  const addNotification = useAppStore((state) => state.addNotification);
  
  // Cache for API responses
  const [cache, setCache] = useState({});
  
  // Function to execute the API call
  const execute = useCallback(async (callParams = {}) => {
    // Combine default params with call-specific params
    const combinedParams = { ...params, ...callParams };
    
    // Check cache if cacheKey is provided
    const currentCacheKey = cacheKey ? 
      `${cacheKey}-${JSON.stringify(combinedParams)}` : null;
    
    if (currentCacheKey && cache[currentCacheKey]) {
      setData(cache[currentCacheKey]);
      setIsSuccess(true);
      onSuccess(cache[currentCacheKey]);
      return cache[currentCacheKey];
    }
    
    // Set loading states
    setIsLoading(true);
    setGlobalLoading(true);
    setError(null);
    setIsSuccess(false);
    
    try {
      // Call the API function
      const result = await apiFunction(combinedParams);
      
      // Update state with result
      setData(result);
      setIsSuccess(true);
      
      // Cache the result if cacheKey is provided
      if (currentCacheKey) {
        setCache(prev => ({
          ...prev,
          [currentCacheKey]: result,
        }));
      }
      
      // Call onSuccess callback
      onSuccess(result);
      
      return result;
    } catch (err) {
      // Handle error
      const errorMessage = err.message || 'An error occurred';
      setError(errorMessage);
      
      // Call onError callback
      onError(err);
      
      // Add error notification
      addNotification({
        type: 'error',
        message: errorMessage,
        duration: 5000,
      });
      
      throw err;
    } finally {
      // Reset loading states
      setIsLoading(false);
      setGlobalLoading(false);
    }
  }, [apiFunction, params, cacheKey, cache, onSuccess, onError, setGlobalLoading, addNotification]);
  
  // Clear cache for the current API
  const clearCache = useCallback(() => {
    if (cacheKey) {
      setCache(prev => {
        const newCache = { ...prev };
        Object.keys(newCache).forEach(key => {
          if (key.startsWith(cacheKey)) {
            delete newCache[key];
          }
        });
        return newCache;
      });
    }
  }, [cacheKey]);
  
  // Auto-fetch on mount if enabled
  useEffect(() => {
    if (autoFetch) {
      execute();
    }
  }, [autoFetch, execute]);
  
  return {
    data,
    isLoading,
    error,
    isSuccess,
    execute,
    clearCache,
  };
};

export default useApi;
