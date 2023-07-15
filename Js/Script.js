/*Burger menu*/
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("open");
  });

  const menuLinks = document.querySelectorAll(".menu__link");

  menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      document.querySelector("header").classList.remove("open");
    });
  });
});

/*Плавна прокрутка Links сайті*/
var menuLinks = document.querySelectorAll("#menu a");

menuLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault(); 

    var targetId = this.getAttribute("href");
    var targetBlock = document.querySelector(targetId); 
    window.scrollTo({
      top: targetBlock.offsetTop - 0,
      behavior: "smooth"
    });
  });
});


/*Eror віконце для getStarted */
function showErrorModal(action) {
  var modal = document.getElementById("errorModal");
  var errorTitle = document.getElementById("errorTitle");
  var errorText = document.getElementById("errorText");
  errorTitle.textContent = "Eror!";
  errorText.textContent = "Вибачте, але ця дія поки не доступна.";
  modal.style.display = "block";
}

function closeErrorModal() {
  var modal = document.getElementById("errorModal");
  modal.style.display = "none";
}

