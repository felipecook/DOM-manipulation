
// Adds div element to container
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is glorious text-content';

container.appendChild(content);

//Adds paragraph to div content
const paragraphContent = document.createElement('p');
paragraphContent.classList.add('paragraph');
paragraphContent.textContent = 'Hey I\'m red!';


content.appendChild(paragraphContent);


