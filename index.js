let main = document.getElementsByTagName(main);

main.remove();

let newHeader = document.createElement('h1');

newHeader.setAttribute("id", "victory")

let yourName = "Natasha Bartley"
newHeader.textContent(`${yourName} is the champion`)

body.append(main, newHeader)