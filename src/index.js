document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  let newInput = document.getElementById('new-task-description');

  document.querySelector('form').addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log("Button was clicked!");
    handleToDo(newInput.value);

    form.reset();
    
  })
});

function handleToDo(todo){
  //console.log("new todo: ", todo);
  let p = document.createElement('li');
  p.textContent = todo;
  document.querySelector('#tasks').appendChild(p);
}