// Open Modal
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImage.src = imageSrc;
}

// Close Modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
