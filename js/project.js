document.addEventListener("DOMContentLoaded", function () {
  const pfFrame = document.querySelector("#project_list");

  const homepageList = [
    {
      url: "https://www.inviewcc.com/INV_P002_3.html",
      img: "inv_official",
      name: "아이앤뷰커뮤니케이션_오피셜",
      project: "Inview",
      Contribution: "프로젝트 기여도 _ 퍼블리싱30%, 서브페이지 제작 참여",
      technic: "Markup, Responsive, Swiper.js, Three.js",
    },
    {
      url: "https://lieto0517.cafe24.com/",
      img: "rieto",
      name: "리에또",
      project: "리에또",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "#",
      img: "future",
      name: "미래언니",
      project: "미래언니",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "#",
      img: "wonchen",
      name: "원천지하수",
      project: "원천지하수",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "#",
      img: "hitech",
      name: "하이테크디젤",
      project: "하이테크디젤",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "#",
      img: "gaya",
      name: "가야철거",
      project: "가야철거폐기물",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "#",
      img: "LawFirm",
      name: "로펌새연",
      project: "로펌새연",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
  ];

  function setList() {
    for (let i = 0; i < homepageList.length; i++) {
      pfFrame.innerHTML +=
        "<li class='swiper-slide'>" +
        "<div class='project_thums'>" +
        "<img src='../img/" +
        homepageList[i].img +
        ".webp' alt='" +
        homepageList[i].name +
        " 섬네일'>" +
        "</div>" +
        "<div class='descript'>" +
        "<div>" +
        "<b class='project_name'>" +
        homepageList[i].project +
        "</b>" +
        "<a href='" +
        homepageList[i].url +
        "' target='_blank'>" +
        "<i class='icon link'></i>" +
        "</a>" +
        "</div>" +
        "<div class='project_info'>" +
        "<p>" +
        "<span class='summary_01'>" +
        homepageList[i].Contribution +
        "</span>" +
        "<span class='summary_02'>" +
        homepageList[i].technic +
        "</span>" +
        "</p>" +
        "</div>" +
        "</div>" +
        "</li>";
    }
  }

  setList();
});
