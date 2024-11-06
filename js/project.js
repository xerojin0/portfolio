document.addEventListener("DOMContentLoaded", function () {
  const pfFrame = document.querySelector("#project_list");

  const homepageList = [
    {
      url: "https://www.inviewcc.com/INV_P002_3.html",
      img: "inv_official",
      name: "아이앤뷰커뮤니케이션_오피셜",
      project: "Inview",
      Contribution: "프로젝트 기여도 _ 퍼블리싱30%, 서브페이지 제작 참여",
      technic: "Markup, Responsive, Swiper.js, AOS.js, Three.js",
    },
    {
      url: "https://lieto0517.cafe24.com/",
      img: "rieto",
      name: "리에또",
      project: "리에또",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js, fullPage.js",
    },
    {
      url: "https://ukay0414.cafe24.com/",
      img: "future",
      name: "미래언니",
      project: "미래언니",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "https://pwkiss1809.cafe24.com/",
      img: "wonchen",
      name: "원천지하수",
      project: "원천지하수",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "https://htdikr.cafe24.com/",
      img: "hitech",
      name: "하이테크디젤",
      project: "하이테크디젤",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js, fullPage.js",
    },
    {
      url: "https://i9845.cafe24.com/",
      img: "gaya",
      name: "가야철거",
      project: "가야철거폐기물",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js, AOS.js",
    },
    {
      url: "https://lawfirmsaeyeon.cafe24.com/",
      img: "LawFirm",
      name: "로펌새연",
      project: "로펌새연",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js, AOS.js",
    },
    {
      url: "https://yuwin4444.cafe24.com/",
      img: "primo",
      name: "프리모",
      project: "프리모",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js, AOS.js, NaverMap, ajax",
    },
    {
      url: "https://arose114.cafe24.com/",
      img: "korea",
      name: "한국중소기업디딤돌지원센터",
      project: "한국중소기업디딤돌지원센터",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js, AOS.js",
    },
    {
      url: "https://paracafe1111.cafe24.com/",
      img: "paracafe",
      name: "패러카페",
      project: "패러카페",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js, AOS.js",
    },
    {
      url: "https://knh5417.co.kr/",
      img: "kandh",
      name: "K&H",
      project: "K&H",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js, AOS.js",
    },
    {
      url: "https://sb0704.cafe24.com/",
      img: "sb_company",
      name: "에스비컴퍼니",
      project: "에스비컴퍼니",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "https://dokyung0608.cafe24.com/",
      img: "dogyung",
      name: "도경서비스",
      project: "도경서비스",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "https://amico0814.cafe24.com/skin-skin2",
      img: "amicofam",
      name: "아미코팜",
      project: "아미코팜",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "https://hanseung0403.cafe24.com/",
      img: "airhana",
      name: "열하나",
      project: "열하나",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "https://happycotton0131.cafe24.com/",
      img: "happycotton",
      name: "행복솜틀집",
      project: "행복솜틀집",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "https://echo1109.cafe24.com/skin-skin2",
      img: "eco",
      name: "에코산업",
      project: "에코산업",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js, AOS.js",
    },
    {
      url: "https://dongdae1024.cafe24.com/skin-skin1",
      img: "dongdea",
      name: "동대스틸",
      project: "동대스틸",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js, AOS.js",
    },
  ];

  function setList() {
    for (let i = 0; i < homepageList.length; i++) {
      pfFrame.innerHTML +=
        "<li class='swiper-slide'>" +
        "<div class='project_thums'>" +
        "<img src='/portfolio/img/" +
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
