var featuredProjects = document.getElementById("featured-projects");
var projectArticles = featuredProjects.getElementsByTagName("article");

for (let i = 0; i < projectArticles.length; i++) {
  let proj = projectArticles[i];
  proj.addEventListener("click", function() {onClickProject(proj)}, false);
}

function onClickProject(articleObj) {
  articleObj.classList.toggle("expanded");
}
