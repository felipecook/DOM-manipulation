
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
paragraphContent.style.color = 'red';


content.appendChild(paragraphContent);

//Adds h3 to the content parent after the paragraph child
const header3Content = document.createElement('h3');
header3Content.textContent = 'I\'m a blue h3';
header3Content.style.color = 'blue';

content.appendChild(header3Content);


//add div with black border and pink background color to content
const innerDiv =  document.createElement('div');
innerDiv.style.borderStyle = 'dashed';
innerDiv.style.borderColor = 'black';
innerDiv.style.backgroundColor = 'pink';

// adds h1 within the div element
const anotherh1 = document.createElement('h1');
anotherh1.textContent = 'I\'m in a div';
innerDiv.appendChild(anotherh1);

// adds p to the div element
const anotherP = document.createElement('p');
anotherP.textContent = 'ME TOO';
innerDiv.appendChild(anotherP);

content.appendChild(innerDiv);

// select button and make it do an alert
const button1 = document.querySelector('#btn1');

function alertFunction() {
  alert("yayo");
}

// button1.addEventListener('click', alertFunction);
button1.addEventListener('click', function(e){
  e.target.style.backgroundColor = 'blue';
});







