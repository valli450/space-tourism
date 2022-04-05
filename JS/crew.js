/* Home page script */
/* Mobbile Menu */
const menuBlock = document.querySelector(".header__menu");

function openMenu() {
    menuBlock.classList.add("showMenu");
}

function closeMenu() {
    menuBlock.classList.remove("showMenu");
}

/* Crew script */
const about = document.querySelector(".content__about");

function takeFromJson(n){
    fetch("./JS/data.json")
    .then(resp => resp.json())
    .then(jsonData => {
        jsonData.crew.forEach(crew => {
            if (crew.name === n){                
                showCrew(
                    crew.name,
                    crew.images.png, 
                    crew.role,
                    crew.bio
                    )
            }
        });
    })
}

function showCrew(name, img, role, bio){
    about.innerHTML = `
        <div class="about__image">
            <img src="${img}" alt="${name} photo" />
        </div>
        <div class="about__text">
            <div class="about__text__list">
                <ul>
                    <li id="Douglas" onclick="takeFromJson('Douglas Hurley')"></li>
                    <li id="Mark" onclick="takeFromJson('Mark Shuttleworth')"></li>
                    <li id="Victor" onclick="takeFromJson('Victor Glover')"></li>
                    <li id="Anousheh" onclick="takeFromJson('Anousheh Ansari')"></li>
                </ul>
            </div>
            <div class="about__text__crew">
                <p class="role">${role}</p>
                <p class="name">${name}</p>
                <p class="bio">
                    ${bio}
                </p>
            </div>
        </div>
    `

    document.getElementById(`${name.split(' ')[0]}`).classList.add("cSelected");
}