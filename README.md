# Pasteleria Sofi - Laboratorio 4

Página web responsiva para una pastelería ficticia. Se uso de Bootstrap 5 para crear una maquetación moderna y adaptable a diferentes tamaños de pantalla.

## Autor

*   **Ana Sofia Arango Yanza**
  
## Vista Previa

<img width="1599" height="735" alt="image" src="https://github.com/user-attachments/assets/f9e344c3-b7c5-4aec-a9ac-69e1b5a5b57d" />

<img width="1599" height="730" alt="image" src="https://github.com/user-attachments/assets/5162580a-5ee6-448b-aa13-0d24611244d2" />

<img width="1599" height="735" alt="image" src="https://github.com/user-attachments/assets/0f2bea5b-fa61-469a-8e13-aa12b2fd9a5a" />


## Características y Requerimientos Cumplidos

Este proyecto cumple con todos los puntos solicitados en la guía del Laboratorio 4:

### Estructura General
- [x] **Página Completa:** Construida con Encabezado, Barra de Navegación, 3 Secciones, Barra Lateral y Pie de Página.
- [x] **Bootstrap 5:** Todos los elementos estructurales y de estilo principales están construidos con Bootstrap 5.

### Componentes Específicos
- [x] **Encabezado (Header):** Ocupa todo el ancho del dispositivo y contiene un contenedor interno. Incluye enlaces a redes sociales con iconos.
- [x] **Barra de Navegación:** Ocupa todo el ancho, es _sticky_ (fija en la parte superior) y se colapsa en pantallas menores a `lg` (large). Contiene enlaces que dirigen a las 3 secciones principales de la página.
- [x] **Sección 1 (Promociones):** Implementada con un Carrusel de Bootstrap que muestra 3 promociones distintas. Las imágenes se adaptan correctamente al contenedor.
- [x] **Sección 2 (Productos):**
    - [x] **Diseño Responsivo de Columnas:**
        - En dispositivos medianos (`md`, ≥768px), la barra lateral ocupa 4 columnas y los productos 8.
        - En dispositivos pequeños (`sm`, ≥576px), la barra lateral ocupa 2 columnas y los productos 10.
        - En dispositivos extra pequeños (`xs`, <576px), los elementos se apilan verticalmente.
    - [x] **Grid de Productos Responsivo:**
        - Muestra 6 productos por fila en pantallas grandes (`lg`).
        - Muestra 4 productos por fila en pantallas medianas (`md`).
        - Muestra 3 productos por fila en pantallas pequeñas (`sm`).
    - [x] **Tarjeta de Producto:** Cada producto muestra imagen (`img-fluid`), título, precio y un botón (`btn btn-primary`) para agregar al carrito.
    - [x] **Barra Lateral:** Contiene una lista de categorías temáticas de la pastelería con sus respectivos iconos.
- [x] **Sección 3 (Sugerencias):** Incluye un formulario para que los usuarios sugieran nuevos productos.
- [x] **Pie de Página (Footer):** Ocupa todo el ancho del dispositivo, contiene un contenedor y enlaces a redes sociales.

### Funcionalidad y Estilo
- [x] **Validación de Formulario:** El formulario de sugerencias utiliza las clases de validación de Bootstrap y se activa al intentar enviar el formulario.
- [x] **Uso de Clases de Bootstrap:** Se han implementado correctamente las clases solicitadas como `text-center`, `mb-4`, `lead`, `form-label`, `form-control`, `border`, etc., a lo largo del proyecto.
- [x] **Estilos Personalizados:** Se han añadido estilos CSS personalizados para mejorar la paleta de colores, la tipografía y las animaciones, creando una apariencia más profesional y cohesiva.

## Tecnologías Utilizadas

*   **HTML5:** Para la estructura semántica del contenido.
*   **CSS3:** Para estilos personalizados, animaciones y mejoras visuales.
*   **Bootstrap 5:** Framework principal para el diseño responsivo y los componentes de la interfaz.
*   **Font Awesome:** Para los iconos utilizados en la página.
*   **Google Fonts:** Para las tipografías personalizadas (`Great Vibes`, `Playfair Display`, `Raleway`).
*   **JavaScript:** Para la funcionalidad de validación del formulario de Bootstrap.
