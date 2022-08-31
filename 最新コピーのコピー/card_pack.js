window.onload = function(){
    document.getElementById("onemore").style.visibility ="hidden";
    }

  // ガチャデータを定義
  var card_1 = 10;
  var card_2 = 20;
  var card_3 = 30;
  var card_4 = 40;
  var card_5 = 50;
  const min = 1;
  const max = 50;

  function OnButtonClick() {
       document.getElementById("app").style.visibility ="hidden";
       document.getElementById("card_1").style.visibility ="hidden";
       document.getElementById("card_2").style.visibility ="hidden";
       document.getElementById("card_3").style.visibility ="hidden";
       document.getElementById("card_4").style.visibility ="hidden";
       document.getElementById("card_5").style.visibility ="hidden";
    

       const randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
       console.log(randomNum);

       if(randomNum<=10){
           console.log("card_1が当たりました！");
           document.getElementById("card_1").style.visibility ="visible";
           document.getElementById("onemore").style.visibility ="visible";

       }
       else if(randomNum>=10&randomNum<=20){
           console.log("card_2が当たりました！");
           document.getElementById("card_2").style.visibility ="visible";
           document.getElementById("onemore").style.visibility ="visible";
       }
       else if(randomNum>=20&randomNum<=30){
           console.log("card_3が当たりました！");
           document.getElementById("card_3").style.visibility ="visible";
           document.getElementById("onemore").style.visibility ="visible";
       }
       else if(randomNum>=30&randomNum<=40){
           console.log("card_4が当たりました！");
           document.getElementById("card_4").style.visibility ="visible";
           document.getElementById("onemore").style.visibility ="visible";
       }
       else if(randomNum>=40&randomNum<=50){
           console.log("card_5が当たりました！");
           document.getElementById("card_5").style.visibility ="visible";
           document.getElementById("onemore").style.visibility ="visible";
       }
  }

