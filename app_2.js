const result = document.querySelector('#output');
result.style.display = 'none';
const inputValue = document.querySelector('#inputVal');

inputValue.addEventListener('input', e =>{
    result.style.display = 'block';
    let val = e.target.value;

    document.querySelector('#cmOutput').innerHTML = val * 100;
    document.querySelector('#dmOutput').innerHTML = val * 10;
    document.querySelector('#mmOutput').innerHTML = val * 1000;
});