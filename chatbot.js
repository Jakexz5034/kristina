document.addEventListener('DOMContentLoaded', () => {
    const bot = new RiveScript();
    const messagesContainer = document.getElementById('messages');
    const userInput = document.getElementById('user-input');

    // Load the RiveScript bot script
    bot.loadFile(['brain.rive']).then(botReady).catch(botError);

    function botReady() {
        bot.sortReplies();
        botReply('Hello! How can I help you today?');
    }

    function botError(error) {
        console.error('Error loading bot:', error);
    }

    function botReply(message) {
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot';
        botMessage.textContent = message;
        messagesContainer.appendChild(botMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function userReply(message) {
        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.textContent = message;
        messagesContainer.appendChild(userMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const message = userInput.value;
            userReply(message);
            userInput.value = '';
            bot.reply('local-user', message).then(botReply);
        }
    });
});
