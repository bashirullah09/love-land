function showLoveQuotes() {
    const quotes = [
        "You are my today and all of my tomorrows. ❤️",
        "In you, I've found the love of my life and my closest, truest friend. 👫",
        "I love you more than I have ever found a way to say to you. 💕",
        "My heart is and always will be yours. 💖",
        "You're the best thing that's ever been mine. 🌟"
    ];

    displayContent(quotes[Math.floor(Math.random() * quotes.length)]);
}

function playLoveGame() {
    const loveGames = [
        "Guess the love song by its lyrics. 🎶",
        "What's your love language? Share with each other! 💬",
        "Write a short love story together. 📝",
        "Play 'Never Have I Ever' with love-themed questions. 🤔",
        "Create a love playlist for each other. 🎵"
    ];

    displayContent(loveGames[Math.floor(Math.random() * loveGames.length)]);
}

function personalizedMessage() {
    const messages = [
        "You make my heart skip a beat. 💓",
        "I am so lucky to have you in my life. 🍀",
        "Every moment with you is a blessing. 🙏",
        "You're my favorite notification. 📱",
        "I love you more than coffee (and that's saying something). ☕️"
    ];

    displayContent(messages[Math.floor(Math.random() * messages.length)]);
}

function displayContent(content) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<p>${content}</p>`;
    contentDiv.style.display = 'block';
}
