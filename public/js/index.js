function addUserCard(user) {
  const card = document.createElement("div");
  const favoriteButton = document.createElement("button");
  const nameElement = document.createElement("h3");
  const platformElement = document.createElement("p");
  //Remember to make something for the avatar! :)
  const streamerURL = user.user_streamer;
  const streamerOnline = user.is_online;
  nameElement.textContent = user.name;
  favoriteButton.innerHTML = user.isFavorited ? "★" : "☆";
  platformElement.textContent = user.platform.platform_name;

  card.appendChild(nameElement);
  card.appendChild(platformElement);
  card.appendChild();

  card.classList.add("streamer-card");
  favoriteButton.classList.add("favorite-button");
  nameElement.classList.add("card-username");
  platformElement.classList.add("card-platform");
  platformElement.classList.add(
    `platform-${user.platform.platform_name.toLowerCase()}`
  );
  return;
}

// function addUserCard(user) {
//   //Select this card, and then CLONE IT.
//   console.log(user);
//   const cardTemplate = document.querySelector(".card-template");
//   const card = cardTemplate.cloneNode(true);

//   // Populate card with user data
//   card.querySelector(".card-avatar").src = user.avatarUrl;
//   card.querySelector(".card-username").textContent = user.username;
//   card.querySelector(".card-streaming").textContent = user.streaming;
//   card.querySelector(".card-name").textContent = user.name; // Add the streamer's name

//   card.classList.remove("card-template");
//   card.classList.add(user.status);
//   card.classList.add(`platform-${user.platform.toLowerCase()}`);

//   const favoriteButton = document.createElement("button");
//   favoriteButton.classList.add("favorite-button");
//   favoriteButton.innerHTML = user.isFavorited ? "★" : "☆";

//   // Event listener for liking/unliking a user
//   //How does isFavorited method work
//   favoriteButton.addEventListener("click", (event) => {
//     event.stopPropagation(); // Prevent the card's click event
//     const isFavorited = favoriteButton.innerHTML === "★";
//     fetch(`/favorites/${user.id}`, { method: isFavorited ? "DELETE" : "POST" })
//       .then((response) => {
//         if (response.ok) {
//           favoriteButton.innerHTML = isFavorited ? "☆" : "★";
//         }
//       })
//       .catch((error) => console.error(error));
//   });

//   // Append favorite button to the card
//   card.querySelector(".card-info").appendChild(favoriteButton);

//   // Append card to the container
//   const streamersContainer = document.querySelector(".streamers-container");
//   streamersContainer.appendChild(card);

//   // Event listener for card click
//   card.addEventListener("click", () => {
//     window.location.href = user.streamer_url; // Open the streamer's URL when the card is clicked
//   });
// }

function clearStreamersContainer() {
  const streamersContainer = document.querySelector(".streamers-container");
  while (streamersContainer.firstChild) {
    streamersContainer.removeChild(streamersContainer.firstChild);
  }
}

document.querySelector(".favorites-button").addEventListener("click", () => {
  clearStreamersContainer();
});

document
  .querySelector(".status-button.offline")
  .addEventListener("click", () => {
    clearStreamersContainer();
  });

document
  .querySelector(".status-button.online")
  .addEventListener("click", () => {});

document
  .querySelector(".status-button.offline")
  .addEventListener("click", () => {
    filterCards("offline");
  });

function onNewUser(newUser) {
  // Add a card for the new user
  addUserCard(newUser);
}

document.querySelector(".favorites-button").addEventListener("click", () => {
  // Fetch data for the favorite streamers and populate the cards
  fetch("/favorites")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => addUserCard(user));
    })
    .catch((error) => console.error(error));
});

document
  .querySelector(".status-button.offline")
  .addEventListener("click", () => {
    // Fetch data for offline streamers and populate the cards
    fetch("/offline")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((user) => addUserCard(user));
      })
      .catch((error) => console.error(error));
  });

document.querySelector("#logout-button").addEventListener("click", () => {
  fetch("/logout", { method: "POST" })
    .then((response) => {
      if (response.ok) {
        // Redirect user to login page, or show a "logged out" message, etc.
        window.location.href = "/login";
      } else {
        console.error("Logout failed");
      }
    })
    .catch((error) => console.error(error));
});

document
  .querySelector(".status-button.online")
  .addEventListener("click", () => {
    clearStreamersContainer();
    //Call this person.
    fetch("/online")
      //
      .then((response) => response.json())
      .then((data) => {
        let ourStuff = data[0].streamers;
        ourStuff.forEach((hotdog) => addUserCard(hotdog));
        return;
        //Promise not resolved.
      })
      .catch((error) => console.error(error));
    //   .catch((error) => console.error(error));
    //   .then((data) => {
    //     data.forEach((user) => addUserCard(user));
    //   })
    //   ;
  });
