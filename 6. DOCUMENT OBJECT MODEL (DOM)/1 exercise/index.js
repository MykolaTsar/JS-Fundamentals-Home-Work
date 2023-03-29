const list  = document.getElementById('list');
console.log(list);
const itemList = Array.from(list.getElementsByTagName('li'));
console.log(itemList);
const answer = [
  itemList[0].textContent,
  itemList[itemList.length - 1].textContent,
  itemList[1].textContent,
  itemList[4].textContent,
  itemList[3].textContent
];
console.log(answer);
alert(answer);