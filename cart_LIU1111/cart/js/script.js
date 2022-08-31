
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");

  });


  if (matchMedia('(max-width: 694px)').matches) {
    // ウィンドウサイズが694px以下のとき

    var slider = new Swiper ('.js-recommend-swiper', {
      slidesPerView: 'auto',
      spaceBetween: 15,
      slidesPerView: 2.3,
      //centeredSlides: true,
      loop: true,
      loopedSlides: 4, //スライドの枚数と同じ値を指定
      navigation: {
        nextEl: '.swiper-recommend-next',
      },


    
  
      
      
      
    });


  } else {
    // それ以外

    var slider = new Swiper ('.js-recommend-swiper', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      slidesPerView: 4,
      //centeredSlides: true,
      loop: true,
      loopedSlides: 4, //スライドの枚数と同じ値を指定
      navigation: {
        nextEl: '.swiper-recommend-next',
      },
  
      
    });



  }


  $(function(){
    $(".address__more").on("click", function() {
      $(".address__more .more").toggleClass("on-click");
      $(".address__more .close").toggleClass("on-click");
      $(".address__other-address:nth-child(n + 4)").slideToggle();
    });
  }); 

  $(function(){
    $(".address__more-gift").on("click", function() {
      $(".address__more-gift .more").toggleClass("on-click");
      $(".address__more-gift .close").toggleClass("on-click");
      $(".address__other-gift:nth-child(n + 4)").slideToggle();
    });
  }); 


  jQuery(window).on("scroll", function() {
    // トップから100px以上スクロールしたら
    if (100 < jQuery(this).scrollTop()) {
      // is-showクラスをつける
   jQuery('.to-top').addClass( 'is-show' );
    } else {
      // 100pxを下回ったらis-showクラスを削除
    jQuery('.to-top').removeClass( 'is-show' );
    }
  });


  
  $(function(){
    $(".address__new-more").on("click", function() {
      $(this).addClass("is-none");
      $(".address__new").slideToggle();
    });
  }); 


  $(function(){
    $(".hope__change").on("click", function() {
      $(this).addClass("is-none");
      $(".hope__box-wrapper").slideToggle();
    });
  }); 

  $(function(){
    $(".credit__change").on("click", function() {
      $(this).addClass("is-none");
      $(".credit__kinds").toggleClass("is-none");
      $(".credit__register").slideToggle();
    });
  }); 


  /*
  const Select = jQuery('.is-select');
    jQuery(Select).on('change', function(){
      if (jQuery(Select).val() !== ""){
        jQuery(this).removeClass('is-select');
      } else {
        jQuery(this).addClass('is-select');
      }
    });
    */


  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

});



function changeColor(hoge){
  if( hoge.value == 0 ){
      hoge.style.color = '';
  }else{
      hoge.style.color = '#000';
  }
}




function entryChange1(){
  
  radio = document.getElementsByName('gift') 
  
  if(radio[0].checked) {
  
  //フォーム
  
  document.getElementById('firstBox').style.display = "none";
  
  }else if(radio[1].checked) {
  
  //フォーム
  

  document.getElementById('firstBox').style.display = "";
  
  
  }
  
  }
  
   
  
  //オンロードさせ、リロード時に選択を保持
  
  window.onload = entryChange1;