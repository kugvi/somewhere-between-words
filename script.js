
function draw(){

    background("blue");

}

const currentPathName = window.location.pathname;

  const pages = [
    "/page-2.html",
    "/page-3.html",
    "/page-4.html",
    "/page-5.html",
    // "page-6.html",
    // "page 7.html"
  ];

  let indexOfCurrentPath;
  let stringToReplace = '';

  for (let i = 0; i < pages.length; i++) {
    if (currentPathName.indexOf(pages[i]) > -1) {
      indexOfCurrentPath = i;
      stringToReplace = pages[i];
    }
  }

  pages.splice(indexOfCurrentPath, 1);

  console.log(window.location.pathname, stringToReplace)

function randomPage() {
  const randomIndex = Math.floor(Math.random() * pages.length);


  window.location.href = currentPathName.replace(stringToReplace, pages[randomIndex]);
}

