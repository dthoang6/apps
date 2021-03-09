//local reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://pixabay.com/photos/portrait-woman-profile-face-lady-657116/",
        text: "It is awesome."
    },
    {
        id: 2,
        name: "ana john",
        job: "web designer",
        img: "https://pixabay.com/photos/pink-hair-hairstyle-woman-makeup-1450045/",
        text: "It is a good job."
    },
    {
        id: 3,
        name: "dr hoang",
        job: "hacker",
        img: "https://pixabay.com/photos/woman-hair-drying-girl-female-586185/",
        text: "It is good."

    }
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const preBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}
//show next person
nextBtn.addEventListener("click", function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
})
//show previous person
preBtn.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})
//random person
randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * (reviews.length));
    showPerson(currentItem);
});