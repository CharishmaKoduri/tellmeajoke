function tellJoke() {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        const jokeText = data.joke;
        document.getElementById("joke").innerText = jokeText;

        // Check if user wants voice
        const shouldRead = document.getElementById("readOption").checked;

        if (shouldRead) {
            const speech = new SpeechSynthesisUtterance(jokeText);
            speechSynthesis.speak(speech);
        }
    })
    .catch(() => {
        document.getElementById("joke").innerText = "Could not load joke 😢";
    });
}
