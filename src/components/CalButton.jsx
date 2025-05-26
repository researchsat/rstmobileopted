import React, { useEffect, useRef } from 'react';

const CalButton = ({
  children,
  calLink = "researchsat-2023/30min",
  namespace = "30min",
  config = { layout: "month_view" },
  className,
  onClick,
  ...props
}) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleClick = (e) => {
      e.preventDefault();

      // Call custom onClick if provided
      if (onClick) {
        onClick(e);
      }

      if (window.Cal && window.Cal.ns && window.Cal.ns[namespace]) {
        window.Cal.ns[namespace]("floatingButton", {
          calLink,
          config: {
            ...config,
            cssVarsPerTheme: {
              light: {
                "cal-brand": "#cf1414"
              }
            },
            hideEventTypeDetails: false
          }
        });
      } else {
        console.error('Cal.com not initialized properly');
      }
    };

    // Add click event listener
    button.addEventListener('click', handleClick);

    // Clean up
    return () => {
      button.removeEventListener('click', handleClick);
    };
  }, [calLink, namespace, config, onClick]);

  return (
    <a
      ref={buttonRef}
      href="#"
      data-cal-link={calLink}
      data-cal-namespace={namespace}
      data-cal-config={JSON.stringify(config)}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};

export default CalButton;
