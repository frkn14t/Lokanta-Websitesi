const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");
//! buttons

const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");
//  searche tıkladığımıda active ekle
searchBtn.addEventListener("click", function(){
searchForm.classList.toggle("active");
document.addEventListener("click", function(e){
if(!e.composedPath().includes(searchBtn) 
    &&!e.composedPath().includes(searchForm)){
    searchForm.classList.remove("active");
}
})
});
cartBtn.addEventListener("click", function(){
    cartItem.classList.toggle("active");
    document.addEventListener("click", function(e){
    if(!e.composedPath().includes(cartBtn) 
        &&!e.composedPath().includes(cartItem)){
        cartItem.classList.remove("active");
    }
    })
    });
   menuBtn.addEventListener("click", function(){
        navbar.classList.toggle("active");
        document.addEventListener("click", function(e){
        if(!e.composedPath().includes(menuBtn) 
            &&!e.composedPath().includes(navbar)){
            navbar.classList.remove("active");
        }
        })
        });

        //! Dark mode
        // Buton ve body elementini seçme
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;
        
        // Dark mode'u açıp kapatan fonksiyon
        function toggleDarkMode() {
          body.classList.toggle('dark-mode');
        }
        
        // Düğmeye tıklama olayı ve dark mode'u aktifleştirme
        darkModeToggle.addEventListener('click', function() {
          toggleDarkMode();
        });
//! ürün ekleme silme

// Ürünleri saklamak için bir dizi oluştur
let sepet = [];

// Sepete ürün ekleme fonksiyonu
function sepeteEkle(urunId, urunAdi, urunFiyati) {
    const urun = {
        id: urunId,
        ad: urunAdi,
        fiyat: urunFiyati
    };
    sepet.push(urun);
    console.log(`"${urunAdi}" sepete eklendi.`);
}

// Butonların bulunması ve tıklama olaylarının eklenmesi
const ekleButonlari = document.querySelectorAll('.btn');
ekleButonlari.forEach((buton) => {
    buton.addEventListener('click', function(e) {
        e.preventDefault();
        const urunId = this.getAttribute('data-urunid');
        const urunAdi = this.parentElement.previousElementSibling.querySelector('h3').innerText;
        const urunFiyati = this.parentElement.previousElementSibling.querySelector('.price').innerText;

        sepeteEkle(urunId, urunAdi, urunFiyati);
    });
});
//! Saat
    // JavaScript ile saat bilgisini güncelleme
    function guncelleSaat() {
        const saatDiv = document.getElementById('saat');
        const simdi = new Date();
        const saat = simdi.getHours();
        const dakika = simdi.getMinutes();
        const saniye = simdi.getSeconds();
  
        const zaman = `${saat < 10 ? '0' + saat : saat}:${dakika < 10 ? '0' + dakika : dakika}:${saniye < 10 ? '0' + saniye : saniye}`;
        saatDiv.textContent = zaman;
      }
  
      // Saati her saniye güncelle
      setInterval(guncelleSaat, 1000);
  
      // Sayfa yüklendiğinde ilk saat değerini al
      window.onload = guncelleSaat;
  
   //! anket gönderme  
// GÖNDER butonunu seçme
const submitButtonAnket = document.getElementById('submitAnket');

// Uyarı mesajının div'ini seçme
const warningMessage = document.getElementById('warningMessage');

// Butona tıklama olayı ekleme
submitButtonAnket.addEventListener('click', function(event) {
    // Sayfanın yenilenmesini engellemek için formun varsayılan davranışını durdurma
    event.preventDefault();
    
    // Uyarı mesajını gösterme
    warningMessage.style.display = 'block';

    // İsteği gönderme işlemleri burada gerçekleştirilebilir, burada sadece mesajın görünürlüğü kontrol ediliyor
});
