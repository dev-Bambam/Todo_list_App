const ul = document.querySelector('ul');
const no_of_items = document.querySelector('#no-of-items');
let counter = 0

ul.addEventListener('click', (e) => {
    //  delete todo
    if (e.target.name == 'delete') {
        let todo = e.target.parentNode.parentNode;
        todo.remove();
    }

    // marking todo as complete
    if (e.target.type == 'radio') {
        let todo_title = e.target.parentNode.nextElementSibling;
        todo_title.classList.add('line-through');

        // decrease number of items
        counter = parseInt(no_of_items.innerHTML)
        counter--;
        no_of_items.innerHTML = counter;
    };
})

// creating new todos
const formInput = document.forms[0];
formInput.addEventListener('submit', (e) => {
    e.preventDefault()
    let input_field = formInput.querySelector('input[type="text"]');

    if (input_field.value.trim() !== '') {
        // creating todo elements
        const todo_li = document.createElement('li');
        const first_div = document.createElement('div');
        const scnd_div = document.createElement('div');
        const third_div = document.createElement('div');
        const input = document.createElement('input');
        const label = document.createElement('label');
        const p = document.createElement('p');
        const hr = document.createElement('hr');
        const delete_btn = document.createElement('img');
        const todoId = `todo-${Date.now()}`

        // adding classes to elements 
        first_div.className = 'flex justify-between items-center px-3 py-2';
        scnd_div.className = 'flex items-center gap-2';
        third_div.className = 'mt-2';
        input.className = 'hidden';
        label.className = 'custom-radio';
        p.className = 'text-veryDarkGB text-[1rem]';
        delete_btn.className = 'w-3 cursor-pointer';

        // setting attributes
        delete_btn.setAttribute('src', './images/icon-cross.svg');
        delete_btn.setAttribute('name', 'delete');
        input.setAttribute('type', 'radio');
        input.id = todoId;
        label.htmlFor = todoId
        p.textContent = input_field.value
        input_field.value = ""

        // appending elements 
        third_div.appendChild(input);
        third_div.appendChild(label);
        scnd_div.appendChild(third_div);
        scnd_div.appendChild(p);
        first_div.appendChild(scnd_div)
        first_div.appendChild(delete_btn);
        todo_li.appendChild(first_div)
        todo_li.appendChild(hr)

        // appending todo to ul
        ul.appendChild(todo_li)

        // increasing the no of items
        counter = parseInt(no_of_items.innerHTML)
        counter++;
        no_of_items.innerHTML = counter;
    };
});

// clear complete
const clear = document.querySelector('#clear');
clear.addEventListener('click', (e) => {
    const elements = document.querySelectorAll('p');
    let count = 0
    elements.forEach(elem => {
        if (elem.classList.contains('line-through')) {
            let list = elem.parentNode.parentNode.parentNode;
            let current = parseInt(no_of_items.innerHTML);
            no_of_items.innerHTML = --current 
            list.style.display = 'none';
        }
    });
});

// click event on the All, Active and Completed element
const todo_wrapper = document.querySelector('#todo-wrapper');
todo_wrapper.addEventListener('click', (e)=>{
   
    // Completed
    if (e.target.textContent == 'Completed'){
        list = document.querySelectorAll('li p');
        list.forEach(elem => {
            if (!elem.classList.contains('line-through')) {
                elem.parentNode.parentNode.parentNode.style.display = 'none';
            }
        });
    };
    
    // All
    if (e.target.textContent == 'All'){
        list = document.querySelectorAll('li p');
        list.forEach(elem => {
            elem.parentNode.parentNode.parentNode.style.display = 'block';
        });
    }
});

// dark and light theme