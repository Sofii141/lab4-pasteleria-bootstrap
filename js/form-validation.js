/**
 * @file form-validation.js
 * @description Gestiona la validación en tiempo real del formulario de sugerencias.
 * @author Ana Sofia Arango Yanza
 * @version 1.0
 */

// Se ejecuta cuando el contenido del DOM ha sido completamente cargado y parseado.
document.addEventListener('DOMContentLoaded', function () {

  // --- CÓDIGO DE VALIDACIÓN DEL FORMULARIO DE SUGERENCIAS ---

  // Selección de los elementos del DOM necesarios para la validación.
  const form = document.getElementById('suggestionForm'); // El formulario completo.

  // Se verifica que el formulario exista en la página antes de continuar.
  if (form) {
      const productName = document.getElementById('productName');
      const productDescription = document.getElementById('productDescription');
      const categoryRadios = document.querySelectorAll('input[name="categoryOptions"]');
      const categoryError = document.getElementById('categoryError'); // Elemento para mostrar error de radio buttons.

      /**
       * Valida un campo de texto (input o textarea).
       * Comprueba si el campo no está vacío (después de quitar espacios en blanco).
       * @param {HTMLElement} field - El campo de texto a validar.
       * @returns {boolean} - True si es válido, false si no.
       */
      const validateTextField = (field) => {
        if (field.value.trim() === '') {
          field.classList.remove('is-valid');
          field.classList.add('is-invalid'); // Clase de Bootstrap para feedback de error.
          return false;
        } else {
          field.classList.remove('is-invalid');
          field.classList.add('is-valid'); // Clase de Bootstrap para feedback de éxito.
          return true;
        }
      };
      
      /**
       * Valida el grupo de radio buttons de categoría.
       * Comprueba si al menos una de las opciones ha sido seleccionada.
       * @returns {boolean} - True si una opción está seleccionada, false si no.
       */
      const validateCategory = () => {
        // 'some' comprueba si al menos un elemento del array cumple la condición.
        const isChecked = Array.from(categoryRadios).some(radio => radio.checked);
        if (!isChecked) {
          categoryError.textContent = 'Por favor, selecciona una opción.'; // Muestra mensaje de error.
          return false;
        } else {
          categoryError.textContent = ''; // Limpia el mensaje de error.
          return true;
        }
      };

      // --- Asignación de Event Listeners para validación en tiempo real ---
      // Requisito: Validaciones se activan al cambiar el foco (evento 'blur').
      
      productName.addEventListener('blur', () => validateTextField(productName));
      productDescription.addEventListener('blur', () => validateTextField(productDescription));
      categoryRadios.forEach(radio => radio.addEventListener('change', () => validateCategory()));

      // --- Manejo del Envío del Formulario ---
      // Requisito: Validaciones se activan al dar click en el botón registrar (evento 'submit').
      form.addEventListener('submit', function (event) {
        
        // Previene el envío real del formulario, que recargaría la página.
        event.preventDefault();
        event.stopPropagation();

        // Ejecuta todas las funciones de validación para obtener el estado final.
        const isNameValid = validateTextField(productName);
        const isDescriptionValid = validateTextField(productDescription);
        const isCategoryValid = validateCategory();

        // Si todos los campos son válidos, se simula el envío.
        if (isNameValid && isDescriptionValid && isCategoryValid) {
          alert('¡Sugerencia enviada con éxito!');
          form.reset(); // Limpia todos los campos del formulario.
          
          // Elimina las clases de validación para que el formulario vuelva a su estado inicial.
          form.classList.remove('was-validated');
          document.querySelectorAll('.is-valid, .is-invalid').forEach(el => {
            el.classList.remove('is-valid', 'is-invalid');
          });

        } else {
          // Si algo es inválido, se añade la clase 'was-validated' a todo el formulario.
          // Bootstrap usa esta clase para mostrar todos los mensajes de 'invalid-feedback' a la vez.
          form.classList.add('was-validated');
        }
      }, false);
  }
});