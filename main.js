$(document).ready(function(){
  const time_01 = document.querySelector(".time_01")
  const time_1 = document.querySelector(".time_1")
  const time_10 = document.querySelector(".time_10")
  const time_100 = document.querySelector(".time_100")
  
  let cnt_01 = 0;
  let cnt_1 = 0;
  let cnt_10 = 0;
  let cnt_100 = 0;
  let timerId;
  
  $(".btn-start").on('click',function(){
    $(this).addClass("push_btn");
    $(".btn-stop").removeClass("push_btn");
    $(".btn-reset").removeClass("push_btn");
    timerId = setInterval(count,100);
    $(".btn-start").prop("disabled",true);
  });
  
  $(".btn-stop").on('click',function(){
    $(this).addClass("push_btn");
    $(".btn-start").removeClass("push_btn");
    clearInterval(timerId);
    $(".btn-start").prop("disabled",false);
  });
  
  $(".btn-reset").on('click',function(){
    $(this).addClass("push_btn");
    $(".btn-start").removeClass("push_btn");
    $(".btn-start").prop("disabled",false);
    clearInterval(timerId);
    time_01.textContent = 0;
    time_1.textContent = 0;
    time_10.textContent = 0;
    time_100.textContent = 0;
    cnt_01 = 0;
    cnt_1 = 0;
    cnt_10 = 0;
    cnt_100 = 0;
  });
  
  function count(){
    time_01.textContent = cnt_01;
    time_1.textContent = cnt_1;
    time_10.textContent = cnt_10;
    time_100.textContent =cnt_100;
    
    if(cnt_01 == 9){
      cnt_01 = 0;
      cnt_1++;
      if(cnt_1 == 10){
        cnt_1 = 0;
        cnt_10++;
        if(cnt_10 == 10){
          cnt_10 = 0;
          cnt_100++;
        }
      }
    }else{
      cnt_01++;
    }
  }
});