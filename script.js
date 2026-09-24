document.addEventListener('DOMContentLoaded', () => {
  // Load Shared Header
  fetch('header.html')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load header.html');
      return response.text();
    })
    .then(data => {
      const headerElem = document.getElementById('header-placeholder');
      if (headerElem) {
        headerElem.outerHTML = data;
      }
    })
    .catch(err => console.error('Error loading header:', err));

  // Load Shared Footer
  fetch('footer.html')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load footer.html');
      return response.text();
    })
    .then(data => {
      const footerElem = document.getElementById('footer-placeholder');
      if (footerElem) {
        footerElem.outerHTML = data;
      }
    })
    .catch(err => console.error('Error loading footer:', err));
});
