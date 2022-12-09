var title = document.querySelector('.cover-title')
var cover = document.querySelector('.cover-image')
var taglineOne = document.querySelector('.tagline-1')
var taglineTwo = document.querySelector('.tagline-2')
var randomCoverButton = document.querySelector('.random-cover-button');
var makeYourOwnCover = document.querySelector('.make-new-button')
var viewForm = document.querySelector('.form-view')
var homeView = document.querySelector('.home-view')
var savedView = document.querySelector('.saved-view')
var viewSaved = document.querySelector('.view-saved-button')
var homeButton = document.querySelector('.home-button')

window.addEventListener('load', createBook)
randomCoverButton.addEventListener('click', createBook)
makeYourOwnCover.addEventListener('click', createForm)
homeButton.addEventListener('click', createHome)

function createBook() {
  currentCover = new Cover(cover.src, title.innerText, descriptor1.innerText, descriptor2.innerText)
  title.innerText = titles[getRandomIndex(titles)]
  cover.src = covers[getRandomIndex(covers)]
  taglineOne.innerText = descriptors[getRandomIndex(descriptors)]
  taglineTwo.innerText = descriptors[getRandomIndex(descriptors)]
 }

 function createForm() {
  viewForm.classList.remove('hidden')
  homeView.classList.add('hidden')
  savedView.classList.add('hidden')
  viewSaved.classList.add('hidden')
  homeButton.classList.remove('hidden')
  // blankForm = new Form(data.src, userCover.innerText, descriptor1.innerText, descriptor2.innerText)
  
 }

 function createHome() {
  
 }


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


// Add your event listeners here 👇

// Create your event handlers and other functions here 👇


// We've provided one function to get you started


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
  }