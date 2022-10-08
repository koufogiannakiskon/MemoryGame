const checkbox = document.getElementById('checkbox');
const section = document.querySelector('section');

checkbox.addEventListener('change', () => {
    //change the theme
    document.body.classList.toggle('dark');
    section.classList.toggle('dark');
});