const addMovieModal = document.getElementById("add-modal");
const startAddMovieBtn = document.querySelector("body > header > button");
const backgropDiv = document.getElementById("backdrop");
const cancelButton = document.querySelector("button.btn.btn--passive");
const userInputs = addMovieModal.querySelectorAll("input");
const addButton = document.querySelector(".btn--success");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
};

const confirmDeleteButton = document.querySelector(".btn--danger");
const denyDeleteButton = document.querySelector(
  "#delete-modal > div > button.btn.btn--passive"
);

confirmDeleteButton.addEventListener("click", () => {
  deleteMovie(movieId);
});
denyDeleteButton.addEventListener("click", () => {
  deleteMovieModal.classList.toggle("visible");
  toggleBackdrop();
});

const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.toggle("visible");

  //   deleteMovie(movieId);
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
      <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
      </div>
      <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
      </div>
    `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  backgropDiv.classList.toggle("visible");
};

const toggleModal = () => {
  addMovieModal.classList.toggle("visible");
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageURLValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  if (
    titleValue.trim() &&
    imageURLValue.trim() &&
    ratingValue.trim() &&
    ratingValue.trim() > 0 &&
    ratingValue.trim() < 6
  ) {
    const newMovie = {
      id: Math.random(),
      title: titleValue,
      image: imageURLValue,
      rating: ratingValue,
    };

    movies.push(newMovie);
    toggleModal();
    clearMovieInput();
    renderNewMovieElement(
      newMovie.id,
      newMovie.title,
      newMovie.image,
      newMovie.rating
    );

    updateUI();
  } else {
    alert("Please input valid values");
  }
};

const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = "";
  }
};
startAddMovieBtn.addEventListener("click", () => {
  toggleModal();
});

cancelButton.addEventListener("click", () => {
  toggleModal();
  clearMovieInput();
});

backgropDiv.addEventListener("click", () => {
  toggleModal();
});

addButton.addEventListener("click", addMovieHandler);
