//header-tit .btn  
$(".header-tit .btn").click(function(e){
  e.preventDefault();
  //$("#menu").css("display","block");
  //$("#menu").show();
  //("#menu").fadeIn();
  //$("#menu").slideDown();
  //$("#menu").toggle();
  //$("#menu").fadeToggle();
  $("#menu").slideToggle(200);
  $(this).toggleClass("on");
});

//banner 
$(".banner").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: false,
  autoplaySpeed: 3000,
  dots: true
});

//layer popup
$(".layer").click(function(e) {
  e.preventDefault();
  //$("#layer").css("display","block");
  //$("#layer").show();
  //$("#layer").fadeIn();
  $("#layer").slideDown();
});
$("#layer .close").click(function(e) {
  e.preventDefault();
  //$("#layer").css("display","block");
  //$("#layer").show();
  //$("#layer").fadeOut();
  $("#layer").slideUp(); 
});

//window
$(".window.qaRF-1").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("qaRF-1.html","qaRF-1","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.qaRF-2").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("qaRF-2.html","qaRF-2","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.qaRF-3").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("qaRF-3.html","qaRF-3","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.qaRF-4").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("qaRF-4.html","qaRF-4","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.qaRF-5").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("qaRF-5.html","qaRF-5","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.qaRF-6").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("qaRF-6.html","qaRF-6","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});


$(".window.qaStatrp").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("qaStatrp.html","qaStatrp","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.qaPrinsip").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("qaPrinsip.html","qaPrinsip","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.qaKratubuh").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("qaKratubuh.html","qaKratubuh","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.qaMnrtubuh").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("qaMnrtubuh.html","qaMnrtubuh","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.qaKtrtubuh").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("qaKtrtubuh.html","qaKtrtubuh","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.simj").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("simj.html","simj","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.ionNegative").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("ionNegative.html","ionNegative","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.chiropractic").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("chiropractic.html","chiropractic","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.4hbaKsht").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("4hbaKsht.html","4hbaKsht","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.popup").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("popup.html","popup","width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.rfFace").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("rfFace.html","rfFace", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.rfAbdomen").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("rfAbdomen.html","rfAbdomen", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.rfBrstHip").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("rfBrstHip.html","rfBrstHip", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.rfFootBack").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,rfFootBacktop,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("rfFace.html","rfFootBack", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.rfPain").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("rfPain.html","rfPain", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.rfScar").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("rfScar.html","rfScar", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.abaVirus").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("abaVirus.html","abaVirus", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.abaKuman").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("abaKuman.html","abaKuman", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.abaJamur").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("abaJamur.html","abaJamur", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.abaCacing-1").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("abaCacing-1.html","abaCacing-1", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.abaCacing-2").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("abaCacing-2.html","abaCacing-2", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.abaKanker-1").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("abaKanker-1.html","abaKanker-1", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.abaKanker-2").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("abaKanker-2.html","abaKanker-2", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.abaKanker-3").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("abaKanker-3.html","abakanker-3", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.reaksi").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("reaksi.html","reaksi", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.gigiManusia").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("gigiManusia.html","gigiManusia", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

$(".window.gorengan").click(function(e) {
  e.preventDefault();
  //window.open("file","file name","option");
  //option: left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
  window.open("gorengan.html","gorengan", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"); 
});

//lightgallery
$(".lightgallery.popup").lightGallery({
  thembnail: true,
  autoplay: true,
  pause: 3000,
  progressBar: true
}); 

$(".lightgallery.popup1").lightGallery({
  thembnail: true,
  autoplay: false,
  pause: 3000,
  progressBar: true
});

//tab_menu
var $tab_list = $(".tab_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e) {
  e.preventDefault();
  var $this = $(this);
  $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);
//gallery
$(".gallery_img").slick({
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1
}); 
$(".play").click(function(){
  $(".gallery_img").slick("slickPlay");
});
$(".pause").click(function(){
  $(".gallery_img").slick("slickPause");
});
$(".prev").click(function(){
  $(".gallery_img").slick("slickPrev");
});
$(".next").click(function(){
  $(".gallery_img").slick("slickNext");
});

$(".gallery1_img").slick({
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1
}); 
$(".play1").click(function(){
  $(".gallery1_img").slick("slickPlay");
});
$(".pause1").click(function(){
  $(".gallery1_img").slick("slickPause");
});
$(".prev1").click(function(){
  $(".gallery1_img").slick("slickPrev");
});
$(".next1").click(function(){
  $(".gallery1_img").slick("slickNext");
});

$(".gallery2_img").slick({
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1
}); 
$(".play2").click(function(){
  $(".gallery2_img").slick("slickPlay");
});
$(".pause2").click(function(){
  $(".gallery2_img").slick("slickPause");
});
$(".prev2").click(function(){
  $(".gallery2_img").slick("slickPrev");
});
$(".next2").click(function(){
  $(".gallery2_img").slick("slickNext");
});





















