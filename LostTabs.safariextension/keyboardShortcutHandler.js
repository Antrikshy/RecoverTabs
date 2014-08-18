window.addEventListener('keydown', handleKeydown, false);

function handleKeydown(e) {
    if (e.keyCode == 84 && e.metaKey && e.shiftKey) {
        safari.self.tab.dispatchMessage('reopenTab');
        console.log(e);
    }
}