<script>
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("user-input-popup");
    const sendBtn = document.querySelector(".send-button");
    const chatBox = document.getElementById("chat-messages-popup");

    function appendMessage(message, sender) {
        const msg = document.createElement("div");
        msg.classList.add("message");
        msg.classList.add(sender === "user" ? "user-message" : "bot-message");
        msg.textContent = message;
        chatBox.appendChild(msg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    sendBtn.addEventListener("click", () => {
        const message = input.value.trim();
        if (message) {
            appendMessage(message, "user");
            input.value = "";

            // Réponse factice (à remplacer plus tard par une vraie API Flask)
            setTimeout(() => {
                appendMessage("Je suis encore en apprentissage. Revenez bientôt !", "bot");
            }, 600);
        }
    });

    // Envoyer avec la touche Entrée
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            sendBtn.click();
        }
    });
});
</script>
