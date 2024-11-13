let menu = document.querySelector(".icon i.toggle");
let head = document.getElementsByClassName("header")
let links = document.querySelector(".links");
let allinks = document.querySelectorAll(".same");
let section = document.querySelector(".img-slider");
let allimg = document.querySelectorAll("img");
let right = document.querySelector(".right");
let left = document.querySelector(".left");
let index = 0;
let time;


menu.onclick = function() {
    links.classList.toggle("active");
    if (links.classList.contains("active")) {
        menu.classList.remove("fa-sliders")
        menu.classList.add("fa-x")
    } else {
        menu.classList.add("fa-sliders")
        menu.classList.remove("fa-x")
    }

}



left.addEventListener("click", function() {
    index--;
    clearTimeout(time);
    update();
})
right.addEventListener("click", function() {
    index++;
    clearTimeout(time);
    update();
})

function update() {
    if (index >= allimg.length) {
        index = 0
    } else if (index < 1) {
        index = allimg.length;
    }
    section.style.transform = `translateX(-${(index - 1)* 50}px)`;
    time = setTimeout(() => {
        index++;
        update();
    }, 1000);;

}
update();
const move = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true
})
move.reveal(".landing", { delay: 100, origin: "left" })
move.reveal(".care", { delay: 100, origin: "left" })
move.reveal(".fav", { delay: 100, origin: "left" })

move.reveal(".alert", { delay: 100, origin: "left" })
move.reveal(".product", { delay: 100, origin: "left" })
move.reveal(".concat", { delay: 100, origin: "left" })
move.reveal(".footer ", { delay: 100, origin: "left" })