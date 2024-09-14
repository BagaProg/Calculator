'use strict'
const result = document.querySelector('.result');
const button = document.querySelector('.buttons');
const theme = document.querySelector('.theme');
const body = document.body;
const buttons = document.querySelectorAll('.btn'); 
const text = document.querySelectorAll('.text');
button.addEventListener('click' , function(e) {
  if(e.target.closest('.btn')) {
    let obj = e.target.closest('.btn');
    let newObj = obj.value;
    result.innerHTML += newObj;
    
    if (e.target.closest('#equals')) {
      const resultN = document.querySelector('.result').textContent;
      let divText = eval(resultN);
      document.querySelector('.result').textContent = divText; 
    }   
    if (e.target.closest('#clear')) {
      result.innerHTML = "";
    }
    if (e.target.closest('#delete')) {
      const div = document.querySelector(".result");
      const text = div.textContent;
      const newText = text.slice(0, -1);
      div.textContent = newText;
    }
  }
});
theme.addEventListener('click' , function(e) {
  
  body.classList.toggle('_active');
  result.classList.toggle('_active');
  theme.classList.toggle('_active');
  buttons.forEach(buttonItem => {
    buttonItem.classList.toggle('_active');
  });
  text.forEach(textItem => {
    textItem.classList.toggle('_active');
  });
})