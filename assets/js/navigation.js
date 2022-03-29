/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function setAllLinksColorBlack() {
  const getAllLinks = document.querySelectorAll('.nav-bar ul a');
  getAllLinks.forEach((link) => {
    link.style.color = 'black';
  });
}

function manipulateDom(elemArrayParam, elemToShow, linkClicked) {
  setAllLinksColorBlack();
  elemArray = elemArrayParam;
  elemArray.forEach((elem) => {
    elem.style.display = 'none';
  });
  elemToShow.style.display = 'block';
  linkClicked.style.color = 'blue';
}

listLink.addEventListener('click', () => {
  const elemArray = document.querySelectorAll(
    '.addBookSection, .contactSection',
  );
  manipulateDom(elemArray, listSection, listLink);
});

addLink.addEventListener('click', () => {
  const elemArray = document.querySelectorAll(
    '.bookListSection, .contactSection',
  );
  manipulateDom(elemArray, addSection, addLink);
});

contactLink.addEventListener('click', () => {
  const elemArray = document.querySelectorAll(
    '.bookListSection, .addBookSection',
  );
  manipulateDom(elemArray, contactSection, contactLink);
});
