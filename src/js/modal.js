(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  //refs.openModalBtn.map(btn => btn.addEventListener("click", toggleModal));
  refs.openModalBtn.forEach(function (btn) {btn.addEventListener("click", toggleModal)})
  refs.closeModalBtn.addEventListener("click", toggleModal);
  //console.log(refs.openModalBtn);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();