const arrow = document.querySelector(".arrow");
const activeItems = document.querySelectorAll(".active");

arrow.addEventListener("click", function () {
  //   for (let i = 0; i < activeItems.length; i++) {
  //     activeItems[i].classList.toggle("action");
  //   }

  //   for (const element of activeItems) {
  //     element.classList.toggle("action");
  //   }

  activeItems.forEach((element) => element.classList.toggle("action"));
});
