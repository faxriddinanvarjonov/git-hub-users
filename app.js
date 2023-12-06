let mode = document.getElementById("mode-p");
let header = document.querySelector(".heaader-search");
let input = document.querySelector(".search-p");
let main = document.querySelector("main");
let usercontent = document.querySelector(".user-content");
let logo = document.querySelector(".logo");
let h1 = document.querySelector("h1");
let modeimg = document.getElementById("mode-img");
let username = document.getElementById("user-name");
let userimg = document.getElementById("user-img");
let bio = document.querySelector(".main-second-part__p");
let userLocation = document.getElementById("user-location");
let followings = document.querySelector("#FollowingsUser");
let followersusers = document.getElementById("FollowersUser");
let repoes = document.getElementById("repoes");
let twister = document.getElementById("twister");
let joindate = document.getElementById("join-date");
let require = document.getElementById("no-result");
let githubacc = document.getElementById("github-acc");

mode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  header.classList.toggle("dark-blue");
  input.classList.toggle("dark-blue");
  main.classList.toggle("dark-blue");
  usercontent.classList.toggle("dark-mode");
  h1.classList.toggle("white");
  logo.classList.toggle("validator");
  if (logo.className.includes("validator")) {
    mode.textContent = "light";
    modeimg.setAttribute("src", "./imgs/svg/lightmode.svg");
    logo.setAttribute("src", "./imgs/svg/devfinder logo dark.svg");
  } else {
    mode.textContent = "dark";
    modeimg.setAttribute("src", "./imgs/svg/dark-mode-icon.svg");
    logo.setAttribute("src", "./imgs/svg/devfinder logo.svg");
  }
});
// end dm

document.addEventListener("submit", (e) => {
  e.preventDefault();
  let UsersSearch = document.getElementById("search-input-users").value;
  if (!UsersSearch) {
    require.textContent = "This input is required";
  } else {
    let fixed = UsersSearch.split(" ").join("").trim();
    let API = `https://api.github.com/users/${fixed}`;
    fetch(API)
      .then((result) => result.json())
      .then((data) => {
        if (data.message == "Not Found") {
          require.textContent = "Not found";
        } else {
          username.textContent = data.login;
          userimg.setAttribute("src", data.avatar_url);
          bio.textContent = data.bio;
          userLocation.textContent = data.location;
          followings.textContent = data.following;
          followersusers.textContent = data.followers;
          repoes.textContent = data.public_repos;
          twister.textContent = data.twitter_username;
          joindate.textContent = data.created_at.slice(0, 10);
          githubacc.setAttribute("href", `https://github.com/${fixed}`);
        }
      });
  }
});
