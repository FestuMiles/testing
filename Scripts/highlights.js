//Access the images
// let slideImages = document.querySelectorAll('img');
let slideImages = document.getElementsByName('image');

// let slideImages = document.getElementById("image");

//Access the next and previous buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let heading = document.getElementById('heading');
let paragraph = document.getElementById('paragraph');


let myHeadings = ['Developers Circle', 'Research Fellowship', 'Media Team', 'SAP Sabatical'];



let myParag = ["In the context of graduate studies, the NSF Graduate Research Fellowship Program (GRFP) is a notable example. The GRFP aims to ensure the quality, vitality, and diversity of the scientific and engineering workforce in the United States. It encourages participation from a wide range of talented individuals in STEM fields. If you’re pursuing a research-based master’s or doctoral degree in science, technology, engineering, or mathematics (STEM), the GRFP could be a great opportunity for you. The fellowship provides financial support for up to five years, including an annual stipend of $37,000",
    "As a member of a media team, you’ll likely have specific responsibilities. These could include content creation, social media management, video production, graphic design, writing articles, or handling public relations. Depending on the context, you might work on marketing campaigns, event coverage, or internal communication within an organization.",
    "SAP creates a centralized system for businesses, allowing every department to access and share common data. This improves collaboration and creates a better work environment for employees1. It’s a market leader in ERP software, helping companies of all sizes manage various business processes, including finance, supply chain, human resources, and more"
];
// heading.innerHTML = 'Research';

var counter = 0;

//Code for next button
next.addEventListener('click', slideNext);
function slideNext(){
    slideImages[counter].style.animation = 'next1 1.5s ease-in forwards';
    if(counter >= slideImages.length-1){
        counter = 0;
    }
    else{
        counter++;
    }
    slideImages[counter].style.animation = 'next2 1.5s ease-in forwards';
    heading.innerHTML = myHeadings[counter];
    paragraph.innerHTML = myParag[counter];
}

//Code for previous button
prev.addEventListener('click', slidePrev);
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 1.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.length-1;
    }
    else{
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 1.5s ease-in forwards';
    heading.innerHTML = myHeadings[counter];
    paragraph.innerHTML = myParag[counter];
}

//Auto Sliding
function autoSlide(){
    deletInterval = setInterval(timer, 20000);
    function timer(){
        slideNext();
    }
}
autoSlide();