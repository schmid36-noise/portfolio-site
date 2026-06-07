const pages = [
  { text: "Home", link: "/index.html" },
  { text: "About Me", link: "/about.html" },
  { text: "Contact Me", link: "/contact.html" },
  { text: "Projects", link: "/projects.html" },
  { text: "Previous Work", link: "/work.html" },
  { text: "API Testing", link: "/api.html" },
];

const createNavbar = function () {
  //code to append the header each time so no html space is copied
  //create the navHeader itself
  const navHeader = document.createElement("nav");
  navHeader.setAttribute("class", "nav-header");

  //holds the elements
  const navList = document.createElement("ul");
  navList.setAttribute("class", "nav-list");

  //create each page
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
const mainHeader = document.querySelector(".main-header");

const createdNavbar = createNavbar();
mainHeader.append(createdNavbar);
