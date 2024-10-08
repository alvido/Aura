// Burger Menu Open //
document.addEventListener("DOMContentLoaded", function () {
  // Выбираем бургер-кнопку и навигацию
  let burgerButton = document.getElementById("burgerButton");
  let navigation = document.querySelector(".navigation");
  let links = document.querySelectorAll(".navigation__link");
  let body = document.querySelector("body");

  // Если бургер-кнопка существует, добавляем обработчик события
  if (burgerButton) {
    burgerButton.addEventListener("click", function (e) {
      e.stopPropagation(); // Остановка всплытия события
      burgerButton.classList.toggle("burger--active"); // Переключаем класс активности бургер-кнопки
      navigation.classList.toggle("navigation--active"); // Переключаем класс активности навигации
      body.classList.toggle("lock"); // Переключаем класс активности навигации
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      burgerButton.classList.remove("burger--active");
      navigation.classList.remove("navigation--active");
      body.classList.remove("lock");
    });
  });
});
//

// Fixed header
$(document).ready(function () {
  var header = $(".header"),
    main = $(".main"),
    headerH = header.innerHeight(),
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= headerH) {
      header.addClass("fixed");
      main.css("padding-top", headerH); // Добавляем верхний отступ
    } else {
      header.removeClass("fixed");
      main.css("padding-top", 0); // Убираем верхний отступ
    }
  }
});

// menu has children //
document.addEventListener("DOMContentLoaded", function () {
  // Выбираем все элементы с классом "has-children"
  let hasChildren = document.querySelectorAll(".has-children");

  // Если такие элементы существуют, добавляем обработчик события
  if (hasChildren) {
    hasChildren.forEach((children) => {
      // Обработчик клика по элементу "has-children"
      children.addEventListener("click", function (e) {
        e.stopPropagation(); // Останавливаем всплытие события, чтобы оно не доходило до документа
        this.classList.toggle("active");
      });
    });

    // Обработчик клика по документу
    document.addEventListener("click", function (e) {
      hasChildren.forEach((children) => {
        // Проверяем, если клик произошел вне элемента "has-children"
        if (!children.contains(e.target)) {
          children.classList.remove("active");
        }
      });
    });
  }
});
//

// wishlist //
document.addEventListener("DOMContentLoaded", function () {
  // Выбираем все элементы с классом "has-children"
  let wishlist = document.querySelectorAll(".wishlist");

  // Если такие элементы существуют, добавляем обработчик события
  if (wishlist) {
    wishlist.forEach((wish) => {
      // Обработчик клика по элементу "has-children"
      wish.addEventListener("click", function (e) {
        e.stopPropagation(); // Останавливаем всплытие события, чтобы оно не доходило до документа
        this.classList.toggle("wish");
      });
    });
  }
});
//

//swiper
document.addEventListener("DOMContentLoaded", function () {
  // Функция для инициализации слайдера
  function initSwiper(selector, paginationClass, nextButtonClass, prevButtonClass) {
    if (document.querySelector(selector)) {
      new Swiper(selector, {
        observer: true,
        // centeredSlides: true,
        observeParents: true,
        loop: true,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: paginationClass,
          clickable: true,
        },
        navigation: {
          nextEl: nextButtonClass,
          prevEl: prevButtonClass,
        },
        // // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
        breakpoints: {
          320: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 6,
          },
        },
      });
    }
  }

  // Инициализация слайдеров
  if (document.querySelector("#hero")) {
    new Swiper("#hero", {
      observer: true,
      observeParents: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".hero-pagination",
        clickable: true,
      },
      navigation: {
        // nextEl: ".hero-button-next",
        // prevEl: ".hero-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
      },
    });
  }

  // Инициализация слайдеров
  if (document.querySelector("#work")) {
    new Swiper("#work", {
      observer: true,
      observeParents: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".work-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".work-button-next",
        prevEl: ".work-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 2.5,
          spaceBetween: 3,
        },
        561: {
          slidesPerView: 3,
          spaceBetween: 6,
        },
      },
    });
  }

  // Инициализация слайдеров для других секций
  initSwiper("#categories", "", ".categories-button-prev", ".categories-button-next");
});

// swiper


//article
document.addEventListener("DOMContentLoaded", function () {
  // Выбираем все элементы с классом "has-children"
  let about = document.querySelector(".about");
  let unfold = document.querySelector(".unfold");

  // Если такие элементы существуют, добавляем обработчик события
  if (unfold) {
    unfold.addEventListener("click", function (e) {
      e.stopPropagation(); // Останавливаем всплытие события, чтобы оно не доходило до документа
      about.classList.toggle("full");
    });
  }
});
//

//modal
// Получаем элементы
const modal = document.getElementById('modal');
const openModalBtn = document.querySelectorAll('.callback');
const closeModalBtn = document.querySelector('.close');
const body = document.querySelector('body');

// Открытие модального окна
openModalBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.style.display = 'flex'; // Показываем модальное окно
    body.classList.add("lock"); // Переключаем класс активности навигации
  });
});


// Закрытие модального окна
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  body.classList.remove("lock"); // Переключаем класс активности навигации
});

// Закрытие окна при клике вне модального содержимого
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    body.classList.remove("lock"); // Переключаем класс активности навигации
  }
});

//
