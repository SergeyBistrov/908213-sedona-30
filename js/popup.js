let BlockFormHotelSearch = document.querySelector('.block-form-hotel-search');
let hotelSearchBtn = document.querySelector('.hotel-search-btn');
let FormHotelSearch = BlockFormHotelSearch.querySelector('.form-hotel-search');
let FormArrivalDate = FormHotelSearch.querySelector('[name=arrival-date]');
let FormDepartureDate = FormHotelSearch.querySelector('[name=departure-date]');
let FormArrivalDateGrownup = FormHotelSearch.querySelector('[name=arrival-date-grownup]');
let FormArrivalDateChildren = FormHotelSearch.querySelector('[name=arrival-date-children]');

let isStorageSupport = true;
let storageQuantityGrownup = '';
let storageQuantityChildren = '';

BlockFormHotelSearch.classList.remove('modal-show');
FormArrivalDate.removeAttribute('required');
FormDepartureDate.removeAttribute('required');

try {
  storageQuantityGrownup = localStorage.getItem('quantity_grownup');
  storageQuantityChildren = localStorage.getItem('quantity_children');
} catch(err) {
  isStorageSupport = false;
}

hotelSearchBtn.addEventListener('click', function(evt) {
	evt.preventDefault();
  BlockFormHotelSearch.classList.remove('modal-error');
	BlockFormHotelSearch.classList.toggle('modal-show');
	setTimeout(() => {FormArrivalDate.focus();}, 1500);

	if (FormArrivalDateGrownup && FormArrivalDateChildren) {
  	FormArrivalDateGrownup.value = storageQuantityGrownup;
    FormArrivalDateChildren.value = storageQuantityChildren;
	}
});

FormHotelSearch.addEventListener('submit', function(evt) {
  if (!FormArrivalDate.value || !FormDepartureDate.value || FormArrivalDateGrownup.value < 1) {
      evt.preventDefault();
      BlockFormHotelSearch.classList.remove('modal-error');
      BlockFormHotelSearch.offsetWidth = BlockFormHotelSearch.offsetWidth;
      BlockFormHotelSearch.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('quantity_grownup', FormArrivalDateGrownup.value);
      localStorage.setItem('quantity_children', FormArrivalDateChildren.value);
    }
  }
});

hotelSearchBtn.addEventListener('click', function(evt) {
  if (!BlockFormHotelSearch.classList.contains('modal-show')) {
    FormHotelSearch.classList.remove('modal-error');
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (BlockFormHotelSearch.classList.contains('modal-show')) {
      evt.preventDefault();
      BlockFormHotelSearch.classList.toggle('modal-show');
    }
  }
});
