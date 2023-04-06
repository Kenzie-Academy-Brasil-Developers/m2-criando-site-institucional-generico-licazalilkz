/* ------------------------------- Coloque sua lógica aqui ------------------------------- */

function handleModal(){
    const button = document.querySelector('.header__button');
    const modalController = document.querySelector('.modal__controller');
    const buttonDoubt = document.querySelector('.button__doubt');

    button.addEventListener('click', ()=>{
        modalController.showModal();
        closeModal();
    })
    buttonDoubt.addEventListener('click', ()=>{
        modalController.showModal();
        closeModal();
    })
}

function closeModal(){
    const button = document.querySelector('.modal__close');
    const modalController = document.querySelector('.modal__controller');

    button.addEventListener('click', () => {
        modalController.close();
    })
}

handleModal();