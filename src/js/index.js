const form = document.querySelector('form')
const formfields = form.querySelectorAll('input, textarea');

formfields.forEach((e) => {
    e.addEventListener('input', () => {
        hasText(e);
    })
})


function hasText(e) {
   if (e.value !=='') {
    e.classList.add('filled')
    e.classList.remove('notValidated')
   } else {
    e.classList.remove('filled')
   }
}


form.addEventListener('submit', function(event) {
    event.preventDefault();
    let isFormValid = true;
  formfields.forEach((field) => {
    if (field.value === '') {
      isFormValid = false;
      field.classList.add('notValidated');
    } else {
      field.classList.remove('notValidated');
    }
  });
    if (isFormValid) {
        form.submit();
        form.reset();
        formfields.forEach((e) => {
            e.classList.remove('filled')
        })
    }
  });