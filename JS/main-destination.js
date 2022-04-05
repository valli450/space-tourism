/* Home page script */
/* Mobbile Menu */
const menuBlock = document.querySelector(".header__menu");

function openMenu() {
    menuBlock.classList.add("showMenu");
    document.querySelector(".header__humburger").style.display = 'none';

}

function closeMenu() {
    menuBlock.classList.remove("showMenu");
    document.querySelector(".header__humburger").style.display = 'block';

}

/* Planet switch script */
const mainContent = document.querySelector(".content");

function takeFromJson(n){
    fetch("./JS/data.json")
    .then(resp => resp.json())
    .then(jsonData => {
        jsonData.destinations.forEach(destination => {
            if (destination.name === n){
                clickedPlanet(
                    destination.images.png, 
                    destination.name, 
                    destination.description, 
                    destination.distance, 
                    destination.travel
                    )
            }
        });
    })
}

function clickedPlanet(img, head, text, dis, time){
    mainContent.innerHTML = `
        <div class="content__txt-about txt-about">
            <div class="txt-about__head">
                <h2><span class="space-num">01</span> Pick your destination</h2>
            </div>
            <div class="txt-about__image">
                <img src="${img}" alt="${head} image"/>
            </div>
        </div>
        <div class="content__distance distance">
            <div class="distance__list">
                <ul>
                    <li onclick="takeFromJson('Moon')" id="Moon">Moon</li>
                    <li onclick="takeFromJson('Mars')" id="Mars">Mars</li>
                    <li onclick="takeFromJson('Europa')" id="Europa">Europa</li>
                    <li onclick="takeFromJson('Titan')" id="Titan">Titan</li>
                </ul>
            </div>
            <div class="distance__about">
                <h2>${head}</h2>
                <p>
                    ${text}
                </p>
            </div>
            <div class="distance__block">
                <div class="distance__km">
                    <p class="distance__text">Avg. distance</p>
                    <h3 class="distance__num">${dis}</h3>
                </div>
                <div class="distance____time">
                    <p class="distance__text">Est. travel time</p>
                    <h3 class="distance__num">${time}</h3>
                </div>
            </div>
        </div>
    `
    document.getElementById(head).classList.add("pSelected");
}
