const colorPicker = document.getElementById('color-picker');
const label = document.querySelector('label');
const button = document.getElementById('change-color');

button.addEventListener('click', () => {
    label.style.backgroundColor = colorPicker.value;
});