//Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
/* <body>
  <main class="mainClass check item">         
    <div id="myDiv">
      <p>First paragraph</p>           
    </div>
  </main> 
</body> */
let main = document.createElement('main');
main.className = 'mainClass check item';

let createDiv = document.createElement('div');
createDiv.id = 'myDiv';
main.prepend(createDiv);

let paragraph = document.createElement('p');
createDiv.prepend(paragraph);
paragraph.innerHTML = 'First paragraph';

document.body.appendChild(main);

console.log(main);






