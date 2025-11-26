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
      url: "https://yeonkkochi0407.cafe24.com/skin-skin5",
      img: "yeonkkochi",
      name: "연꽃치",
      project: "연꽃치",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js, Aos.js",
    },
    {
      url: "https://hjuook1.cafe24.com/skin-skin1",
      img: "mr_h",
      name: "김굽는Mr.황",
      project: "김굽는Mr.황",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js, Aos.js",
    },
    {
      url: "https://ndlsn.cafe24.com/skin-skin1",
      img: "union",
      name: "유니온자석",
      project: "유니온자석",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js, Aos.js",
    },
    {
      url: "https://bichinage.cafe24.com/skin-skin1",
      img: "bichina",
      name: "비치나게",
      project: "비치나게",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js, Aos.js",
    },
    {
      url: "https://sywater114.cafe24.com/",
      img: "jugasu",
      name: "신영지하수개발",
      project: "신영지하수개발",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "https://hanam5466.cafe24.com/skin-skin1",
      img: "hana",
      name: "하나모바일",
      project: "하나모바일",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js, Aos.js",
    },
    {
      url: "https://jcy6820.cafe24.com/skin-skin1",
      img: "newworld",
      name: "법무법인신세계",
      project: "법무법인신세계",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js, Aos.js",
    },
    {
      url: "https://ohs8864.cafe24.com/skin-skin1",
      img: "seosan",
      name: "서산수산",
      project: "서산수산",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js, Aos.js",
    },
    {
      url: "https://speedauto9858.cafe24.com/",
      img: "speedauto",
      name: "스피드오토플랜",
      project: "스피드오토플랜",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js, 문자왕국",
    },
    {
      url: "https://jcy6820.cafe24.com/",
      img: "shinseagea",
      name: "법무법인신세계",
      project: "법무법인신세계",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "https://sjhfam.cafe24.com/",
      img: "dongmyong",
      name: "동명ENG",
      project: "동명ENG",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "https://lawyjm001.cafe24.com/",
      img: "unjumin",
      name: "윤주민법률사무소",
      project: "윤주민법률사무소",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "https://adonis5028.cafe24.com/",
      img: "hilstate",
      name: "힐스테이트",
      project: "힐스테이트",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "https://dsarc5555.cafe24.com/",
      img: "dongshin",
      name: "동신에이알씨",
      project: "동신에이알씨",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "https://galsa.cafe24.com/",
      img: "garsa",
      name: "바질코리아",
      project: "바질코리아",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "https://hhl0725.cafe24.com/",
      img: "gungang",
      name: "건강습관연구소",
      project: "건강습관연구소",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
    },
    {
      url: "https://ko7572.cafe24.com/",
      img: "dongback",
      name: "동백제주콜밴",
      project: "동백제주콜밴",
      Contribution: "프로젝트 기여도 _ 퍼블리싱100%",
      technic: "Markup, Responsive, Swiper.js",
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
        //"<img src='/img/" +
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
        "<i class='link_url'></i>" +
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
