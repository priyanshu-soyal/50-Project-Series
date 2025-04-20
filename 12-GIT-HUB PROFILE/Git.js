const APIURL = "https://api.github.com/users/"; 

let main = document.querySelector("#main");
let userInput = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");


async function getUser(userName) {
    let response = await fetch(APIURL + userName);
    let data = await response.json();

    const card = `
        <div class="card">
            <div>
                <img src="${data.avatar_url}"
                    alt="" class="avatar" />
            </div>
            <div class="userInfo">
                <h2>${data.name}</h2>
                <p class = "bio">${data.bio}</p>
                <ul class="info">
                    <li>Follwers<strong>${data.followers}</strong></li>
                    <li>Following<strong>${data.following}</strong></li>
                    <li>Repos<strong>${data.public_repos}</strong></li>
                </ul>

                <div class="repos">
                    
                </div>
            </div>
        </div>
    `;
    main.innerHTML = card;
    getRepo(userName);

}

async function getRepo(userName) {
    let response = await fetch(APIURL + userName + "/repos");
    let data = await response.json();
    
    let repos = document.querySelector(".repos");
    
    data.forEach(item => {
        let a = document.createElement("a");
        a.classList.add("repo");
        a.href = item.html_url;
        a.innerHTML = item.name;
        a.target = "_blank";
        repos.appendChild(a)

    });
    
}

// getUser("bhagirath-wscubetech");
searchBtn.addEventListener("click", (e) => {
    e.defaultPrevented;
    userInputValue = userInput.value;
    getUser(userInputValue);
})