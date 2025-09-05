// Content script per Firefox
(function() {
    'use strict';
    
    // Carica Puter.js dinamicamente
    if (typeof puter === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://js.puter.com/v2/';
        document.head.appendChild(script);
    }
    
    // Listener per messaggi
    browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
        console.log('Message received:', request);
        
        switch(request.action) {
            case 'getSelectedText':
                sendResponse({ 
                    selectedText: window.getSelection().toString() 
                });
                break;
                
            case 'showFloatingAssistant':
                showFloatingAssistant(request.text, request.promptAction);
                break;
                
            case 'captureContent':
                sendResponse({
                    title: document.title,
                    url: location.href,
                    content: document.body.innerText
                });
                break;
        }
        return true;
    });
    
    // Funzione floating assistant
    function showFloatingAssistant(text, action) {
        // Implementazione UI flottante
        // (usa lo stesso codice della versione Chrome)
    }
    
    // Shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key === 'c') {
            const selected = window.getSelection().toString();
            if (selected) {
                showFloatingAssistant(selected);
            }
        }
    });
})();
