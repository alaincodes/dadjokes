const jokesContainer = document.querySelector('#jokes-container');
const randomJokeBtn = document.querySelector('#random-joke-btn');

function getJokes() {
  fetch('https://icanhazdadjoke.com', {
    headers: {
      accept: 'application/json',
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        console.log(
          'Looks like there was a problem. Status Code: ' + response.status,
        );
        return;
      }
      response.json().then((data) => {
        console.log(data.joke);
        const joke = document.createElement('p');
        joke.textContent = data.joke;
        jokesContainer.appendChild(joke);
      });
    })
    .catch((error) => {
      console.log('Fetch Error', error);
    });
}

randomJokeBtn.addEventListener('click', function getRandomJoke() {
  jokesContainer.removeChild(jokesContainer.lastElementChild);
  getJokes();
});

getJokes();
