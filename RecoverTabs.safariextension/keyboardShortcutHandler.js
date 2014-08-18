// Listening for a keydown event
window.addEventListener('keydown', handleKeydown, false);

// Function to send message to Global.html when required shortcut detected
function handleKeydown(e) {
    // If 'T' pressed, checks if Cmd and Shift were held down
    if (e.keyCode == 84 && e.metaKey && e.shiftKey) {
        e.preventDefault();
        safari.self.tab.dispatchMessage('reopenTab');
    }
}