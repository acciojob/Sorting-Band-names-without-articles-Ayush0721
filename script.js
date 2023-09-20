let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Pink Floyd', 'The Beatles', 'Aerosmith'];
function removeArticles(name) {
  return name.replace(/^(?:the|a|an) /i, ''); 
}


bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));


let bandList = document.getElementById('band');


bandNames.forEach(name => {
  let li = document.createElement('li');
  li.textContent = name;
  bandList.appendChild(li);
});

