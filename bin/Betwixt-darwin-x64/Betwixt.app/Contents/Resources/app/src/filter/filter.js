const store = require('../store.js');

/**
 * initialize
 */
function init() {
    var inputs = document.querySelector('.inputs');
    inputs.innerHTML = store.get();
    inputs.addEventListener('change', function(e) {
        store.set(e.target.value);
    });
}

document.addEventListener('DOMContentLoaded', init);
