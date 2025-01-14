const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Récupère le statut du mode sombre dans le localStorage
const darkMode = localStorage.getItem('dark-mode');

// Applique le mode sombre si nécessaire
if (darkMode === 'enabled') {
  body.classList.add('dark-mode');
  toggleButton.textContent = 'Mode clair';
}

// Ajoute un écouteur d'événements pour basculer entre les modes
toggleButton.addEventListener('click', () => {
  const isDarkMode = body.classList.toggle('dark-mode'); // Active/désactive la classe

  if (isDarkMode) {
    // Active le mode sombre
    localStorage.setItem('dark-mode', 'enabled');
    toggleButton.textContent = 'Mode clair';
  } else {
    // Désactive le mode sombre
    localStorage.setItem('dark-mode', 'disabled');
    toggleButton.textContent = 'Mode sombre';
  }
});
