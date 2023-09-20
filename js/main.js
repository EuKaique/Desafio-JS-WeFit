//Manipulando lista de items
const itens = document.querySelectorAll('.list-group li');

itens.forEach(item => {
    item.addEventListener('click', () => {
        itens.forEach(item => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
});
//Manipulando menu responsivo
document.addEventListener("DOMContentLoaded", function () {
    let menuToggle = document.getElementById("menuToggle");
    let menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
      if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
    });
});