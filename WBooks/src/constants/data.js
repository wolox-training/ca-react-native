const booksList = [
    {
        "id": 18,
        "author": "Paula Hawkins",
        "title": "The Girl on the Train\n",
        "genre": "suspense",
        "publisher": "Riverhead Books",
        "year": "2015",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/content.jpeg",
        "description": null
    },
    {
        "id": 19,
        "author": "Andy Weir",
        "title": "The Martian",
        "genre": "fiction",
        "publisher": "Crown Publishing Group",
        "year": "2011",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/41DNuJfahyL._SX322_BO1_204_203_200_.jpg",
        "description": null
    },
    {
        "id": 3,
        "author": "Lois Duncan",
        "title": "Locked in time",
        "genre": "suspense",
        "publisher": "Little, Brown",
        "year": "1985",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg",
        "description": null
    },
    {
        "id": 20,
        "author": "Kyle Simpson",
        "title": "You Don't Know JS: Async & Performance",
        "genre": "programming",
        "publisher": "O'Reilly",
        "year": "2014",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/cover.jpg",
        "description": "Become a js perfomance expert!"
    },
    {
        "id": 5,
        "author": "Christopher Pike",
        "title": "Scavenger Hunt",
        "genre": "suspense",
        "publisher": "Pocket Books",
        "year": "1989",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg",
        "description": null
    },
    {
        "id": 6,
        "author": "Paula Hawkins",
        "title": "The Girl on the Train\n",
        "genre": "suspense",
        "publisher": "Riverhead Books",
        "year": "2015",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/content.jpeg",
        "description": null
    },
    {
        "id": 7,
        "author": "Anthony Doerr",
        "title": "All the Light We Cannot See",
        "genre": "suspense",
        "publisher": "Scribner",
        "year": "2014",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/content.jpeg",
        "description": null
    },
    {
        "id": 8,
        "author": "John Katzenbach",
        "title": "The analyst",
        "genre": "thriller",
        "publisher": "Ballantine Books",
        "year": "2003",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/el-psicoanalista-analyst-john-katzenbach-paperback-cover-art.jpg",
        "description": null
    },
    {
        "id": 9,
        "author": "Andy Weir",
        "title": "The Martian",
        "genre": "fiction",
        "publisher": "Crown Publishing Group",
        "year": "2011",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/41DNuJfahyL._SX322_BO1_204_203_200_.jpg",
        "description": null
    },
    {
        "id": 10,
        "author": "Dani",
        "title": "La Gran Dani",
        "genre": "fiction",
        "publisher": "Wolox",
        "year": "1992",
        "image_url": null,
        "description": null
    },
    {
        "id": 11,
        "author": "Douglas Crockford",
        "title": "Javascript: The Good Parts",
        "genre": "programming",
        "publisher": "O'Reilly",
        "year": "2008",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/js_good_parts.png",
        "description": "Unearthing the Excellence in Javascript"
    },
    {
        "id": 12,
        "author": "Kyle Simpson",
        "title": "You Don't Know JS: Up & Going",
        "genre": "programming",
        "publisher": "O'Reilly",
        "year": "2014",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/You-Dont-Know-JS-Up-Going-500x600.jpg",
        "description": "Introduction to javascript and programming"
    },
    {
        "id": 13,
        "author": "Kyle Simpson",
        "title": "You Don't Know JS: Scopes & Closures",
        "genre": "programming",
        "publisher": "O'Reilly",
        "year": "2014",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/41mXGJV8PbL._SX331_BO1_204_203_200_.jpg",
        "description": "Javascript scopes and closures explained"
    },
    {
        "id": 14,
        "author": "Kyle Simpson",
        "title": "You Don't Know JS: this & Object Prototypes",
        "genre": "programming",
        "publisher": "O'Reilly",
        "year": "2014",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/1405902720_9d6c413d202ae89871da885e82fae589.jpg",
        "description": "Prototypal Inheritance made easy"
    },
    {
        "id": 15,
        "author": "Kyle Simpson",
        "title": "You Don't Know JS: Types & Grammer",
        "genre": "programming",
        "publisher": "O'Reilly",
        "year": "2014",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/cover.jpg",
        "description": "Learn Js types and grammar today!"
    },
    {
        "id": 16,
        "author": "Kyle Simpson",
        "title": "You Don't Know JS: Async & Performance",
        "genre": "programming",
        "publisher": "O'Reilly",
        "year": "2014",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/cover.jpg",
        "description": "Become a js perfomance expert!"
    },
    {
        "id": 17,
        "author": "Kyle Simpson",
        "title": "You Don't Know JS: ES6 & Beyond",
        "genre": "programming",
        "publisher": "O'Reilly",
        "year": "2014",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/cover.jpg",
        "description": "JS newest features explained"
    },
    {
        "id": 21,
        "author": "Andy Weir",
        "title": "The Martian",
        "genre": "fiction",
        "publisher": "Crown Publishing Group",
        "year": "2011",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/41DNuJfahyL._SX322_BO1_204_203_200_.jpg",
        "description": null
    },
    {
        "id": 22,
        "author": "Kyle Simpson",
        "title": "You Don't Know JS: this & Object Prototypes",
        "genre": "programming",
        "publisher": "O'Reilly",
        "year": "2014",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/1405902720_9d6c413d202ae89871da885e82fae589.jpg",
        "description": "Prototypal Inheritance made easy"
    },
    {
        "id": 23,
        "author": "Kyle Simpson",
        "title": "You Don't Know JS: Scopes & Closures",
        "genre": "programming",
        "publisher": "O'Reilly",
        "year": "2014",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/41mXGJV8PbL._SX331_BO1_204_203_200_.jpg",
        "description": "Javascript scopes and closures explained"
    },
    {
        "id": 24,
        "author": "Kyle Simpson",
        "title": "You Don't Know JS: Async & Performance",
        "genre": "programming",
        "publisher": "O'Reilly",
        "year": "2014",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/cover.jpg",
        "description": "Become a js perfomance expert!"
    },
    {
        "id": 25,
        "author": "Andy Weir",
        "title": "The Martian",
        "genre": "fiction",
        "publisher": "Crown Publishing Group",
        "year": "2011",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/41DNuJfahyL._SX322_BO1_204_203_200_.jpg",
        "description": null
    },
    {
        "id": 26,
        "author": "Douglas Crockford",
        "title": "Javascript: The Good Parts",
        "genre": "programming",
        "publisher": "O'Reilly",
        "year": "2008",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/js_good_parts.png",
        "description": "Unearthing the Excellence in Javascript"
    },
    {
        "id": 27,
        "author": "Kyle Simpson",
        "title": "You Don't Know JS: Async & Performance",
        "genre": "programming",
        "publisher": "O'Reilly",
        "year": "2014",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/cover.jpg",
        "description": "Become a js perfomance expert!"
    },
    {
        "id": 28,
        "author": "Kyle Simpson",
        "title": "You Don't Know JS: this & Object Prototypes",
        "genre": "programming",
        "publisher": "O'Reilly",
        "year": "2014",
        "image_url": "http://wolox-training.s3.amazonaws.com/uploads/1405902720_9d6c413d202ae89871da885e82fae589.jpg",
        "description": "Prototypal Inheritance made easy"
    }
]

export default booksList;
