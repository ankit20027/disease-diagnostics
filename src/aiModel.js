
async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatbox = document.getElementById('chatbox');

    if (userInput.trim() === '') {
        return;
    }

    // Display user message
    const userMessage = `<div class="mb-2 flex justify-end">
                            <div class="bg-blue-500 text-white py-2 px-4 rounded-lg max-w-xs">
                                ${userInput}
                            </div>
                        </div>`;
    chatbox.innerHTML += userMessage;

    // Call the ChatGPT-4 API
    const apiUrl = 'https://chatgpt-42.p.rapidapi.com/gpt4';
    const apiKey = 'e09ac9abd8msh048a35eb05d0b4ap1561a3jsnaaf4eed75336'; // Replace with your actual RapidAPI key

    const apiOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com',
        },
        body: JSON.stringify({
            messages: [
                {
                    role: 'user',
                    content: userInput,
                },
            ],
            tone: 'Balanced',
        }),
    };

    try {
        const response = await fetch(apiUrl, apiOptions);
        const result = await response.json();
        const resultText = result.result || 'No response';

        // Display bot message
        const botMessage = `<div class="mb-2 flex">
                                <div class="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg max-w-xs">
                                    ${resultText}
                                </div>
                            </div>`;
        chatbox.innerHTML += botMessage;
    } catch (error) {
        console.error('Error sending message:', error);
    }

    // Clear user input
    document.getElementById('userInput').value = '';
}
