/* Mobbile Menu */
const menuBlock = document.querySelector(".header__menu");

function openMenu() {
    menuBlock.classList.add("showMenu");
}

function closeMenu() {
    menuBlock.classList.remove("showMenu");
}

/* Technology script */
const about = document.querySelector(".tech");

function takeFromJson(n, p){
    fetch("./JS/data.json")
    .then(resp => resp.json())
    .then(jsonData => {
        jsonData.technology.forEach(tech => {
            if (tech.name === n){                
                showCrew(
                    tech.name,
                    tech.images.portrait,
                    tech.images.landscape, 
                    tech.description,
                    p
                    )
            }
        });
    })
}

function showCrew(name, imgp, imgl, desc, id){
    about.innerHTML = `
        <div class="tech__image">
            <img class="mobile  mobile__img" src="${imgl}" alt="${name} image" />
            <img class="device" src="${imgp}" alt="${name} image" />
        </div>
        <div class="tech__bottom">
            <div class="tech__list">
                <ul>
                    <li id='one' onclick="takeFromJson('Launch vehicle', 'one')">1</li>
                    <li id='two' onclick="takeFromJson('Spaceport', 'two')">2</li>
                    <li id='three' onclick="takeFromJson('Space capsule', 'three')">3</li>
                </ul>
            </div>
            <div class="tech__tect">
                <p class="static-tech">The terminology...</p>
                <p class="tech__name">${name}</p>
                <p class="tech__description">
                    ${desc}
                </p>
            </div>
        </div>
    `
    document.getElementById(id).classList.add("tselect");
}
