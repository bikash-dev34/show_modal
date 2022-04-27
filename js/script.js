'use strict';
const modalOf = document.querySelector('.modal');
``;
const overlayOf = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    // console.log('button clicked');
    modalOf.classList.remove('hidden');
    overlayOf.classList.remove('hidden');
  });
}
const closeModal = function () {
  modalOf.classList.add('hidden');
  overlayOf.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overlayOf.addEventListener('click', closeModal);

// btnCloseModal.addEventListener('click', function () {
//   modalOf.classList.add('hidden');
//   overlayOf.classList.add('hidden');
// });

// escape key
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key == 'Escape' && !modalOf.classList.contains('hidden')) {
    closeModal();
  }
});
