'use strict'

$(document).ready(() => {
    /* Slider */
    $('.slider__bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });

    /* Posts */
    var posts = [
        {
            title: "Test Title 1",
            date: "Posted on " + moment().format("MMMM") + " " + moment().format("DD") + ", " + moment().format("YYYY") + " at " + moment().format('LT'),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim porro temporibus nihil commodi asperiores, nam dicta mollitia quam nostrum et ab, numquam repellendus? Repellat soluta laborum perferendis neque voluptatum"
        },
        {
            title: "Test Title 2",
            date: "Posted on " + moment().format("MMMM") + " " + moment().format("DD") + ", " + moment().format("YYYY") + " at " + moment().format('LT'),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim porro temporibus nihil commodi asperiores, nam dicta mollitia quam nostrum et ab, numquam repellendus? Repellat soluta laborum perferendis neque voluptatum"
        },
        {
            title: "Test Title 3",
            date: "Posted on " + moment().format("MMMM") + " " + moment().format("DD") + ", " + moment().format("YYYY") + " at " + moment().format('LT'),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim porro temporibus nihil commodi asperiores, nam dicta mollitia quam nostrum et ab, numquam repellendus? Repellat soluta laborum perferendis neque voluptatum"
        },
        {
            title: "Test Title 4",
            date: "Posted on " + moment().format("MMMM") + " " + moment().format("DD") + ", " + moment().format("YYYY") + " at " + moment().format('LT'),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim porro temporibus nihil commodi asperiores, nam dicta mollitia quam nostrum et ab, numquam repellendus? Repellat soluta laborum perferendis neque voluptatum"
        },
        {
            title: "Test Title 5",
            date: "Posted on " + moment().format("MMMM") + " " + moment().format("DD") + ", " + moment().format("YYYY") + " at " + moment().format('LT'),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim porro temporibus nihil commodi asperiores, nam dicta mollitia quam nostrum et ab, numquam repellendus? Repellat soluta laborum perferendis neque voluptatum"
        },
        
    ]

    console.log(posts)

    posts.forEach((item, index) => {
        let post = `
        <article class="content__posts__post">
            <h2 class="post--title">${item.title}</h2>
            <span class="post--date">${item.date}</span>
            <p class="post--text">
                ${item.content}
            </p>
            <a href="#" class="btn post__btn--showmore">Read more</a>
        </article>
        `;

        console.log(post)

        $("#global__content__posts").append(post);
    });

});