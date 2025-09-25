/**
 * @file product-filter.js
 * @description Implementa la funcionalidad de filtrado de productos por categoría.
 * @author Ana Sofia Arango Yanza
 */

document.addEventListener('DOMContentLoaded', function () {

  const filterContainer = document.getElementById('category-filter');
  const productItems = document.querySelectorAll('.product-item');

  if (filterContainer && productItems.length > 0) {
    
    filterContainer.addEventListener('click', function (event) {
      event.preventDefault();
      
      const targetLink = event.target.closest('a.list-group-item');
      if (!targetLink) return;

      const currentActive = filterContainer.querySelector('.active');
      if (currentActive) {
        currentActive.classList.remove('active');
      }
      targetLink.classList.add('active');

      const selectedCategory = targetLink.getAttribute('data-category');

      productItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        const shouldBeVisible = (selectedCategory === 'all' || itemCategory === selectedCategory);

        if (shouldBeVisible) {
          // LÓGICA PARA MOSTRAR UN ELEMENTO
          item.style.display = '';
          setTimeout(() => {
            item.classList.remove('hide');
          }, 10);

        } else {
          // LÓGICA PARA OCULTAR UN ELEMENTO
          item.classList.add('hide');

          // El evento solo se ejecutará UNA VEZ gracias a { once: true }
          item.addEventListener('transitionend', () => {
            // DOBLE COMPROBACIÓN: Solo oculta el item si AÚN tiene la clase .hide
            if (item.classList.contains('hide')) {
              item.style.display = 'none';
            }
          }, { once: true });
        }
      });
    });
  }
});