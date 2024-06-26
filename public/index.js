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

// 