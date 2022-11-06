const offeringsBtn = document.querySelector(".offerings [data-modal-open]");
//offeringsBtn.classList.add(`order-button--white`);
offeringsBtn.classList.replace("order-button", "order-button--white");
const headerBtn = document.querySelector(".header [data-modal-open]");
headerBtn.classList.add(`order-button--animate`);


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




//READ MORE
const more = document.querySelector(`#more`);
const moreBtn = document.querySelector(`#btn`);



const readMore = () => {

    if (more.style.display === "none") {
        more.style.display="flex";
        moreBtn.innerHTML="Hide more";
    } else {
        more.style.display="none";
        moreBtn.innerHTML="Read more";
    }
};

moreBtn.addEventListener("click", readMore);