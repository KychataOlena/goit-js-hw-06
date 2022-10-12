const counterValue = document.querySelector('#value');
console.log(counterValue);
const AddCounterValue = document.querySelector('[data-action="increment"]');
console.log(AddCounterValue);
const removeCounterValue = document.querySelector('[data-action="decrement"]');
console.log(removeCounterValue);


const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};


AddCounterValue.addEventListener('click', function () {
  counter.decrement()
  counterValue.textContent = counter.value;
})
removeCounterValue.addEventListener("click", function () {
  counter.increment();
  counterValue.textContent = counter.value;
});