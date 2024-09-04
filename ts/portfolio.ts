var currentProjectId: number = -1;
var currentGalleryPosition: number = 0;

window.addEventListener("load", () => {
    loadPortfolioProject(0);
});

function loadPortfolioProject(id: number) {
    if (currentProjectId == id) return;

    var projectIcons = document.querySelectorAll(".project-icon");
    if (currentProjectId >= 0) projectIcons[currentProjectId].classList.remove("project-icon-current");
    projectIcons[id].classList.add("project-icon-current");

    currentProjectId = id;
    var currentProject = projects[currentProjectId];

    (document.querySelector(".selected-project-title h2") as HTMLHeadingElement).innerText = currentProject.title;
    (document.querySelector(".selected-project-details embed") as HTMLEmbedElement).src = "/project-descriptions/" + currentProject.pageName + ".html";
    loadGalleryPicture(0);
}

function moveGallery(increment: number) {
    currentGalleryPosition += increment;
    var galleryLength = projects[currentProjectId].galleryPictures.length;
    if (currentGalleryPosition < 0) currentGalleryPosition = galleryLength - 1;
    if (currentGalleryPosition >= galleryLength) currentGalleryPosition = 0;

    var galleryImageElement = document.querySelector(".gallery-image-center");
    galleryImageElement.classList.add("gallery-image-new");
    setTimeout(() => galleryImageElement.classList.remove("gallery-image-new"), 300);

    loadGalleryPicture(currentGalleryPosition);
}

function loadGalleryPicture(index: number) {
    var currentPictureUrl = projects[currentProjectId].galleryPictures[index];
    (document.querySelector(".gallery-image-center") as HTMLImageElement).src = currentPictureUrl;
    currentGalleryPosition = index;
}