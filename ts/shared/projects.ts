class Project {
    title: string;
    shortDescription: string;
    pageName: string;
    galleryPictures: string[];

    constructor(title: string, shortDescription: string, pageName: string, galleryPictures: string[]) {
        this.title = title;
        this.shortDescription = shortDescription;
        this.pageName = pageName;
        this.galleryPictures = galleryPictures;
    }
}

const projects: Project[] = [
    new Project(
        "Snouty And The Great Rift",
        "The largest solo project I've ever undertaken! I created a demo for Snouty And The Great Rift from scratch, doing everything from programming to 2D and 3D art to world design and audio. The result is a cute adventure inspired by my love of local woodland walks. Demo available on Steam now!",
        "pigman",
        [
            "/media/portfolio/pigman/Pigman_Gallery0.png",
            "/media/portfolio/pigman/Pigman_Gallery1.png",
            "/media/portfolio/pigman/Pigman_Gallery2.png",
            "/media/portfolio/pigman/Pigman_Gallery3.png",
            "/media/portfolio/pigman/Pigman_Gallery4.png",
            "/media/portfolio/pigman/Pigman_Gallery5.png",
            "/media/portfolio/pigman/Pigman_Gallery6.png",
            "/media/portfolio/pigman/Pigman_Gallery7.png",
            "/media/portfolio/pigman/Pigman_Gallery8.png"
        ]
    ),
    new Project(
        "Duck Life 9: The Flock",
        "A strategy adventure game filled with many exciting minigames to enjoy! I designed and programmed multiple minigames for this project, as well as writing dialogue for over 100 NPCs and implementing many game systems. It's a fun, characterful world that I really enjoyed being a part of!",
        "duck-life-9",
        [
            "/media/portfolio/duck-life-9/DuckLife9_Gallery0.jpg",
            "/media/portfolio/duck-life-9/DuckLife9_Gallery1.jpg",
            "/media/portfolio/duck-life-9/DuckLife9_Gallery2.jpg",
            "/media/portfolio/duck-life-9/DuckLife9_Gallery3.jpg",
            "/media/portfolio/duck-life-9/DuckLife9_Gallery4.jpg",
            "/media/portfolio/duck-life-9/DuckLife9_Gallery5.jpg",
            "/media/portfolio/duck-life-9/DuckLife9_Gallery6.jpg",
            "/media/portfolio/duck-life-9/DuckLife9_Gallery7.jpg",
            "/media/portfolio/duck-life-9/DuckLife9_Gallery8.jpg"
        ]
    ),
    // new Project(
    //     "Space Hopper",
    //     "I created 'Space Hopper' while researching hypercasual games and how they maintain players' attention for so long. It's a simple game where you jump between planets to gain points whilst avoiding dangerous black holes. I also deployed it to the Google Play store for a short time.",
    //     "space-hopper",
    //     [
    //         "/media/portfolio/space-hopper/SpaceHopper_Gallery0.jpg",
    //         "/media/portfolio/space-hopper/SpaceHopper_Gallery1.jpg",
    //         "/media/portfolio/space-hopper/SpaceHopper_Gallery2.jpg",
    //         "/media/portfolio/space-hopper/SpaceHopper_Gallery3.jpg",
    //         "/media/portfolio/space-hopper/SpaceHopper_Gallery4.jpg",
    //         "/media/portfolio/space-hopper/SpaceHopper_Gallery5.jpg",
    //         "/media/portfolio/space-hopper/SpaceHopper_Gallery6.png"
    //     ]
    // ),
    new Project(
        "Sea Of Thieves",
        "Currently, I work alongside Rare as a Co-Development partner on Sea Of Thieves, the legendary pirate sandbox adventure. I have built and polished many screens of UI in the game, most notably for the Custom Seas feature set.",
        "sea-of-thieves",
        [
            "/media/portfolio/sea-of-thieves/SeaOfThieves_Gallery0.png",
            "/media/portfolio/sea-of-thieves/SeaOfThieves_Gallery1.png",
            "/media/portfolio/sea-of-thieves/SeaOfThieves_Gallery2.png",
            "/media/portfolio/sea-of-thieves/SeaOfThieves_Gallery3.png",
            "/media/portfolio/sea-of-thieves/SeaOfThieves_Gallery4.png",
        ]
    ),
    new Project(
        "My CV Game",
        "When I was applying for jobs in the Gaming industry, I needed a way to stand out - and so I created a video game all about my CV! It's playable on the web and can be easily finished in a few minutes. You'll learn all about my experience and hopefully enjoy yourself while you're at it!",
        "cv-game",
        [
            "/media/portfolio/cv-game/CVGame_Gallery0.png",
            "/media/portfolio/cv-game/CVGame_Gallery1.png",
            "/media/portfolio/cv-game/CVGame_Gallery2.png",
            "/media/portfolio/cv-game/CVGame_Gallery3.png"
        ]
    ),
];