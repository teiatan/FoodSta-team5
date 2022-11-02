(() => {
    const refs = {
    openModalBtn: document.querySelector(".open-menu-btn"),
    closeModalBtn: document.querySelector(".menu-close-btn"),
    menuModal: document.querySelector(".mob-menu"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
    refs.menuModal.classList.toggle("is-hidden");
    }
})();