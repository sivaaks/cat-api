const API_URL= 'https://cat-fact.herokuapp.com/facts/random';

(function(){

    const header = document.createElement('header');
    header.setAttribute('class', 'header');

    const headerContainer = document.createElement('div');
    headerContainer.setAttribute('class', 'header-container');

    const headingText= document.createElement('h1');
    headingText.setAttribute('class','title');
    headingText.innerText='Random cat facts';

    headerContainer.append(headingText);

    const imgContainer = document.createElement('div');
    imgContainer.setAttribute('class', 'img-container');

    const img = document.createElement('img');
    img.setAttribute('src', `/img/${randomImg()}.jpg`);
    img.setAttribute('alt', '');
    img.setAttribute('class', 'img');

    imgContainer.append(img);

    const inputContainer= document.createElement('div');
    inputContainer.setAttribute('class','input-container');

    const nextFactButton = document.createElement('button');
    nextFactButton.setAttribute('class','page-button');
    nextFactButton.setAttribute('onclick','getCatFact()');
    nextFactButton.innerText='Next fact';

    inputContainer.append(nextFactButton);

    header.append(headerContainer,imgContainer);

    const section = document.createElement('section');
    section.setAttribute('class', 'container');

    const displayContainer = document.createElement('div');
    displayContainer.setAttribute('class', 'display-container');

    const displayText = document.createElement('div');
    displayText.setAttribute('class', 'text');

    displayContainer.append(displayText);
    section.append(displayContainer);

    document.body.append(header, section,inputContainer);

})();

function displayCatFact(fact){

    const displayText = document.querySelector('.text');
    displayText.innerText=fact;

    const img = document.querySelector('.img');
    img.setAttribute('src', `/img/${randomImg()}.jpg`);

}

async function getCatFact() {

    try {
        const data = await fetch(`${API_URL}`);
        const response = await data.json();
        displayCatFact(response.text);
    } catch (msg) {
        console.log(msg);
    }

}

function randomImg() {
    const imgs = ['cat1', 'cat2', 'cat3', 'cat4', 'cat5','cat1', 'cat2', 'cat3', 'cat4', 'cat5'];
    const random=(Math.floor(Math.random(0, (imgs.length - 1)) * 10)).toFixed();
    return imgs[random];
}

getCatFact();