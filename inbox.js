/* eslint-disable no-multiple-empty-lines */

const hasNewMessage = () => Math.random() < 0.2;
// TODO: return true with a probability of 20%.

const newMessage = () => {
  // TODO: return a random message as an object with two keys, subject and sender
  const senders = ["Anil", "Ray", "Paal", "Julian", "Josh"];

  const subjects = [
    "Keep up the momentum!",
    "Thank you for registering for DevFest Silicon Valley!",
    "Cobalt2 Typescript VS Code Theme + Cyber Monday Course Sale!",
    "2021 JavaScript Courses (and an update on Advanced React!)",
    "Davetiye: #466 Photoshoot time 🎉",
  ];

  const sender = senders[Math.floor(Math.random() * senders.length)];
  const subject = subjects[Math.floor(Math.random() * subjects.length)];

  return {
    subject,
    sender,
  };
};

const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  const template = `
  <div class="row message unread">
  <div class="col-3">${message.sender}</div>
  <div class="col-9">${message.subject}</div>
  </div>`;

  const inbox = document.querySelector("#inbox");
  inbox.insertAdjacentHTML("afterbegin", template);
};

const refresh = () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
  if (hasNewMessage()) {
    const message = newMessage();
    appendMessageToDom(message);
    const count = document.getElementById("count");
    const actualNumber = count.innerHTML.replace(/\D+/g, "");
    let number = Number.parseInt(actualNumber, 10);
    number += 1;
    count.innerHTML = `(${number})`;
  }
};

// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});
