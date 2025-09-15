function update(){
    alert("product added to the cart")
}

const images = document.querySelectorAll(".img");

images.forEach((image) => {
    image.addEventListener("click", () => {
        image.classList.toggle("big");
    });
});
