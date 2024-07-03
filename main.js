let addBtn = document.querySelector('#addSumbit');
let toDoContainer = document.querySelector('#toDoContainer');
let inputText = document.querySelector('#inputText')
let clearSubmit = document.querySelector('#clearSubmit');

addBtn.addEventListener('click',function(){
  let paragraph = document.createElement('p');
  paragraph.classList.add('paragraph_styling');
  toDoContainer.appendChild(paragraph);
  paragraph.innerHTML = inputText.value;
  inputText.value = '';

  paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration = 'line-through'
  })


  paragraph.addEventListener('dblclick',function(){
    toDoContainer.removeChild(paragraph)
  })

  clearSubmit.addEventListener('click',function(){
    paragraph.remove();

  })
})



//* Add (Adds the entered word to the list)
//* one click mission completed
//* double click deleted task
//* clear all task remove