# Editor Markdown

Este proyecto es un editor de Markdown que permite a los usuarios escribir en Markdown y ver la conversión a HTML en tiempo real. Incluye características como la opción de cambiar entre temas claro y oscuro, guardar y cargar archivos Markdown, y sanitización del HTML generado para evitar vulnerabilidades XSS.

## Características

- **Conversión en tiempo real**: Escribe en Markdown y ve la conversión instantánea a HTML.
- **Cambio de tema**: Cambia entre un tema claro y un tema oscuro para una mejor experiencia de usuario.
- **Guardar y cargar archivos**: Guarda tu trabajo como un archivo `.md` y cárgalo más tarde para continuar editando.
- **Seguridad**: El HTML generado se sanitiza automáticamente para evitar ataques XSS.
- **Interfaz moderna**: Botones con iconos y efectos visuales atractivos, diseñados para ser intuitivos y fáciles de usar.

## Instalación

Para utilizar este proyecto, simplemente clona el repositorio o descarga los archivos y abre `index.html` en tu navegador.

```bash
git clone https://github.com/Jorge-Levi/markdown-editor.git
cd editor-markdown
```

Luego, abre el archivo `index.html` en tu navegador.

## Uso

- **Escribir en Markdown**: Escribe en el área de texto para ver la vista previa en HTML en el panel de la derecha.
- **Cambiar Tema**: Haz clic en el botón "Cambiar Tema" para alternar entre los temas claro y oscuro.
- **Guardar Archivo**: Haz clic en el botón "Guardar" para descargar el contenido del editor como un archivo `.md`.
- **Cargar Archivo**: Haz clic en "Cargar" para seleccionar un archivo `.md` y cargar su contenido en el editor.

## Tecnologías Utilizadas

- **HTML5**: Estructura de la aplicación.
- **CSS3**: Estilización de la interfaz, incluyendo responsividad y temas.
- **JavaScript**: Lógica para la conversión de Markdown a HTML, cambio de tema, y gestión de archivos.
- **Font Awesome**: Iconos usados en los botones.
- **Showdown.js**: Biblioteca utilizada para convertir Markdown a HTML.
- **DOMPurify**: Biblioteca utilizada para sanitizar el HTML generado.

## Personalización

Puedes personalizar los estilos y funcionalidades del editor ajustando los archivos `styles.css` y `script.js`. Por ejemplo, puedes cambiar la paleta de colores, modificar los efectos de hover, o añadir nuevas funcionalidades.

## Contribución

Las contribuciones son bienvenidas. Si tienes ideas para mejorar el proyecto, siéntete libre de hacer un fork del repositorio y enviar un pull request.

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza los cambios y haz commit (`git commit -am 'Agregar nueva característica'`).
4. Empuja la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la [MIT License](https://opensource.org/licenses/MIT). Puedes usarlo, modificarlo y distribuirlo libremente, siempre y cuando incluyas una copia de la licencia.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de [tapialugardo29@gmail.com](mailto:tapialugardo29@gmail.com).

---

¡Gracias por usar el Editor Markdown! Espero que disfrutes utilizando este proyecto tanto como yo disfruté desarrollándolo.
