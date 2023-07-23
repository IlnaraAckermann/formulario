const form = document.querySelector('form')
const formfields = form.querySelectorAll('input, textarea');
const emailInput = form.querySelector('#email');
console.log(emailInput)



formfields.forEach((e) => {
  e.addEventListener('input', () => {
    hasText(e);
  })
})


function hasText(e) {
  if (e.value !== '') {
    e.classList.add('filled')
    e.classList.remove('notValidated')
  } else {
    e.classList.remove('filled')
  }
}


form.addEventListener('submit', function (event) {
  event.preventDefault();
  let isFormValid = true;


  formfields.forEach((field) => {
    if (field.id === 'email' && !validarEmail(field.value)) {
      isFormValid = false;
      field.classList.add('notValidated');
    } else if (field.value === '') {
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


function formatarTelefone() {
  const telefoneInput = document.getElementById('telefone');
  let telefone = telefoneInput.value;

  telefone = telefone.replace(/\D/g, ''); // Remove caracteres não numéricos

  if (telefone.length === 11) {
    telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  } else if (telefone.length === 10) {
    telefone = telefone.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
  } else {
    // Caso o telefone tenha mais ou menos dígitos, não aplicar a máscara
  }
  telefoneInput.value = telefone;
}

function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}


