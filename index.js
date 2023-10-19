
const signUpForm = document.querySelector('main');
const emailForm = document.querySelector('.email-form');
const submitBtn = document.getElementById('submit-btn');
const emailInput = document.getElementById('email');
const successEmail = document.querySelector('.success-msg');
const dismissMsg = document.querySelector('.dismiss-msg');
const submittedEmail = document.querySelector('.submitted-email');

submitBtn.addEventListener("click", (event) => {
    event.preventDefault()

    if (validateEmail(emailInput.value)) {
        submittedEmail.innerText = emailInput.value;
        redirect();
        emailInput.value = "";
        emailForm.classList.remove('error');
    }else {
        emailForm.classList.add('error');
    }

});


dismissMsg.addEventListener('click', () => {
    redirect();
});



function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

function redirect() {
    signUpForm.classList.toggle('hidden');
    successEmail.classList.toggle('hidden');
}