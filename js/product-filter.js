/**
 * @file product-filter.js
 * @description Implementa la funcionalidad de filtrado de productos por categoría.
 * @author Ana Sofia Arango Yanza
 * @version 1.0
 */

// Se ejecuta cuando el contenido del DOM ha sido completamente cargado y parseado.
document.addEventListener('DOMContentLoaded', function () {

  // --- LÓGICA PARA EL FILTRO DE CATEGORÍAS DE PRODUCTOS ---

  // Selección de los elementos del DOM necesarios para el filtro.
  const filterContainer = document.getElementById('category-filter'); // Contenedor de los enlaces de categoría.
  const productItems = document.querySelectorAll('.product-item');    // Todas las tarjetas de producto.

  // Se verifica que ambos elementos existan antes de añadir el event listener.
  // Esto previene errores si los elementos no se encuentran en la página.
  if (filterContainer && productItems.length > 0) {
    
    // Se añade un único event listener al contenedor principal de las categorías.
    // Esto es más eficiente que añadir un listener a cada enlace individualmente (delegación de eventos).
    filterContainer.addEventListener('click', function (event) {
      
      // Previene el comportamiento por defecto del enlace (que es recargar la página o saltar al ancla).
      event.preventDefault();
      
      // Identifica el enlace de categoría (`<a>`) más cercano al que se le hizo clic.
      const targetLink = event.target.closest('a.list-group-item');
      
      // Si el clic no fue sobre un enlace, no se hace nada.
      if (!targetLink) return;

      // --- Manejo del Estado Visual 'active' ---

      // Busca si ya hay un enlace con la clase 'active' y la elimina.
      const currentActive = filterContainer.querySelector('.active');
      if (currentActive) {
        currentActive.classList.remove('active');
      }
      
      // Añade la clase 'active' al enlace que fue clickeado para resaltarlo visualmente.
      targetLink.classList.add('active');

      // --- Lógica de Filtrado ---

      // Obtiene la categoría seleccionada del atributo 'data-category' del enlace.
      const selectedCategory = targetLink.getAttribute('data-category');

      // Itera sobre cada tarjeta de producto para decidir si debe mostrarse u ocultarse.
      productItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        // La condición para ser visible es:
        // 1. Si la categoría seleccionada es 'all'.
        // 2. Si la categoría del item coincide con la categoría seleccionada.
        const shouldBeVisible = (selectedCategory === 'all' || itemCategory === selectedCategory);

        // Aplica o remueve la clase 'hide' basada en la condición anterior.
        // La clase 'hide' (definida en CSS) se encarga de la animación de ocultar.
        if (shouldBeVisible) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  }
});