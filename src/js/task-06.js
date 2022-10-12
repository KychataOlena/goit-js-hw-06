
const formRef = document.querySelector(".login-form");
const inputRef = document.querySelector('#validation-input');

const onInputBlur = (event) => {
    const requiredLength = Number(event.target.dataset.length);
    if (event.currentTarget.value.length >= requiredLength) {
        changeClass('valid', 'invalid', event.target);

    }
    else {
        changeClass('invalid', 'valid', event.target)
    }
};
inputRef.addEventListener('blur', onInputBlur);

function changeClass(add, remove, elem) {
    elem.classList.add(add);
    elem.classList.remove(remove);
}