/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/** Create a node list of all elements with a tag of "section" */
const sectionList = document.querySelectorAll("section");

/** Create a node list of all elements with an id of "navbar-list" */
const navbarList = document.getElementById("navbar-list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


/** Build the Nav Menu
* For loop will be used to create <li> <button> structure for every <section> in DOM.
*/

/** Create fragment to temporarily store navbar elements */
const navFragment = document.createDocumentFragment();

/** A for loop to build the navbar using the <section> elements in the DOM */
/** TODO: Try to recreate with forEach loop */
for (let i = 0; i < sectionList.length; i++) {
    let newLi = document.createElement("li");
    let newBtn = document.createElement("button");
    /** Retrieve the data attribute of <section> to be used as <button> text */
    let sectionData = sectionList[i].getAttribute("data-nav");
    /** Retrieve id of <section> so that it can be used as <button> id */
    let sectionId = sectionList[i].id;
    /** Set the <button> id to be the same as the <section> id */
    newBtn.id = sectionId;
    /** Set the <button> class to menu-link for CSS styling */
    newBtn.className = "menu-link";
    /** Set the <button> type to "button" */
    newBtn.setAttribute("type", "button");
    /** Set the <button> text to use <section> data attribute */
    newBtn.innerText = sectionData;
    /** Append <button> to <li> */
    newLi.appendChild(newBtn);
    /** Append <li> node to the temporary fragment */
    navFragment.appendChild(newLi);
}

/** Append the temporary fragment and child nodes to ul#navbar-list */
document.querySelector("ul#navbar-list").appendChild(navFragment);
/** Add an event listener to the ul#navbar-list element
 * Event target will be used to scroll to the section clicked in nav menu
 */
document.querySelector("ul#navbar-list").addEventListener('click',scrollTo);


/**
* Intersection Observer w/o Inline Function
* This IO code is no longer used in favor of the IO code in the next
* section titled "Intersection Observer with Inline Function".
* This code will remain in the project file as a reference.
*/
/**
* The variable "sectionList" declared in section Define Global Variables
* will be used as the observer targets.
*/

/** Retrieve element section.section-container to be used as the root element */
//const sectionContainer = document.querySelector("section.section-container");

/** Intersection Observer Options */
//const sectionIoOptions = {
//    /** Set the section.section-container as the root element */
//    root: sectionContainer,
//    /** Set root bounding box to be exactly 25% from top */
//    rootMargin: "-25% 0px -75% 0px",
//    /** Default value. Element will be observed as soon as one pixel is visable */
//    threshold: 0
//};

/** Create the intersection observer */
//const sectionIoObserver = new IntersectionObserver (changeActive,sectionIoOptions);

/** Set the intersection observer targets */
//sectionList.forEach(section => {
//    sectionIoObserver.observe(section);
//});

/** Callback function used for sectionIoObserver */
//function changeActive (entries, observer) {
//    entries.forEach(entry => {
//        entry.target.classList.toggle("active-section", entry.isIntersecting);
//    });
//};

/**
* End Intersection Observer w/o Inline Function
*/


/**
* Intersection Observer with Inline Function
*/
/**
* The variable "sectionList" declared in the section Define Global Variables
* will be used as the observer targets.
*/


/** Retrieve element section.section-container to be used as the root element */
const sectionContainer = document.querySelector("section.section-container");

/** Intersection Observer Options */
const sectionIoOptions = {
    /** Set the section.section-container as the root element */
    root: sectionContainer,
    /** Set root bounding box to be exactly 25% from top */
    rootMargin: "-25% 0px -75% 0px",
    /** Default value. Element will be observed as soon as one pixel is visable */
    threshold: 0
};

/** Create the Intersection Observer with inline callback function */
const sectionIoObserver = new IntersectionObserver ((entries, observer) => {
    entries.forEach(entry => {
        /** Toggle "active-section" class of the section in view */
        entry.target.classList.toggle("active-section", entry.isIntersecting);
        /** Toggle "active-section" class of the section's corresponding menu item */
        document.querySelector(".menu-link#" + entry.target.id).classList.toggle("active-section", entry.isIntersecting);
    });
},sectionIoOptions);

/** Set the intersection observer targets */
sectionList.forEach(section => {
    sectionIoObserver.observe(section);
});

/**
 * End Intersection Observer with Inline Function
 */


/** 
 * Scroll to Section When Clicked
 * Function uses "scrollIntoView" to scroll to the section that is clicked
 * on the navbar menu.
 * */
function scrollTo(evt) {
    evt.preventDefault();
    document.querySelector("section#" + evt.target.id).scrollIntoView({
        behavior: "smooth"
    });
};

/**
 * End Main Functions
*/
