const testimonials = [
    {
        name: "Tanya Sinclair",
        role: "UX Engineer",
        quote: "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
        img: "image-tanya.jpg"
    },

    {
        name: "John Tarkpor",
        role: "Junior Front-end Developer",
        quote: "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        img: "/images/image-john.jpg"
    }


];

// getting my elements
// const image = document.querySelector('.person-image');
const personName = document.querySelector('.name');
const role = document.querySelector('.role');
const quote = document.querySelector('.quote-text');

const prevToggle = document.querySelector('.prev-toggle');
const nextToggle = document.querySelector('.next-toggle');

let counter = 0;

// setting up a function to assign values
assignProfile = () => {
    let currentProfile = testimonials[counter];
    // image.src = currentProfile.img;
    personName.textContent = currentProfile.name;
    role.textContent = currentProfile.role;
    quote.textContent = currentProfile.quote;
}

// setting up default screen 
window.addEventListener('DOMContentLoaded', function () {
 assignProfile();
})

// setting up previous button
prevToggle.addEventListener('click', function () {
    counter--;
    if(counter < 0) {
        counter = testimonials.length - 1;
        console.log(counter);
    }
    assignProfile();
})

// setting up next button
nextToggle.addEventListener('click', function () {
    counter++;
    if(counter > testimonials.length - 1) {
        counter = 0;
    }
    assignProfile();
})