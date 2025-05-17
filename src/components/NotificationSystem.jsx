import React, { useEffect } from 'react';
import useAppStore from '../store/appStore';
import styles from '../styles/components/NotificationSystem.module.css';

/**
 * Notification component for displaying individual notifications
 */
const Notification = ({ id, type, message, duration }) => {
  const removeNotification = useAppStore((state) => state.removeNotification);
  
  // Auto-remove notification after duration
  useEffect(() => {
    const timer = setTimeout(() => {
      removeNotification(id);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [id, duration, removeNotification]);
  
  // Get appropriate icon based on notification type
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <i className="fas fa-check-circle"></i>;
      case 'error':
        return <i className="fas fa-exclamation-circle"></i>;
      case 'warning':
        return <i className="fas fa-exclamation-triangle"></i>;
      case 'info':
      default:
        return <i className="fas fa-info-circle"></i>;
    }
  };
  
  return (
    <div className={`${styles.notification} ${styles[type]}`}>
      <div className={styles.icon}>{getIcon()}</div>
      <div className={styles.content}>{message}</div>
      <button 
        className={styles.closeButton} 
        onClick={() => removeNotification(id)}
        aria-label="Close notification"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

/**
 * Notification system component for displaying all notifications
 */
const NotificationSystem = () => {
  const notifications = useAppStore((state) => state.notifications);
  
  if (notifications.length === 0) return null;
  
  return (
    <div className={styles.notificationContainer}>
      {notifications.map((notification) => (
        <Notification key={notification.id} {...notification} />
      ))}
    </div>
  );
};

export default NotificationSystem;
