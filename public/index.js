// To remove or delete todo
const deleteBtns = document.getElementsByName('delete');
deleteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let todo = btn.parentNode.parentNode;
        todo.remove()
    })
});

// marking completed todo
const radios = document.querySelectorAll('input[type = "radio"]');
radios.forEach(radio =>{
    radio.addEventListener('click', ()=>{
        let todo_title = radio.parentNode.nextElementSibling;
        todo_title.classList.add('line-through');
    })
});

// creating new todos
const formInput = document.forms[0];
formInput.addEventListener('submit', (e)=>{
    e.preventDefault()
    const value = formInput.querySelector('input[type="text"]').value;

    // creating todo elements
    const todo_li = document.createElement('li');

})