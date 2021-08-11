var num=0;
var url= 'url("image/sky.jpg")';
var url1= 'url("image/sky2.jpg")'; 

 $('.form-radio').change(function() {
    if(this.value == 'hayır-verilmedi'){
        num+=5;
    }
    if(this.value == 'evet-verildi'){
        num-=5;
    }
    if(this.value == 'hayır-okumadım'){
        num+=3;
    }
    if(this.value == 'evet-okudum'){
        num-=3;
    }
    if(num == 8){
        $(".body").css("background-image",url1);
        $(".main").css("background-color","rgba(221, 221, 221, 0.6)");
    }
    if(num < 8){
        $(".body").css("background-image",url);
    }
});
