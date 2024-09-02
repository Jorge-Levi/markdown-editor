document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    const theme = document.body.classList.contains('dark') ? 'Oscuro' : 'Claro';
    showMessage(`Tema cambiado a ${theme}`);
});

document.getElementById('save-file').addEventListener('click', function() {
    const textToSave = document.getElementById('markdown').value;
    const blob = new Blob([textToSave], { type: 'text/markdown' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'document.md';
    link.click();
    showMessage('Archivo guardado como document.md');
});

document.getElementById('load-file').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('markdown').value = e.target.result;
            document.getElementById('preview').innerHTML = markdownToHTML(e.target.result);
            showMessage(`Archivo ${file.name} cargado`);
        };
        reader.readAsText(file);
    }
});

document.getElementById('markdown').addEventListener('input', function() {
    const markdownText = this.value;
    const htmlText = markdownToHTML(markdownText);
    document.getElementById('preview').innerHTML = htmlText;
});

function markdownToHTML(markdown) {
    // Crear un convertidor de Showdown
    var converter = new showdown.Converter();
    // Convertir el Markdown a HTML
    var html = converter.makeHtml(markdown);
    // Sanitizar el HTML para evitar XSS
    var cleanHtml = DOMPurify.sanitize(html);
    return cleanHtml;
}


function showMessage(message) {
    const statusMessage = document.getElementById('status-message');
    statusMessage.textContent = message;
    statusMessage.classList.add('show');
    setTimeout(() => {
        statusMessage.classList.remove('show');
    }, 3000);
}
