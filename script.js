document.addEventListener('DOMContentLoaded', () => {
  // Load Shared Header
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      const headerElem = document.getElementById('header-placeholder');
      if (headerElem) headerElem.innerHTML = data;
    });

  // Load Shared Footer
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      const footerElem = document.getElementById('footer-placeholder');
      if (footerElem) footerElem.innerHTML = data;
    });
});
