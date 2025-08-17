/**
 * PWA utility functions for service worker registration and app installation
 */

// Check if we're in a supported environment for service workers
const isServiceWorkerSupported = (): boolean => {
  // Check if service workers are supported by the browser
  if (!('serviceWorker' in navigator)) {
    return false;
  }
  
  // Check if we're in StackBlitz or other environments that don't support service workers
  if (typeof window !== 'undefined') {
    // StackBlitz detection
    if (window.location.hostname.includes('stackblitz') || 
        window.location.hostname.includes('webcontainer')) {
      return false;
    }
    
    // Check for other known environments that don't support service workers
    if (window.location.protocol === 'file:' || 
        window.location.hostname === 'localhost' && window.location.port === '5173') {
      // Allow localhost for development, but check for StackBlitz specifically
      const userAgent = navigator.userAgent.toLowerCase();
      if (userAgent.includes('webcontainer')) {
        return false;
      }
    }
  }
  
  return true;
};

// Service Worker registration
export const registerServiceWorker = async (): Promise<void> => {
  if (isServiceWorkerSupported()) {
    try {
      console.log('PWA: Registering service worker...');
      
      const registration = await navigator.serviceWorker.register('/service-worker.js', {
        scope: '/'
      });

      console.log('PWA: Service worker registered successfully', registration);

      // Handle service worker updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('PWA: New service worker available');
              // You can show a notification to the user about the update
              showUpdateNotification();
            }
          });
        }
      });

    } catch (error) {
      console.error('PWA: Service worker registration failed', error);
    }
  } else {
    console.log('PWA: Service workers not supported in this environment');
  }
};

// App installation prompt
export const handleAppInstall = (): void => {
  let deferredPrompt: any = null;

  // Listen for the beforeinstallprompt event
  window.addEventListener('beforeinstallprompt', (event) => {
    console.log('PWA: Install prompt available');
    
    // Prevent the mini-infobar from appearing on mobile
    event.preventDefault();
    
    // Save the event so it can be triggered later
    deferredPrompt = event;
    
    // Show custom install button
    showInstallButton();
  });

  // Handle the install button click
  window.addEventListener('app-install-click', async () => {
    if (deferredPrompt) {
      console.log('PWA: Showing install prompt');
      
      // Show the install prompt
      deferredPrompt.prompt();
      
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`PWA: User response to install prompt: ${outcome}`);
      
      // Clear the deferredPrompt variable
      deferredPrompt = null;
      
      // Hide the install button
      hideInstallButton();
    }
  });

  // Handle successful app installation
  window.addEventListener('appinstalled', () => {
    console.log('PWA: App installed successfully');
    hideInstallButton();
    
    // Track the installation event (analytics)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'app_installed', {
        event_category: 'PWA',
        event_label: 'MLHub App Installed'
      });
    }
  });
};

// Show custom install button
const showInstallButton = (): void => {
  const installButton = document.getElementById('pwa-install-button');
  if (installButton) {
    installButton.style.display = 'block';
    installButton.classList.add('animate-pulse');
  }
};

// Hide install button
const hideInstallButton = (): void => {
  const installButton = document.getElementById('pwa-install-button');
  if (installButton) {
    installButton.style.display = 'none';
    installButton.classList.remove('animate-pulse');
  }
};

// Show update notification
const showUpdateNotification = (): void => {
  // Create a simple notification
  const notification = document.createElement('div');
  notification.id = 'pwa-update-notification';
  notification.className = 'fixed top-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm';
  notification.innerHTML = `
    <div class="flex items-center space-x-3">
      <div class="flex-shrink-0">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </div>
      <div class="flex-1">
        <p class="text-sm font-medium">App Update Available</p>
        <p class="text-xs text-blue-100">Refresh to get the latest features</p>
      </div>
      <button onclick="window.location.reload()" class="flex-shrink-0 bg-blue-500 hover:bg-blue-400 text-white px-3 py-1 rounded text-xs font-medium transition-colors">
        Refresh
      </button>
    </div>
  `;

  document.body.appendChild(notification);

  // Auto-remove after 10 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 10000);
};

// Check if app is running in standalone mode
export const isStandalone = (): boolean => {
  return window.matchMedia('(display-mode: standalone)').matches ||
         (window.navigator as any).standalone === true;
};

// Get app installation status
export const getInstallationStatus = (): string => {
  if (isStandalone()) {
    return 'installed';
  } else if ('serviceWorker' in navigator) {
    return 'installable';
  } else {
    return 'not-supported';
  }
};