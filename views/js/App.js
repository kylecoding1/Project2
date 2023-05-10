function addUserCard(user) {
  const cardTemplate = document.querySelector('.card-template');
  const card = cardTemplate.cloneNode(true);

  // Populate card with user data
  card.querySelector('.card-avatar').src = user.avatarUrl;
  card.querySelector('.card-username').textContent = user.username;
  card.querySelector('.card-streaming').textContent = user.streaming;

  // Remove the template class, add user status class, and display the card
  card.classList.remove('card-template');
  card.classList.add(user.status); 

  // Append card to the container
  const streamersContainer = document.querySelector('.streamers-container');
  streamersContainer.appendChild(card);
}

function clearStreamersContainer() {
  const streamersContainer = document.querySelector('.streamers-container');
  while (streamersContainer.firstChild) {
    streamersContainer.removeChild(streamersContainer.firstChild);
  }
}

document.querySelector('.favorites-button').addEventListener('click', () => {
  clearStreamersContainer();

 
});

document.querySelector('.status-button.online').addEventListener('click', () => {
  clearStreamersContainer();


});

document.querySelector('.status-button.offline').addEventListener('click', () => {
  clearStreamersContainer();


});

function filterCards(status) {
  const cards = document.querySelectorAll('.streamers-container .card');
  cards.forEach(card => {
    if (card.classList.contains(status)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

document.querySelector('.status-button.online').addEventListener('click', () => {

  filterCards('online');
});

document.querySelector('.status-button.offline').addEventListener('click', () => {


  filterCards('offline');
});


function onNewUser(newUser) {
  // Add a card for the new user
  addUserCard(newUser);
}

document.querySelector('.favorites-button').addEventListener('click', () => {
  // Fetch data for the favorite streamers and populate the cards
  fetch('/favorites')
    .then(response => response.json())
    .then(data => {
      data.forEach(user => addUserCard(user));
    })
    .catch(error => console.error(error));
});

document.querySelector('.status-button.online').addEventListener('click', () => {
  // Fetch data for online streamers and populate the cards
  fetch('/online')
    .then(response => response.json())
    .then(data => {
      data.forEach(user => addUserCard(user));
    })
    .catch(error => console.error(error));
});

document.querySelector('.status-button.offline').addEventListener('click', () => {
  // Fetch data for offline streamers and populate the cards
  fetch('/offline')
    .then(response => response.json())
    .then(data => {
      data.forEach(user => addUserCard(user));
    })
    .catch(error => console.error(error));
});