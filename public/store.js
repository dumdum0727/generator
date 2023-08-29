'use strict';

document.getElementById('send').addEventListener('click', () => {
    let formData = new FormData(document.getElementById('message-form'));
    for (const entry of formData.entries()) {
        console.log(entry[0], entry[1]);
    }

    fetch('http://localhost:8000/api/store', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.result);
        if (data.result === 'Message stored successfully') {
            window.location.href = `http://localhost:8000/message.html?sender=${formData.get('sender')}`;
        }
    })
    .catch(error => {
        console.log(error);
    });
});
