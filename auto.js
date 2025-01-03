
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

/
const darkMode = localStorage.getItem('dark-mode');


if (darkMode === 'enabled') {
  body.classList.add('dark-mode');
  toggleButton.textContent = 'Mode clair';
}


toggleButton.addEventListener('click', () => {
  const isDarkMode = body.classList.toggle('dark-mode');

  
    localStorage.setItem('dark-mode', 'enabled');
    toggleButton.textContent = 'Mode clair';
  } else {
    localStorage.setItem('dark-mode', 'disabled');
    toggleButton.textContent = 'Mode sombre';
  }
});
