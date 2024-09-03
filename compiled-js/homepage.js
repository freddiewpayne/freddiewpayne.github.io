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
    document.querySelector(".project-description").innerText = selectedProjectInfo.description;
    document.querySelector(".go-to-project-button").href = "/projects/" + selectedProjectInfo.pageName + ".html";
}
class HomepageProject {
    constructor(title, description, pageName) {
        this.title = title;
        this.description = description;
        this.pageName = pageName;
    }
}
const projects = [
    new HomepageProject("Duck Life 9: The Flock", "A strategy adventure game filled with many exciting minigames to enjoy! I designed and programmed multiple minigames for this project, as well as writing dialogue for over 100 NPCs and implementing many game systems. It's a fun, characterful world that I really enjoyed being a part of!", "duck-life-9"),
    new HomepageProject("Pigman", "A prototype game that I programmed in both Unity and Unreal engines. The titular Pigman, who I modelled and rigged myself, wanders an ancient forest, hoping to discover every mushroom species he can! This game taught me a lot about landscape design and creating my own game idea from scratch.", "pigman"),
    new HomepageProject("Space Hopper", "I created 'Space Hopper' while researching hypercasual games and how they maintain players' attention for so long. It's a simple game where you jump between planets to gain points whilst avoiding dangerous black holes. I also deployed it to the Google Play store for a short time.", "space-hopper"),
    new HomepageProject("My CV Game", "When I was applying for jobs in the Gaming industry, I needed a way to stand out - and so I created a video game all about my CV! It's playable on the web and can be easily finished in a few minutes. You'll learn all about my experience and hopefully enjoy yourself while you're at it!", "cv-game"),
];
//# sourceMappingURL=homepage.js.map