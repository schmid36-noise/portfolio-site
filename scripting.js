const pages = [
  { text: "About Me", link: "/portfolio-site/about.html" },
  { text: "Contact Me", link: "/portfolio-site/contact.html" },
  { text: "Projects", link: "/portfolio-site/projects.html" },
  { text: "Previous Work", link: "/portfolio-site/work.html" },
  { text: "API Testing", link: "/portfolio-site/api.html" },
];

//  { text: "Home", link: "/portfolio-site/index.html" },

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
  homeClick.href = "/portfolio-site/index.html";
  homeClick.setAttribute("class", "nav-logo");

  const logo = document.createElement("img");
  logo.src = "/portfolio-site/assets/winterfox.png";
  logo.alt = "logo of the Winter Fox Summoner skin from Realm of the Mad God";
  logo.width = "64";
  logo.height = "64";

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

//append the header on load
const mainHeader = document.querySelector(".main-header");
const createdNavbar = createNavbar();
mainHeader.append(createdNavbar);
