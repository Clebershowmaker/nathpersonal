/* =============================================================================
   FORM.JS - CONTACT FORM VALIDATION & SUBMISSION
   ============================================================================= */

document.addEventListener('DOMContentLoaded', function() {
  initializeContactForm();
});

/* =============================================================================
   INITIALIZE CONTACT FORM
   ============================================================================= */

function initializeContactForm() {
  const form = document.getElementById('contactForm');

  if (!form) {
    return; // Exit if form doesn't exist
  }

  // Get all form fields
  const nameField = document.getElementById('nome');
  const emailField = document.getElementById('email');
  const phoneField = document.getElementById('telefone');
  const serviceField = document.getElementById('servico');
  const messageField = document.getElementById('mensagem');

  // Add real-time validation on blur
  if (nameField) nameField.addEventListener('blur', () => validateField('nome'));
  if (emailField) emailField.addEventListener('blur', () => validateField('email'));
  if (phoneField) phoneField.addEventListener('blur', () => validateField('telefone'));
  if (serviceField) serviceField.addEventListener('blur', () => validateField('servico'));
  if (messageField) messageField.addEventListener('blur', () => validateField('mensagem'));

  // Add form submission handler
  form.addEventListener('submit', handleFormSubmit);
}

/* =============================================================================
   VALIDATE FIELD FUNCTION
   ============================================================================= */

function validateField(fieldName) {
  const field = document.getElementById(fieldName);
  const errorElement = document.getElementById(fieldName + 'Error');

  if (!field || !errorElement) {
    return true; // Skip if elements don't exist
  }

  let isValid = true;
  let errorMessage = '';

  // Validate based on field name
  switch (fieldName) {
    case 'nome':
      if (field.value.trim().length < 3) {
        isValid = false;
        errorMessage = 'Nome deve ter no mínimo 3 caracteres';
      }
      break;

    case 'email':
      if (!isValidEmail(field.value.trim())) {
        isValid = false;
        errorMessage = 'Digite um email válido (ex: seu.email@exemplo.com)';
      }
      break;

    case 'telefone':
      // Telefone é opcional, mas se preenchido, validar
      if (field.value.trim().length > 0 && field.value.trim().length < 10) {
        isValid = false;
        errorMessage = 'Telefone inválido (mínimo 10 dígitos)';
      }
      break;

    case 'servico':
      if (field.value.trim() === '') {
        isValid = false;
        errorMessage = 'Selecione um serviço';
      }
      break;

    case 'mensagem':
      if (field.value.trim().length < 10) {
        isValid = false;
        errorMessage = 'Mensagem deve ter no mínimo 10 caracteres';
      }
      break;
  }

  // Update UI based on validation result
  if (isValid) {
    field.classList.remove('invalid');
    field.classList.add('valid');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
  } else {
    field.classList.remove('valid');
    field.classList.add('invalid');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('show');
  }

  return isValid;
}

/* =============================================================================
   EMAIL VALIDATION REGEX
   ============================================================================= */

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/* =============================================================================
   HANDLE FORM SUBMISSION
   ============================================================================= */

function handleFormSubmit(e) {
  e.preventDefault();

  // Validate all required fields
  const isNomeValid = validateField('nome');
  const isEmailValid = validateField('email');
  const isTelefoneValid = validateField('telefone');
  const isServiceValid = validateField('servico');
  const isMessageValid = validateField('mensagem');

  // Check if all required fields are valid
  const allValid = isNomeValid && isEmailValid && isServiceValid && isMessageValid && isTelefoneValid;

  if (!allValid) {
    showErrorMessage('Por favor, corrija os erros acima.');
    return;
  }

  // Collect form data
  const formData = {
    nome: document.getElementById('nome').value.trim(),
    email: document.getElementById('email').value.trim(),
    telefone: document.getElementById('telefone').value.trim(),
    servico: document.getElementById('servico').value.trim(),
    mensagem: document.getElementById('mensagem').value.trim(),
    whatsapp: document.getElementById('whatsapp').checked,
    timestamp: new Date().toISOString()
  };

  // Save to localStorage
  try {
    // Get existing submissions or create new array
    let submissions = JSON.parse(localStorage.getItem('contactFormSubmissions')) || [];

    // Add new submission
    submissions.push(formData);

    // Save back to localStorage
    localStorage.setItem('contactFormSubmissions', JSON.stringify(submissions));

    // Show success message
    showSuccessMessage('Mensagem enviada com sucesso! Nathalia responderá em breve.');

    // Clear form and errors
    clearForm();

    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      const messageElement = document.getElementById('formMessage');
      if (messageElement) {
        messageElement.classList.remove('show');
      }
    }, 5000);

  } catch (error) {
    console.error('Erro ao salvar formulário:', error);
    showErrorMessage('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
  }
}

/* =============================================================================
   SHOW SUCCESS MESSAGE
   ============================================================================= */

function showSuccessMessage(message) {
  const messageElement = document.getElementById('formMessage');

  if (!messageElement) {
    return;
  }

  messageElement.textContent = message;
  messageElement.classList.remove('error');
  messageElement.classList.add('success', 'show');

  // Scroll to message
  messageElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* =============================================================================
   SHOW ERROR MESSAGE
   ============================================================================= */

function showErrorMessage(message) {
  const messageElement = document.getElementById('formMessage');

  if (!messageElement) {
    return;
  }

  messageElement.textContent = message;
  messageElement.classList.remove('success');
  messageElement.classList.add('error', 'show');

  // Scroll to message
  messageElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* =============================================================================
   CLEAR FORM
   ============================================================================= */

function clearForm() {
  const form = document.getElementById('contactForm');

  if (!form) {
    return;
  }

  // Reset form fields
  form.reset();

  // Remove validation classes
  const fields = form.querySelectorAll('input, textarea, select');
  fields.forEach(field => {
    field.classList.remove('valid', 'invalid');
  });

  // Clear all error messages
  const errorElements = form.querySelectorAll('.form-error');
  errorElements.forEach(error => {
    error.textContent = '';
    error.classList.remove('show');
  });
}
