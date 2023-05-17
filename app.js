// Create function
(function () {
  // crete  picture variable for all images
  let pictures = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13"
  ];
  // btn variable for queryselectorall(from class btn)
  const button = document.querySelectorAll(".btn");
  // imgDiv variable for query selector(from Class img-container)
  const imgDiv = document.querySelector(".img-container");

  // counter variable
  let counter = 0;

  button.forEach(function (button) {
    button.addEventListener("click", function (e) {
      if (button.classList.contains("btn-left")) {
        counter--;
        if (counter < 0) {
          counter = pictures.length - 1;
        }
        imgDiv.style.background = `url('img/${pictures[counter]}.png')`;
      }
      if (button.classList.contains("btn-right")) {
        counter++;
        if (counter > pictures.length - 1) {
          counter = 0;
        }
        imgDiv.style.background = `url('img/${pictures[counter]}.png')`;
      }
    });
  });
})();
