var options = {
    'Option 1': ['Option 1A', 'Option 1B', 'Option 1C'],
    'Option 2': ['Option 2A', 'Option 2B', 'Option 2C'],
    'Option 3': ['Option 3A', 'Option 3B', 'Option 3C']
};

var thirdOptions = {
    'Option 1A': ['Option 1A1', 'Option 1A2', 'Option 1A3'],
    'Option 1B': ['Option 1B1', 'Option 1B2', 'Option 1B3'],
    'Option 1C': ['Option 1C1', 'Option 1C2', 'Option 1C3'],
    'Option 2A': ['Option 2A1', 'Option 2A2', 'Option 2A3'],
    'Option 2B': ['Option 2B1', 'Option 2B2', 'Option 2B3'],
    'Option 2C': ['Option 2C1', 'Option 2C2', 'Option 2C3'],
    'Option 3A': ['Option 3A1', 'Option 3A2', 'Option 3A3'],
    'Option 3B': ['Option 3B1', 'Option 3B2', 'Option 3B3'],
    'Option 3C': ['Option 3C1', 'Option 3C2', 'Option 3C3']
};

var firstDropdown = document.getElementById('first-dropdown');
var secondDropdown = document.getElementById('second-dropdown');
var thirdDropdown = document.getElementById('third-dropdown');

firstDropdown.addEventListener('change', function () {
    var selectedValue = this.value;

    secondDropdown.innerHTML = '';
    thirdDropdown.innerHTML = '';

    secondDropdown.classList.remove('hidden')
    thirdDropdown.classList.add('hidden');

    options[selectedValue].forEach(function (option) {
        var optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        secondDropdown.appendChild(optionElement);
    });
});

secondDropdown.addEventListener('change', function () {
    var selectedValue = this.value;

    thirdDropdown.innerHTML = '';

    thirdDropdown.classList.remove('hidden');

    thirdOptions[selectedValue].forEach(function (option) {
        var optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        thirdDropdown.appendChild(optionElement);
    });
});
