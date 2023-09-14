const container = document.getElementById("container");
const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("count");
let globalRating=0;
container.addEventListener('click', function(e) {
  let rating = e.target.dataset.index;
  //console.log(rating);
  if(rating==null){
    rating=0;
    for(let i=0;i<stars.length;i++){
      stars[i].classList.remove("star-colored");
    }
  }else{
    for(let i = 0; i < stars.length; i++) {
      if (i < rating) {
        stars[i].classList.add("star-colored");
      } else {
        stars[i].classList.remove("star-colored");
      }
    }
  }
  globalRating=rating;
  ratingValue.textContent = rating;
});

container.addEventListener("mouseover",function(e) {
  let rating = e.target.dataset.index;

  for(let i = 0; i < rating; i++) {
    if (i < rating) {
      stars[i].classList.add("star-colored");
    }
  }
  for(let j=stars.length-1;j>=rating;j--){
        if(j>=globalRating){
        stars[j].classList.remove("star-colored");
        }
  } 
});



