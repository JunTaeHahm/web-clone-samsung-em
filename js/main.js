/* Load Header, Footer */
async function fetchHtmlAsText(url) {
  const response = await fetch(url);
  return await response.text();
}

async function importPage(target) {
  document.querySelector('#' + target).innerHTML = await fetchHtmlAsText(target + '.html');
}

(async function () {
  await importPage('header');
  await importPage('footer');
  /* 주메뉴 */
  const gnbMenu = document.querySelectorAll('.gnb>ul>li');
  const headerWrap = document.querySelector('.header_wrap');

  // list 구조에 코드 적용 시 for문으로 배열 개수만큼 돌림
  for (let i = 0; i < gnbMenu.length; i++) {
    // mouseover 시 .on 추가, headerWrap Height 값 변경
    gnbMenu[i].addEventListener('mouseover', e => {
      e.currentTarget.classList.add('on');
      let ht = e.currentTarget.children[1].offsetHeight;
      headerWrap.style.height = 70 + ht + 'px';
    });
    // mouseout 시 .on 삭제, headerWrap Height 값 원복
    gnbMenu[i].addEventListener('mouseout', e => {
      e.currentTarget.classList.remove('on');
      headerWrap.style.height = '70px';
    });
    // focus 시 .on 추가, headerWrap Height 값 변경
    gnbMenu[i].children[0].addEventListener('focus', e => {
      e.currentTarget.parentElement.classList.add('on');
      let ht = e.currentTarget.nextElementSibling.offsetHeight;
      headerWrap.style.height = 70 + ht + 'px';
    });
    // blur 시 .on 삭제, headerWrap Height 값 원복
    gnbMenu[i].children[0].addEventListener('blur', e => {
      e.currentTarget.parentElement.classList.remove('on');
      headerWrap.style.height = '70px';
    });
  }

  /* 검색박스 */
  const srchBtn = document.querySelector('.btn_srch');
  const srchWrap = document.querySelector('.srch_wrap');
  const srchBtnClose = document.querySelector('.btn_srch_close');

  // 검색버튼 클릭 시 srchWrap에 .on 추가
  srchBtn.addEventListener('click', e => {
    e.preventDefault();
    srchWrap.classList.add('on');
  });
  // 닫기버튼 클릭 시 srchWrap에 .on 삭제
  srchBtnClose.addEventListener('click', e => {
    e.preventDefault();
    srchWrap.classList.remove('on');
  });

  /* top 버튼 */
  const btnTop = document.querySelector('.btn_top');

  // 스크롤 값에 따라 btnTop 에 .on과 .ab 추가
  window.addEventListener('scroll', () => {
    let scroll = document.querySelector('html').scrollTop;
    console.log(scroll);
    if (scroll <= 0) {
      btnTop.classList.remove('on', 'ab');
    } else if (scroll > 0 && scroll < 4000) {
      btnTop.classList.remove('ab');
      btnTop.classList.add('on');
    } else {
      btnTop.classList.add('ab');
    }
  });

  // 탑버튼 scrollTop 0
  btnTop.addEventListener('click', e => {
    e.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
  // 로드 시 scrollTop 0
  window.addEventListener('load', () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

  // 스크롤 로딩 액션
  let content1_h2 = document.querySelector('.content1>h2 ');
  let content1_ul = document.querySelector('.content1>ul ');
  let content1_newsletter = document.querySelector('.content1>.newsletter ');
  let content2 = document.querySelector('.content2 ');
  let content2_a = document.querySelector('.content2>a ');
  let content3_1st_img = document.querySelector('ul.product_list>li:nth-of-type(1)>a>.image');
  let content3_1st_txt = document.querySelector('ul.product_list>li:nth-of-type(1)>a>.text');
  let content3_2nd_img = document.querySelector('ul.product_list>li:nth-of-type(2)>a>.image');
  let content3_2nd_txt = document.querySelector('ul.product_list>li:nth-of-type(2)>a>.text');
  let content3_3rd_img = document.querySelector('ul.product_list>li:nth-of-type(3)>a>.image');
  let content3_3rd_txt = document.querySelector('ul.product_list>li:nth-of-type(3)>a>.text');

  function scrollAction(el) {
    el.style.opacity = '1';
    el.style.transform = 'translate3d(0,0,0)';
  }

  window.addEventListener('scroll', () => {
    let scroll = document.querySelector('html').scrollTop;

    if (scroll > 300) scrollAction(content1_h2);
    if (scroll > 450) scrollAction(content1_ul);
    if (scroll > 870) scrollAction(content1_newsletter);
    if (scroll > 940) {
      scrollAction(content2);
      scrollAction(content2_a);
    }
    if (scroll > 2000) {
      scrollAction(content3_1st_img);
      scrollAction(content3_1st_txt);
    }
    if (scroll > 2400) {
      scrollAction(content3_2nd_img);
      scrollAction(content3_2nd_txt);
    }
    if (scroll > 2800) {
      scrollAction(content3_3rd_img);
      scrollAction(content3_3rd_txt);
    }
  });

  // main_visual p transition
  let main_visual_p = document.querySelector('.main_visual>.main_video>p');
  window.addEventListener('load', () => {
    main_visual_p.style.opacity = '1';
  });
})();
