const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc1 = document.getElementById("modalDesc1");
const modalDesc2 = document.getElementById("modalDesc2");
const modalDesc3 = document.getElementById("modalDesc3");
const modalDesc4 = document.getElementById("modalDesc4");
const modalPrice = document.getElementById("modalPrice");
const mainImg = document.getElementById("mainImg");
const thumb1 = document.getElementById("thumb1");
const thumb2 = document.getElementById("thumb2");
const thumb3 = document.getElementById("thumb3");
const closeModal = document.getElementById("closeModal");

const buttons = document.querySelectorAll(".open-modal");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        modalTitle.textContent = button.getAttribute("data-title");
        modalDesc1.textContent = button.getAttribute("data-desc1");
        modalDesc2.textContent = button.getAttribute("data-desc2");
        modalDesc3.textContent = button.getAttribute("data-desc3");
        modalDesc4.textContent = button.getAttribute("data-desc4");
        modalPrice.textContent = button.getAttribute("data-price");

        const mainSrc = button.getAttribute("data-img");
        const t1 = button.getAttribute("data-thumb1");
        const t2 = button.getAttribute("data-thumb2");
        const t3 = button.getAttribute("data-thumb3");

        mainImg.src = mainSrc;

        if (t1) {
            thumb1.src = t1;
            thumb1.style.display = "inline-block";
        } else {
            thumb1.style.display = "none";
        }

        if (t2) {
            thumb2.src = t2;
            thumb2.style.display = "inline-block";
        } else {
            thumb2.style.display = "none";
        }

        if (t3) {
            thumb3.src = t3;
            thumb3.style.display = "inline-block";
        } else {
            thumb3.style.display = "none";
        }

        modal.style.display = "flex";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
});

function changeMainImg(el) {
    mainImg.src = el.src;
}


