// document.querySelector('#output').style.visibility = 'hidden';
const result = document.querySelector('#output');
result.style.display = 'none';
const inputValue = document.querySelector('#inputVal');

inputValue.addEventListener('input', e =>{
    // document.querySelector('#output').style.visibility = 'visible';
    result.style.display = 'block';
    let val = e.target.value; 

    document.querySelector('#kgOutput').innerHTML = val / 1000;
    document.querySelector('#mcgOutput').innerHTML = val * 1000000;
    document.querySelector('#pcgOutput').innerHTML = val * 1000000000000;
    document.querySelector('#mlgOutput').innerHTML = val * 1000;
});    



// inputValue.addEventListener('input', e =>{
//     // document.querySelector('#output').style.visibility = 'visible';
//     result.style.display = 'block';
//     let val = e.target.value; 

//     document.querySelector('#kgOutput').innerHTML = val / 1000;
//     document.querySelector('#mcgOutput').innerHTML = val * 1000000;
//     document.querySelector('#pcgOutput').innerHTML = val * 1000000000000;
//     document.querySelector('#mlgOutput').innerHTML = val * 1000;
// }); 


    