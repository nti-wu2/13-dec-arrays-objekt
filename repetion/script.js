let input = document.querySelector('input');
let list = document.querySelector('ul');
let todos = [];

input.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){

        // Add input to Todos array
        let todo = e.target.value;
        todos.push(todo);

        input.value = '';
        updateUI();

    }
})


function updateUI(){

    list.innerHTML = '';

    for(let i = 0; i< todos.length; i++){

        let el = document.createElement('li');
        el.innerText = todos[i];

        el.addEventListener('click', (clickEvent) => {

            if(clickEvent.altKey){
                removeTodo(i);
            }
        })

        list.appendChild(el);

    }
}

function removeTodo(index){
    console.log(`Removing ${todos[index]}.`);
    todos.splice(index, 1);
    updateUI();
}