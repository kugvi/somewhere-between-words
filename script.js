
function draw(){

    background("blue");

}

const currentPathName = window.location.pathname;

  const pages = [
    "/page-2.html",
    "/page-3.html",
    "/page-4.html",
    // "page-5.html",
    // "page-6.html",
    // "page 7.html"
  ];

  const indexOfCurrentPath = pages.indexOf(currentPathName);

  pages.splice(indexOfCurrentPath, 1);

  console.log(pages)

function randomPage() {


  const randomIndex = Math.floor(Math.random() * pages.length);

  window.location.href = pages[randomIndex];
}

function sendStory() {
    let story = document.getElementById("yourStory").value;

    let subject = encodeURIComponent("A story for somewhere-between-words");
    let body = encodeURIComponent(story);

    window.location.href =
        "mailto:kugvi999@gmail.com?subject=" + subject + "&body=" + body;

}