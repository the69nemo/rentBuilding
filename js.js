const slider = new Swiper(".bulding-slider", {
  slidesPerView: 3,
  speed: 400,
  spaceBetween: 20,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  loop: true,
});

const textSlider = new Swiper(".text-slider", {
  slidesPerView: 1,
  speed: 1400,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  parallax: true,
});

const select = () => {
  const selectButtonList = document.querySelectorAll(".header__select-dropdown-btn");
  const selectItemList = document.querySelectorAll(".header__select-item");
  const inputNames = ["type", "location", "purpose"];

  selectButtonList.forEach((selectButton) => {
    selectButton.addEventListener("click", () => {
      selectButton
        .closest(".header__select-wrapper")
        .classList.toggle("active");
    });
  });

  selectItemList.forEach((selectItem) => {
    selectItem.addEventListener("click", () => {
      const dropDownMenu = selectItem.closest(".header__select-dropdown-menu");
      const dropDownMenuClass = Array.from(dropDownMenu.classList);
      if (inputNames.includes(dropDownMenuClass[1])) {
        const input = dropDownMenu.nextElementSibling;
        input.value = selectItem.textContent;
      }
      selectItem.closest(".header__select-wrapper").classList.remove("active");
    });
  });
};

select();
