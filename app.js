$(".tile, #cancel").click(function(){
  $('.form-container, .form').toggleClass('active');
});

let timeSet = new Date("12/12/2022 10:10").getTime();

$('#submit').click(function(){
  let newSet = new Date(`${$('#date').val()} ${$('#time').val()}`);
  if($('#date').val() == "" || $('#time').val() == ""){
    console.log('');
    alert('please fill all the form input')
  } else if(newSet < new Date().getTime()){
    alert('Your date could not less than present time')
  }  else {
    $('.form-container, .form').toggleClass('active');
    timeSet = newSet;
    console.log(timeSet);
  }
});

function tahun(){
    let now = new Date().getTime();
    let distance = timeSet - now;
    // var y = 1000*60*60*24*30*12;
    // var m = 1000*60*60*24*30;
    let d = 1000*60*60*24;
    let h = 1000*60*60;
    let m = 1000*60;
    let s = 1000;
    // var year = Math.floor(distance/y);
    // var month = Math.floor((distance%y)/m);
    let day = Math.floor(distance/d).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    let hours = Math.floor((distance%d)/h).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    let min = Math.floor((distance%h)/m).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    let sec = Math.floor((distance%m)/s).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

    if(distance>=0){
      $('.num').eq(0).html(day);
      $('.num').eq(1).html(hours);
      $('.num').eq(2).html(min);
      $('.num').eq(3).html(sec);
    }
    
}
setInterval(tahun, 1000);