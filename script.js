let submitButton = document.getElementById('submit-btn');
let container = document.getElementById('container');


submitButton.addEventListener('click', e => {
    e.preventDefault();
    container.remove();
    
})