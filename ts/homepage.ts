var currentProjectId: number = -1;
var previousProjectId: number = -1;

window.addEventListener("load", () => {
    loadProject(0);
});

function loadProject(id: number) {
    var projectIcons = document.querySelectorAll(".project-icon");
    var selectedProject = projectIcons[id];
    if (selectedProject.classList.contains("project-icon-current")) return;

    if (currentProjectId >= 0) projectIcons[currentProjectId].classList.remove("project-icon-current");
    if (previousProjectId >= 0) projectIcons[previousProjectId].classList.remove("project-icon-previous");

    previousProjectId = currentProjectId;
    currentProjectId = id;

    if (previousProjectId >= 0) projectIcons[previousProjectId].classList.add("project-icon-previous");
    projectIcons[currentProjectId].classList.add("project-icon-current");

    var selectedProjectInfo = projects[id];
    selectedProject.querySelector(".project-title").innerHTML = selectedProjectInfo.title;
    (document.querySelector(".project-description") as HTMLDivElement).innerText = selectedProjectInfo.shortDescription;
    (document.querySelector(".go-to-project-button") as HTMLAnchorElement).href = "/projects/" + selectedProjectInfo.pageName + ".html";
}
