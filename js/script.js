const portfolioItems = document.querySelectorAll(".portfolio__section .item"),
    portfolioPopup = document.querySelector(".portfolio-popup"),
    pClose = document.querySelector(".pp-close"),
    itemCount = document.querySelector(".numberOfCount");

let newindex = 1;


const pPopup = () => {
    portfolioPopup.classList.toggle("active");
}

pClose.addEventListener("click", pPopup)


portfolioItems.forEach((item, i) => {
    item.addEventListener("click", () => {
        pPopup();
        newindex = i;
        portFolioDetails();

    })
});


function portFolioDetails() {
    portfolioPopup.querySelector("img").src = portfolioItems[newindex].querySelector("img").src;
    itemCount.innerHTML = ` ${newindex + 1} of ${portfolioItems.length}`;
}


// ***** slider btns
const prev = document.querySelector(".prev"),
    next = document.querySelector(".next");

prev.addEventListener("click", () => {
    // portFolioDetails();
    if (newindex == 0) {
        newindex = portfolioItems.length - 1;
    } else {
        newindex--;
    }
    portFolioDetails();
});

next.addEventListener("click", () => {
    portFolioDetails();
    if (newindex >= portfolioItems.length - 1) {
        newindex = 0;
    } else {
        newindex++;
    }
    portFolioDetails();
});