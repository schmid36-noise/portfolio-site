const pages = [
  { text: "Home", link: "/portfolio-site/index.html" },
  { text: "About Me", link: "/portfolio-site/about.html" },
  { text: "Contact Me", link: "/portfolio-site/contact.html" },
  { text: "Projects", link: "/portfolio-site/projects.html" },
  { text: "Previous Work", link: "/portfolio-site/work.html" },
  { text: "API Testing", link: "/portfolio-site/api.html" },
];

const createNavbar = function () {
  //code to append the header each time so no html space is copied
  //create the navHeader itself
  const navHeader = document.createElement("nav");
  navHeader.setAttribute("class", "nav-header");

  //holds the elements
  const navList = document.createElement("ul");
  navList.setAttribute("class", "nav-list");

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
