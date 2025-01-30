document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.querySelectorAll('p').forEach(p => {
            if (p.style.display === 'none' || p.style.display === '') {
                p.style.display = 'block';
            } else {
                p.style.display = 'none';
            }
        });
    });
});
