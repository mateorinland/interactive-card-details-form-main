const form = document.querySelector('.form-state');
const completedState = document.querySelector(".completed-state");

function handleSubmit(e) {
    console.log("in");
    e.preventDefault();
    completedState.classList.add("show");
    form.classList.add("hide");
  }

form.addEventListener('submit', handleSubmit);