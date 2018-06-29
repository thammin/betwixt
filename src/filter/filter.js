const store = require('../store.js');

/**
 * initialize
 */
function init() {
    var inputs = document.querySelector('.inputs');
    var button = document.querySelector('.updateButton');

    inputs.innerHTML = store.get();
    inputs.addEventListener('input', function(e) {
        button.style.display = 'block';
    });

    button.addEventListener('click', function(e) {
        store.set(inputs.value);
        button.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', init);
