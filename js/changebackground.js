var num=0;
var url= 'url("image/sky.jpg")';
var url1= 'url("image/sky2.jpg")';
var url2='url("image/sky3.jpg")';
var url3='url("image/sky4.jpg")'; 

 $('.form-radio').change(function() {
    //1.soru
     if(this.id == 'soru1.1'){
        num-=5;
    }
    else if(this.id  == 'soru1.2'){
        num+=5;
    }    
    //2.soru
   else if(this.id == 'soru2.1'){
        num-=3;
    }
    else if(this.id == 'soru2.2'){
        num+=3;
    }
    //3.soru
    
    //4.soru
    else if(this.id=="soru4.1"){
        num-=3;
    }
    else if(this.id=="soru4.2"){
        num+=3;
    }
    //6.soru
    else if(this.id=="soru6.1"){
        num-=5;
    }
    else if(this.id=="soru6.2"){
        num+=5;
    }
    //7.soru
    else if(this.id=="soru7.1"){
        num-=3;
    }
    else if(this.id=="soru7.2"){
        num+=3;
    }
    //8.soru
    else if(this.id=="soru8.1"){
        num+=5;
    }
    else if(this.id=="soru8.2"){
        num+=2;
    }
    else if(this.id=="soru8.3"){
        num-=2;
    }
    //9.soru
    else if(this.id=="soru9.1"){
        num-=5;
    }
    else if(this.id=="soru9.2"){
        num+=5;
    }
    //10.soru
    else if(this.id=="soru10.1"){
        num-=5;
    }
    else if(this.id=="soru10.2"){
        num+=5;
    }
    //11.soru
    else if(this.id=="soru11.1"){
        num-=5;
    }
    else if(this.id=="soru11.2"){
        num+=5;
    }
    //12.soru
    else if(this.id=="soru12.1"){
        num-=5;
    }
    else if(this.id=="soru12.2"){
        num+=2;
    }
    else if(this.id=="soru12.3"){
        num+=5;
    }
    
    //14.soru
    else if(this.id=="soru14.1"){
        num+=10;
    }
    else if(this.id=="soru14.2"){
        num+=5;
    }
    else if(this.id=="soru14.3"){
        num+=2;
    }
    else if(this.id=="soru14.4"){
        num-=5;
    }
    //15.soru
    else if(this.id=="soru15.1"){
        num-=5;
    }
    else if(this.id=="soru15.2"){
        num+=5;
    }
    
    

    //18.soru
    else if(this.id=="soru18.1"){
        num-=5;
    }
    else if(this.id=="soru18.2"){
        num+=5;
    }
    //19.soru
    else if(this.id=="soru19.1"){
        num-=5;
    }
    else if(this.id=="soru19.2"){
        num+=5;
    }

    //background-image değiştirme
    if(num>45){
        $(".body").css("background-image",url3);
        $(".section").css("background-color","rgba(255, 255, 255, 0.6)");
        $("p").css("color","rgb(25,25,112)");
    }
    if(num<45 && num>30){
        $(".body").css("background-image",url2);
        $(".section").css("background-color","rgba(244, 234, 253,0.5)");
        $("p").css("color","rgb(25,25,112)");
    }
    if(num>15 && num<30){
        $(".body").css("background-image",url1);
        $(".section").css("background-color","rgba(221, 221, 221, 0.6)");
        $("p").css("color","rgb(25,25,112)");
    }
    if(num < 15){
        
        $(".body").css("background-image",url);
        $(".section").css("background-color","rgba(221, 221, 221, 0.4)");


    }
});
