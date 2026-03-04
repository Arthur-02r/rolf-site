document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chatMessages");
    const chatInput = document.getElementById("chatInput");
    const sendBtn = document.getElementById("sendBtn");

    // Уникальный ключ для localStorage по странице (главе)
    const storageKey = "chapterChat_" + window.location.pathname;

    // ===== Загрузка сообщений из localStorage =====
    let messages = JSON.parse(localStorage.getItem(storageKey)) || [];
    messages.forEach(msg => addMessageToDOM(msg));

    // ===== Функция добавления сообщения в DOM =====
    function addMessageToDOM(msg) {
        const p = document.createElement("p");
        p.textContent = msg;
        chatMessages.appendChild(p);
        chatMessages.scrollTop = chatMessages.scrollHeight; // прокрутка вниз
    }

    // ===== Отправка нового сообщения =====
    sendBtn.addEventListener("click", function() {
        const text = chatInput.value.trim();
        if(text === "") return;

        addMessageToDOM(text);
        messages.push(text);

        // Сохраняем в localStorage
        localStorage.setItem(storageKey, JSON.stringify(messages));

        // Очищаем поле ввода
        chatInput.value = "";
        chatInput.focus();
    });

    // Можно отправлять Enter
    chatInput.addEventListener("keypress", function(e) {
        if(e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendBtn.click();
        }
    });
});

const sendBtn = document.getElementById('sendBtn');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

sendBtn.addEventListener('click', () => {
    const text = chatInput.value.trim();
    if(text) {
        const msg = document.createElement('p');
        msg.textContent = text;
        chatMessages.appendChild(msg);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight; // прокрутка вниз
    }
});