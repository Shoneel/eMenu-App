let left = document.getElementsByClassName("bi-caret-left-fill")[0];
let right = document.getElementsByClassName("bi-caret-right-fill")[0];
let cards = document.getElementsByClassName("cards")[0];

left.addEventListener("click", () => {
  cards.scrollLeft -= 140;
});
right.addEventListener("click", () => {
  cards.scrollLeft += 140;
});

let poster = document.getElementById("poster");
let title = document.getElementById("title");
let price = document.getElementById("price");

Array.from(document.getElementsByClassName("card")).forEach(
  (element, index) => {
    element.addEventListener("click", () => {
      poster.src = element.getElementsByTagName("img")[0].src;
      title.innerText = element.getElementsByTagName("h5")[0].innerText;
      price.innerText = element.getElementsByTagName("h4")[0].innerText;
    });
  }
);
