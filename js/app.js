var featuredProjects = document.getElementById("featured-projects");
var projectArticles = featuredProjects.getElementsByTagName("article");

for (let i = 0; i < projectArticles.length; i++) {
  let proj = projectArticles[i];

  // proj.style.maxHeight = proj.offsetHeight;
  proj.addEventListener("click", function() {onClickProject(proj)}, false);
}

function onClickProject(articleObj) {
  let fig = articleObj.getElementsByTagName("figure")[0];

  if (fig.style.display == "") {
    fig.style.display = "block";
  }
  else {
    fig.style.display = "";
  }
}
