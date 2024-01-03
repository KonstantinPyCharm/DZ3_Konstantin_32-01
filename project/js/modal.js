// MODAL

const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const modalCloseButton = document.querySelector('.modal_close');

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

modalTrigger.onclick = () => openModal();
modalCloseButton.onclick = () => closeModal();
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}

const checkScroll = () => {
    const windowHeight = window.innerHeight
    const scrollDistance = window.scrollY
    const documentHeight = document.body.scrollHeight - 1
    if (windowHeight + scrollDistance >= documentHeight) {
        openModal()
        window.removeEventListener("scroll", checkScroll)
    }
}

window.addEventListener("scroll", checkScroll)

setTimeout(openModal, 10000)