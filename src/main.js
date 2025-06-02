document.addEventListener('DOMContentLoaded', () => {
    const actionButtons = document.querySelectorAll('.action-btn');
    const chatInput = document.querySelector('.chat-input input');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', () => {
            chatInput.value = button.textContent;
            chatInput.focus();
        });
    });
});
