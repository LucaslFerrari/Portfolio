function showPage(pageId) {
    // Oculta todas as seções
    var sections = document.querySelectorAll('.page-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Mostra a seção correspondente ao botão clicado
    var selectedSection = document.getElementById(pageId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Mostra a página inicial por padrão
document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
});
