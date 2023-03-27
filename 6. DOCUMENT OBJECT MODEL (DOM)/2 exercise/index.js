const header = document.querySelector('h1');
header.style.backgroundColor = 'lightgreen';

const firstParagraph = document.querySelector('p:first-child');
firstParagraph.style.fontWeight = 'bold';

const secondParagraph = document.querySelector('p:nth-child(2)');
secondParagraph.style.color = 'red';

const thirdParagraph = secondParagraph.nextSibling.nextSibling;
thirdParagraph.style.textDecoration = 'underline';

const fourthParagraph = document.querySelector('p:last-child');
fourthParagraph.style.fontStyle = 'italic';

const horizontalAll = document.querySelectorAll('#myList li');
console.log(horizontalAll);
horizontalAll.forEach(el => {
  el.style.display = 'inline';
});

const hide = document.querySelector('span');
hide.style.display = 'none';


