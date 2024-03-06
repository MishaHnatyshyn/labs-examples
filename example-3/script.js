const form = document.getElementById('calculator-form');
const result = document.getElementById('result');

const sum = (a, b) => a + b;

const updateResults = (value) => {
    result.innerText = value;
}

const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    const calculatedValue = sum(Number(formProps['first-number']), Number(formProps['second-number']));
    updateResults(calculatedValue);
}

form.addEventListener('submit', handleSubmit);


