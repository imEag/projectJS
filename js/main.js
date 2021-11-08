'use strict'

$(document).ready(() => {
    /* Slider */
    if (window.location.href.indexOf('index') > -1) {
        $('.slider__bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
        });
    }



    /* Posts */
    if (window.location.href.indexOf('index') > -1) {
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


            $("#global__content__posts").append(post);
        });
    }

    /* Go up functionality */
    $(".footer__go-up").click(() => {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });

    /* Fake Login */
    $(".login__form").submit(() => {
        let name = $("#login__form--name").val();
        localStorage.setItem("form_name", name);
    });

    let form_name = localStorage.getItem("form_name");
    if (form_name !== null && form_name !== "undefined") {
        let about_text = $(".sidebar__about--text")
        about_text.html("Welcome " + form_name);
        about_text.append(`<a href="#" id="sidebar__about--logout">Log Out</a>`)

        $("#login").hide();

        $("#sidebar__about--logout").click(() => {
            localStorage.clear();
            location.reload()
        });
    }

    /* About */
    if (window.location.href.indexOf('about') > -1) {
        $("#box__tabs").accordion();
    }

    /* Clock */
    if (window.location.href.indexOf('clock') > -1) {
        let clock = moment().format('hh:mm:ss a');
        $('#global__content__clock').html(clock);
        setInterval(() => {
            let clock = moment().format('hh:mm:ss a');
            $('#global__content__clock').html(clock);
        }, 1000);
    }


});