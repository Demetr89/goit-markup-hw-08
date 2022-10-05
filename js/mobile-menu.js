(() => {
  const refs = {
    openBurgerBtn: document.querySelector('[data-burger-open]'),
    closeBurgerBtn: document.querySelector('[data-burger-close]'),
    burger: document.querySelector('[data-burger]'),
    body: document.querySelector('[data-body]'),
    menuList: document.querySelector('[nav-list]'),
  };

  refs.openBurgerBtn.addEventListener('click', toggleBurger);
  refs.closeBurgerBtn.addEventListener('click', toggleBurger);
  refs.menuList.addEventListener('click', removeBurger);

  function toggleBurger() {
    refs.burger.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');

    //     function removeBurger() {
    // refs.burger.classList.add("is-hidden");
  }
})();
