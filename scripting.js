//swap the two variables below for testing on LiveServer vs uploading to the production page on git pages

const PREFIX = "/portfolio-site";
//const PREFIX = "";

const pages = [
  { text: "About Me", link: `${PREFIX}/about.html ` },
  { text: "Contact Me", link: `${PREFIX}/contact.html` },
  { text: "Projects", link: `${PREFIX}/projects.html` },
  { text: "Work Experience", link: `${PREFIX}/work.html` },
];

//  { text: "Home", link: "/portfolio-site/index.html" },
//  { text: "API Testing", link: `${PREFIX}/api.html` },

const createNavbar = function () {
  //code to append the header each time so no html space is copied
  //create the navHeader itself
  const navHeader = document.createElement("nav");
  navHeader.setAttribute("class", "nav-header");

  //holds the elements
  const navList = document.createElement("ul");
  navList.setAttribute("class", "nav-list");

  //create the logo
  const homeClick = document.createElement("a");
  homeClick.href = `${PREFIX}/index.html`;
  homeClick.setAttribute("class", "nav-logo");

  const logo = document.createElement("img");
  logo.src = `${PREFIX}/assets/winterfox.png`;
  logo.alt = "logo of A player skin from Realm of the Mad God";
  logo.width = "64";
  logo.height = "64";

  //append the logo to the navbar
  homeClick.appendChild(logo);
  navHeader.append(homeClick);

  //create each link in the nav
  pages.map((item) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "nav-item");
    const listLink = document.createElement("a");
    listLink.textContent = item.text;
    listLink.href = item.link;
    listItem.append(listLink);

    navList.append(listItem);
  });
  navHeader.append(navList);
  return navHeader;
};

const createFooter = function (element) {
  element.setAttribute("class", "mt-auto main-footer");
  element.setAttribute("id", "footer");
  element.textContent = "We're all a work in progress";

  return element;
};

//append the header on load
const mainHeader = document.querySelector(".main-header");
mainHeader.setAttribute("class", "main-header mb-auto");

const createdNavbar = createNavbar();
mainHeader.append(createdNavbar);

//append the footer on load
const main = document.querySelector(".main-footer");
const createdFooter = createFooter(main);

funValue = 0;
const randValue = function () {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const funThing = async function () {
  if (funValue < 21) {
    funValue++;
  } else {
    document.getElementById("footer").style.backgroundColor = randValue();
  }

  if (funValue == 10) {
    main.textContent = "We're all a work in progress, but all we need";
  } else if (funValue == 20) {
    main.textContent =
      "We're all a work in progress, but all we need is a nudge in the right direction";
    funValue = 21;
  }
};

const fun = main.addEventListener("click", funThing);
