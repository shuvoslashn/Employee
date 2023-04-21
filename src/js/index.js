// opening and cloasing modal
const addEmployee = document.querySelector('#addEmployee');
const modal = document.querySelector('.modal');
const closeIcon = document.querySelector('#closeModal');

const openModal = () => modal.classList.add('active');

const closeModal = () => modal.classList.remove('active');

addEmployee.addEventListener('click', openModal);
closeIcon.addEventListener('click', closeModal);
