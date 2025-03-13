//  ini file js yang akan dijalankan pada halaman index.php

// untuk menampilkan nama pengunjung
function visitorName(){
    let name = prompt("What is your name?", "");
    if(name != null){
        document.getElementById("visitor-name").innerHTML = name;
    }
}
visitorName();

//untuk menggerakkan banner autoslide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}
function plusDivdiv(n){
    showDivs(slideIndex += n);
}
function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("banner");
    if (n > imgList.length) {slideIndex = 1}
    else if (n < 1) {slideIndex = imgList.length}

    for (i = 0; i < imgList.length; i++){
        imgList[i].style.display = "none";
    }
    imgList[slideIndex-1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 1500); //1500 milidetik = 1,5 detik

//mengganti gambar slide ketika ditekan
let bannerPress = document.getElementById("main-banner");
bannerPress.addEventListener("click", function() {
    plusDivdiv(1);
});


//untuk menampilkan form
function previewForm(){
    document.getElementById("Nama").innerHTML = "John Doe";
    var x = document.forms["myForm"]["fname"].value;
    if (x == ""){
        alert("Name must be filled out");
        return false;
    }
    else{
        alert("Welcome, " + x + "!");
    }
} 

//validasi form
function validateForm(){
    const name= document.forms["message-form"]["name"].value;
    const birthDate= document.forms["message-form"]["tgl_lahir"].value;
    const gender= document.forms["message-form"]["jenis_kelamin"].value;
    const message= document.forms["message-form"]["message"].value;

    if(name == "" || birthDate == "" || gender == "" || message == ""){
        alert("Tidak boleh ada data kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, message);

    return false;
}

//menampilkan hasil submit
function setSenderUI(name, birthDate, gender, message){
    document.getElementById("sender-fullname").innerHTML = name;
    document.getElementById("sender-birthdate").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = message;
}