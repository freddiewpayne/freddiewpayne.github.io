var currentProjectId = -1;
var previousProjectId = -1;
window.addEventListener("load", () => {
    loadProject(0);
});
function loadProject(id) {
    var projectIcons = document.querySelectorAll(".project-icon");
    var selectedProject = projectIcons[id];
    if (selectedProject.classList.contains("project-icon-current"))
        return;
    if (currentProjectId >= 0)
        projectIcons[currentProjectId].classList.remove("project-icon-current");
    if (previousProjectId >= 0)
        projectIcons[previousProjectId].classList.remove("project-icon-previous");
    previousProjectId = currentProjectId;
    currentProjectId = id;
    if (previousProjectId >= 0)
        projectIcons[previousProjectId].classList.add("project-icon-previous");
    projectIcons[currentProjectId].classList.add("project-icon-current");
    var selectedProjectInfo = projects[id];
    selectedProject.querySelector(".project-title").innerHTML = selectedProjectInfo.title;
    document.querySelector(".project-description").innerText = selectedProjectInfo.shortDescription;
    document.querySelector(".go-to-project-button").href = "/projects/" + selectedProjectInfo.pageName + ".html";
}
//# sourceMappingURL=homepage.js.map