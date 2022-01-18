
const refs = {
  backdrop: document.querySelector('.backdrop'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  btnOrder: document.querySelectorAll('.infoCard-btn'),
  orderForm: document.forms.contact_form,
  spanPrice: document.querySelector('.price')
};

refs.openModalBtn.addEventListener('click', toggleModal);
// refs.backdrop.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.btnOrder.forEach(btn => {
  btn.addEventListener('click', toggleModal)
})
function toggleModal(e) {
  refs.modal.classList.toggle('is-hidden');
  if(e.target.id){
    refs.orderForm[5].value = refs.orderForm[5].children[e.target.id].value;
    refs.spanPrice.textContent = refs.orderForm[5].children[e.target.id].dataset.price
  }
}