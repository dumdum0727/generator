'use strict';

const currentURL = window.location.href;
const urlSearchParams = new URLSearchParams(currentURL.split('?')[1]);
console.log(urlSearchParams.get('sender'));
const url = `https://dumdum0727.zombie.jp/generator/api/get-message?sender=${urlSearchParams.get('sender')}`;
// const url = `http://localhost:8000/api/get-message?sender=${urlSearchParams.get('sender')}`;

const sender = document.getElementById('sender');
const recipient = document.getElementById('recipient');
const message = document.getElementById('message');

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
    })
    .then(data => {
        sender.innerHTML = data.sender;
        recipient.innerHTML = data.recipient;
        message.innerHTML = data.message;
    })
    .catch(error => {
        console.log('Fetch Error: ', error);
    });
