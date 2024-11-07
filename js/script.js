$(document).ready(function () {
  // light & dark mode 설정
  const savedTheme = localStorage.getItem("theme");
  let currentTheme;

  if (savedTheme) {
    currentTheme = savedTheme;
    $("html").addClass(savedTheme);
  } else {
    currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark_mode" : "light_mode";
    $("html").addClass(currentTheme);
  }

  // 초기 아이콘 설정
  updateIcon(currentTheme);

  // 다크 모드와 라이트 모드 전환
  $("div.color_switch").on("click", function () {
    currentTheme = currentTheme === "light_mode" ? "dark_mode" : "light_mode";
    $("html").removeClass("light_mode dark_mode").addClass(currentTheme);
    localStorage.setItem("theme", currentTheme);
    updateIcon(currentTheme);
  });

  // 아이콘 업데이트 함수
  function updateIcon(theme) {
    $(".icon")
      .toggleClass("lightMode", theme === "light_mode")
      .toggleClass("darkMode", theme === "dark_mode");
  }

  // Swiper 초기화
  var swiper = new Swiper(".swiper_block01", {
    spaceBetween: 20,
    slidesPerView: 1,
    centeredSlides: true,
    loop: false,
    loopAdditionalSlides: 1,
    breakpoints: {
      768: {
        slidesPerView: 2.2,
        spaceBetween: 20,
        centeredSlides: false,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
      },
      1024: {
        slidesPerView: 2.8,
        spaceBetween: 20,
        centeredSlides: false,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
      },
      1400: {
        slidesPerView: 3.2,
        spaceBetween: 20,
        centeredSlides: false,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
      },
    },
  });
});
