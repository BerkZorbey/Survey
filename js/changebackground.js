var num=0;

var url= 'url("image/sky.jpg")';
var url1= 'url("image/sky2.jpg")';
var url2='url("image/sky3.jpg")';
var url3='url("image/sky4.jpg")'; 
//3.sorudaki checkbox disable etme fonksiyonu
function disablecheckbox_3(){
    if(document.getElementById("soru3.6").checked==true){
    var soru3_1=document.getElementById("soru3.1").disabled =true;
    var soru3_2=document.getElementById("soru3.2").disabled =true;
    var soru3_3=document.getElementById("soru3.3").disabled =true;
    var soru3_4=document.getElementById("soru3.4").disabled =true;
    var soru3_5=document.getElementById("soru3.5").disabled =true;
    num+=6;
  return  soru3_1 + soru3_2 +soru3_3 + soru3_4 +soru3_5;}
  else if(document.getElementById("soru3.1").checked==true||document.getElementById("soru3.2").checked==true||document.getElementById("soru3.3").checked==true||document.getElementById("soru3.4").checked==true||document.getElementById("soru3.5").checked==true){
      num-=1;
      return document.getElementById("soru3.6").disabled=true;
      
  }
  else{
    soru3_1=document.getElementById("soru3.1").disabled =false;
    soru3_2=document.getElementById("soru3.2").disabled =false;
    soru3_3=document.getElementById("soru3.3").disabled =false;
    soru3_4=document.getElementById("soru3.4").disabled =false;
    soru3_5=document.getElementById("soru3.5").disabled =false;
    soru3_6=document.getElementById("soru3.6").disabled=false;
    return soru3_1 + soru3_2 +soru3_3 + soru3_4 +soru3_5+soru3_6;
  }
}
//5.sorudaki checkbox disable etme fonksiyonu
function disablecheckbox_5() {
    if(document.getElementById("soru5.1").checked==true || document.getElementById("soru5.2").checked==true || document.getElementById("soru5.3").checked==true){
        var soru5_4=document.getElementById("soru5.4").disabled =true;
        var soru5_5=document.getElementById("soru5.5").disabled =true;
        num -=2;
        
      return  soru5_4 + soru5_5;}
      else if(document.getElementById("soru5.4").checked==true||document.getElementById("soru5.5").checked==true){
        var soru5_1=document.getElementById("soru5.1").disabled =true;
        var soru5_2=document.getElementById("soru5.2").disabled =true;
        var soru5_3=document.getElementById("soru5.3").disabled =true;
        num +=3;
        return  soru5_1 + soru5_2 + soru5_3;
    }
    else{
        soru5_1=document.getElementById("soru5.1").disabled =false;
        soru5_2=document.getElementById("soru5.2").disabled =false;
        soru5_3=document.getElementById("soru5.3").disabled =false;
        soru5_4=document.getElementById("soru5.4").disabled =false;
        soru5_5=document.getElementById("soru5.5").disabled =false;
        
        return soru5_1 + soru5_2 +soru5_3 + soru5_4 +soru5_5;}
}
var i1=0;
var i2=0;
var i4=0;
var i6=0;
var i7=0;
var i8=0;
var i9=0;
var i10=0;
var i11=0;
var i12=0;
var i13=0;
var i14=0;
var i15=0;
var i18=0;
var i19=0;
 $('.form-radio').change(function() {
     
    //1.soru
    
     if(this.id == 'soru1.1'){
        if(i1==0){
         num-=5;
        i1=1;
        }
        else if(i1==1){
           num-=10; 
        } 
    } 
    else if(this.id  == 'soru1.2'){
        if(i1==0){
            num+=5;
           i1=1;
           }
           else if(i1==1){
              num+=10; 
           } 
    } 
       
    //2.soru
   else if(this.id == 'soru2.1'){
      if(i2==0){
        num-=3;
       i2=1;
       }
       else if(i2==1){
          num-=6; 
       } 
        
    }
    else if(this.id == 'soru2.2'){
        if(i2==0){
            num+=3;
           i2=1;
           }
           else if(i2==1){
              num+=6; 
           } 
        
    }  
    //4.soru
    else if(this.id=="soru4.1"){
        if(i4==0){
            num-=3;
           i4=1;
           }
           else if(i4==1){
              num-=6; 
           } 
        
    }
    else if(this.id=="soru4.2"){
        if(i4==0){
            num+=3;
           i4=1;
           }
           else if(i4==1){
              num+=6; 
           } 
    }

    //6.soru
    else if(this.id=="soru6.1"){
        if(i6==0){
            num-=5;
           i6=1;
           }
           else if(i6==1){
              num-=10; 
           } 
        
    }
    else if(this.id=="soru6.2"){
        if(i6==0){
            num+=5;
           i6=1;
           }
           else if(i6==1){
              num+=10; 
           } 
        
    }

    //7.soru
    else if(this.id=="soru7.1"){
        if(i7==0){
            num-=3;
           i7=1;
           }
           else if(i7==1){
              num-=6; 
           } 
       
    }
    else if(this.id=="soru7.2"){
        if(i7==0){
            num+=3;
           i7=1;
           }
           else if(i7==1){
              num+=6; 
           } 
        
    }

    //8.soru hatalı
    else if(this.id=="soru8.1"){
        if(i8==0){
            num+=5;
           i8=1;
           }
           else if(i8==1){
              num+=10; 
           } 
        
    }
    
    else if(this.id=="soru8.3"){
        if(i8==0){
            num-=5;
           i8=1;
           }
           else if(i8==1){
              num-=10; 
           } 
        
    }

    //9.soru
    else if(this.id=="soru9.1"){
        if(i9==0){
            num-=5;
           i9=1;
           }
           else if(i9==1){
              num-=10; 
           } 
     
    }
    else if(this.id=="soru9.2"){
        if(i9==0){
            num+=5;
           i9=1;
           }
           else if(i9==1){
              num+=10; 
           } 
       
    }
    //10.soru
    else if(this.id=="soru10.1"){
        if(i10==0){
            num-=5;
           i10=1;
           }
           else if(i10==1){
              num-=10; 
           } 
        
    }
    else if(this.id=="soru10.2"){
        if(i10==0){
            num+=5;
           i10=1;
           }
           else if(i10==1){
              num+=10; 
           } 
        
    }
    //11.soru
    else if(this.id=="soru11.1"){
        if(i11==0){
            num-=5;
           i11=1;
           }
           else if(i11==1){
              num-=10; 
           } 
       
    }
    else if(this.id=="soru11.2"){
        if(i11==0){
            num+=5;
           i11=1;
           }
           else if(i11==1){
              num+=10; 
           } 
       
    }
    //12.soru hatalı
    else if(this.id=="soru12.1"){
        if(i12==0){
            num-=5;
           i12=1;
           }
           else if(i12==1){
              num-=10; 
           } 
       
    }
    
    else if(this.id=="soru12.3"){
        if(i12==0){
            num+=5;
           i12=1;
           }
           else if(i12==1){
              num+=10; 
           } 
       
    }
    //13.soru
    else if(this.id=="soru13.1"){
        if(i13==0){
            num-=5;
           i13=1;
           }
           else if(i13==1){
              num-=10; 
           } 
        
    }
    else if(this.id=="soru13.2"){
        if(i13==0){
            num+=5;
           i13=1;
           }
           else if(i13==1){
              num+=10; 
           } 
       
    }
    
    //14.soru hatalı
    else if(this.id=="soru14.1"){
        if(i14==0){
            num+=10;
           i14=1;
           }
           else if(i14==1){
              num+=20; 
           } 
        
    }
    else if(this.id=="soru14.2"){
        if(i14==0){
            num+=5;
           i14=1;
           }
           else if(i14==1){
              num+=10; 
           } 
        
    }
    else if(this.id=="soru14.3"){
        if(i14==0){
            num+=2;
           i14=1;
           }
           else if(i14==1){
              num+=4; 
           } 
        
    }
    else if(this.id=="soru14.4"){
        if(i14==0){
            num-=5;
           i14=1;
           }
           else if(i14==1){
              num-=10; 
           } 
        
    }
    //15.soru
    else if(this.id=="soru15.1"){
        if(i15==0){
            num-=5;
           i15=1;
           }
           else if(i15==1){
              num-=10; 
           } 
        
    }
    else if(this.id=="soru15.2"){
        if(i15==0){
            num+=5;
           i15=1;
           }
           else if(i15==1){
              num+=10; 
           } 
       
    }
    
    

    //18.soru
    else if(this.id=="soru18.1"){
        if(i18==0){
            num-=5;
           i18=1;
           }
           else if(i18==1){
              num-=10; 
           } 
        
    }
    else if(this.id=="soru18.2"){
        if(i18==0){
            num+=5;
           i18=1;
           }
           else if(i18==1){
              num+=10; 
           } 
    }
    //19.soru
    else if(this.id=="soru19.1"){
        if(i19==0){
            num-=5;
           i19=1;
           }
           else if(i19==1){
              num-=10; 
           } 
       
    }
    else if(this.id=="soru19.2"){
        if(i19==0){
            num+=5;
           i19=1;
           }
           else if(i19==1){
              num+=10; 
           } 
        
    }

    //background-image değiştirme
    if(num>45){
        $(".body").css("background-image",url3);
        $(".section").css("background-color","rgba(255, 255, 255, 0.7)");
        $("header").css("background-color","rgba(255, 255, 255, 0.7)");
        $(".footer").css("background-color","rgba(255, 255, 255, 0.7)");
        $("p").css("color","rgb(25,25,112)");
    }
    if(num<45 && num>30){
        $(".body").css("background-image",url2);
        $(".section").css("background-color","rgba(244, 234, 253,0.6)");
        $("header").css("background-color","rgba(255, 255, 255, 0.7)");
        $(".footer").css("background-color","rgba(255, 255, 255, 0.7)");
        $("p").css("color","rgb(25,25,112)");
    }
    if(num>15 && num<30){
        $(".body").css("background-image",url1);
        $(".section").css("background-color","rgba(255, 255, 255, 0.5)");
        $("header").css("background-color","rgba(255, 255, 255, 0.6)");
        $(".footer").css("background-color","rgba(255, 255, 255, 0.6)");
        $("p").css("color","rgb(25,25,112)");
    }
    if(num < 15){
        $(".footer p").css("color","rgb(0, 0, 0)");
        $(".body").css("background-image",url);
        $(".section").css("background-color","rgba(255, 255, 255, 0.4)");
    }

    
   
});

const ratingStars = [...document.getElementsByClassName("rating_star")];
//20.sorudaki yıldızların renk değişimi için fonksiyon
function executeRating(stars) {
  const starClassActive = "rating_star fas fa-star";
  const starClassInactive = "rating_star far fa-star";
  const starsLength = stars.length;
  let i;
 var deger=0;
 //reset tuşuna basınca sıfırla herşeyi
  document.getElementById("reset").addEventListener("click",(function(){
      for(i=0;i<starsLength;i++) stars[i].className = starClassInactive;
      $(".footer p").css("color","rgb(0, 0, 0)");
      $(".body").css("background-image",url);
      $(".section").css("background-color","rgba(255, 255, 255, 0.4)");
      $(".footer").css("background-color","rgba(255, 255, 255, 0.5)");
      $("header").css("background-color","rgba(255, 255, 255, 0.5)");
      num=0;
      soru3_1=document.getElementById("soru3.1").disabled =false;
    soru3_2=document.getElementById("soru3.2").disabled =false;
    soru3_3=document.getElementById("soru3.3").disabled =false;
    soru3_4=document.getElementById("soru3.4").disabled =false;
    soru3_5=document.getElementById("soru3.5").disabled =false;
    soru3_6=document.getElementById("soru3.6").disabled=false;
    soru5_1=document.getElementById("soru5.1").disabled =false;
        soru5_2=document.getElementById("soru5.2").disabled =false;
        soru5_3=document.getElementById("soru5.3").disabled =false;
        soru5_4=document.getElementById("soru5.4").disabled =false;
        soru5_5=document.getElementById("soru5.5").disabled =false;
    return soru3_1 + soru3_2 +soru3_3 + soru3_4 +soru3_5+soru3_6+soru5_1 + soru5_2 +soru5_3 + soru5_4 +soru5_5;
      
  }));
      
  
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className===starClassInactive) {
        for (i; i >= 0; --i){ stars[i].className = starClassActive; }
        
      } 
      
      else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
     deger=  i<starsLength  ? stars.indexOf(star)+1:stars.indexOf(star);
     document.getElementById("soru20").value = deger;
     
      
    };
    
    
  });
  
}   
executeRating(ratingStars);


