const elChange = document.querySelector('#change');
const c1 = document.querySelector('#a');
const c2 = document.querySelector('#b');
const c3 = document.querySelector('#c');
const c4 = document.querySelector('#d');
const c5 = document.querySelector('#e');
const array = [c1, c2, c3, c4, c5];
elChange.addEventListener('click', (evt) =>{
    const key = evt.target;
    for (let i = 0; i < array.length; i++) {
        if (key.className.includes(`content${i+1}`)){
            if (key.className.includes("active") === false) {
                array[i].className += " active";
            }
        }
        if(array[i].id !== key.id) {
            array[i].classList.remove('active')
        }
    }
    

});