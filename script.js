document.addEventListener('DOMContentLoaded', () => {
    const PopupPosition = document.getElementById("PopupPosition");
    const CancelBTN = document.getElementById("CancelBTN");
    setTimeout(() => {
        PopupPosition.classList.add("PopupShow");
    }, 1500);

    CancelBTN.addEventListener('click', () => {
        PopupPosition.classList.remove("PopupShow");
    })
})