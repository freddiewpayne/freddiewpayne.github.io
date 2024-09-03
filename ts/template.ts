var currentHomeIconSpriteId = 0;
var footerDinoAnimationPosition = 0;

var footerDinoAnimationSprites = [0, 0, 1, 2, 1, 2, 1];

window.addEventListener("load", () => {
    var htmlContent = document.querySelector("body").innerHTML;
    loadPageTemplate();

    document.querySelector("#content").innerHTML = htmlContent;

    setInterval(swapHomeIconSprite, 350);
    setInterval(swapFooterIconSprite, 250);
});

function loadPageTemplate() {
    document.querySelector("body").innerHTML = header + content + footer;
}

function swapHomeIconSprite() {
    var dinoImage = document.querySelector("#home-icon-image") as HTMLImageElement;
    dinoImage.src = "/media/shared/Dino_Idle" + currentHomeIconSpriteId + ".png";

    currentHomeIconSpriteId++;
    if (currentHomeIconSpriteId >= 3) currentHomeIconSpriteId = 0;
}

function swapFooterIconSprite() {
    var dinoImage = document.querySelector("#footer-dino-image") as HTMLImageElement;
    dinoImage.src = "/media/shared/Dino_Slip" + footerDinoAnimationSprites[footerDinoAnimationPosition] + ".png";

    footerDinoAnimationPosition++;
    if (footerDinoAnimationPosition >= footerDinoAnimationSprites.length) footerDinoAnimationPosition = 0;
}

const header: string = '<div id="header-container">\
<div id="header">\
                <div id="home-icon">\
                    <a href="/">\
                        <img id="home-icon-image" src="/media/shared/Dino_Idle0.png" alt="Pixellated dino sprite" />\
                    </a>\
                </div>\
    \
                <div id="navbar">\
                    <a class="navbar-item" href="/">\
                        Portfolio\
                    </a>\
                    <a class="navbar-item" href="/">\
                        Insights\
                    </a>\
                    <a class="navbar-item navbar-item-cv-game" href="https://www.freddiewpayne.itch.io/cv">\
                        Play My CV!\
                    </a>\
                </div>\
            </div>\
        </div>';

const content: string = '<div id="content-container"><div id="content"></div></div>';

const footer: string = '<div id="footer">\
            <div id="footer-links">\
                <a class="footer-link" href="https://linkedin.com/in/freddiewpayne">\
                    in\
                </a>\
                <a class="footer-link" href="/media/shared/Freddie CV.pdf" download="CV - Freddie Payne">\
                    CV\
                </a>\
            </div>\
            <img id="footer-dino-image" src="/media/shared/Dino_Slip0.png" alt="Pixellated dino sprite in a falling over animation">\
        </div>';