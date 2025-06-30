import markdownItTextualUml from 'markdown-it-textual-uml'

// iOS detection
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

// iOS-specific initialization with longer timeouts
function initWithDelay() {
  const timeout = isIOS ? 200 : 100;
  
  if (!window.markdownItTextualUml) {
    setTimeout(() => {
      window.markdownItTextualUml = markdownItTextualUml;
      
      // Force iOS to recognize the module is loaded
      if (isIOS) {
        document.body.offsetHeight; // Force reflow
      }
    }, timeout);
  } else {
    window.markdownItTextualUml = markdownItTextualUml;
  }
}

// Apply iOS-specific CSS fixes
if (isIOS) {
  // Add iOS rendering fix to body when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      document.body.style.webkitTransform = 'translateZ(0)';
    });
  } else {
    document.body.style.webkitTransform = 'translateZ(0)';
  }
}

initWithDelay();