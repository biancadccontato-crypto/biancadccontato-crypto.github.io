document.getElementById('darkBtn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    icon.className = document.body.classList.contains('dark-mode')
    ? 'ti ti-sun'
    : 'ti ti-moon';
});