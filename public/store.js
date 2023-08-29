'use strict';

document.getElementById('send').addEventListener('click', () => {
    let formData = new FormData(document.getElementById('message-form'));
    for (const entry of formData.entries()) {
        console.log(entry[0], entry[1]);
    }

    fetch('https://dumdum0727.zombie.jp/generator/api/store', {
    // fetch('http://localhost:8000/api/store', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.result);
        if (data.result === 'Message stored successfully') {
            window.location.href = `https://dumdum0727.zombie.jp/generator/message.html?sender=${formData.get('sender')}`;
            // window.location.href = `http://localhost:8000/message.html?sender=${formData.get('sender')}`;
        }
    })
    .catch(error => {
        console.log(error);
    });
});
