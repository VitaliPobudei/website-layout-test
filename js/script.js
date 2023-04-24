const element = document.querySelector(".js-choice");

const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
});

const burger = document
  .querySelector(".burger")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
  });
