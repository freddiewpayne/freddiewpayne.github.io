enum BlogPostCategory {
    GameDesign,
    FreddiesFavourites,
    GameDevelopment,
    Other
}

class BlogPost {
    title: string;
    previewDescription: string;
    date: Date;
    categories: BlogPostCategory[];
    thumbnailImageRelativeUrl: string;
    markdownFileRelativeUrl: string;

    constructor(id: number, title: string, previewDescription: string, date: Date, categories: BlogPostCategory[]) {
        this.title = title;
        this.previewDescription = previewDescription;
        this.date = date;
        this.categories = categories;
        this.thumbnailImageRelativeUrl = "/media/blog-posts/" + id + "/thumbnail.jpg";
        this.markdownFileRelativeUrl = "/media/blog-posts/" + id + "/content.md";
    }
}

var blogPosts: BlogPost[] = [
    new BlogPost(
        0,
        "Satisfaction Through Subversion in 'Spyro The Dragon'",
        "Why has this trilogy managed to capture the hearts of so many? There are many reasons, but I believe that the game's successes are primarily due to its level design.",
        new Date(2022, 3, 22),
        [BlogPostCategory.GameDesign, BlogPostCategory.FreddiesFavourites]
    ),
    new BlogPost(
        1,
        "How I Turned My CV Into A Video Game, Part 1: Design",
        "When I was writing my CV, I was faced with a problem: I could tell people about my skills, but how could I show them?",
        new Date(2022, 3, 19),
        [BlogPostCategory.GameDevelopment, BlogPostCategory.GameDesign]
    ),
    new BlogPost(
        2,
        "How Does 'Yu-Gi-Oh! Master Duel' compare to its physical counterpart?",
        "Here, I will draw upon my own extensive experience as a Yu-Gi-Oh! player to assess whether Master Duel has lived up to its massive expectations.",
        new Date(2022, 3, 20),
        [BlogPostCategory.GameDesign]
    ),
    new BlogPost(
        3,
        "'Hogwarts Legacy': Do People Always Want To Be The Chosen One?",
        "It was recently announced that this game includes a narrative which sees the player curb a two-pronged rebellion of goblins and evil wizards. If this sounds jarring to you then you’re not alone.",
        new Date(2022, 3, 26),
        [BlogPostCategory.GameDesign]
    )
];
