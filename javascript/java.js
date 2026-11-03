const contactForm = document.getElementById("contact");
if (contactForm) {
    contact.addEventListener("submit",function(event){
    event.preventDefault();

    const name=document.getElementById('fname').value.trim();
    const surname=document.getElementById('lname').value.trim();
    const phone=document.getElementById('phone').value.trim();
    const email=document.getElementById('email').value.trim();
    const enquiryField =document.getElementById("enquiry").value.trim() ;
    const enquiry = enquiryField? enquiryField.value.trim() : "";

    document.querySelectorAll(".error-messge").forEach(function(error){
        error.textContent="";
    });
    let valid = true;
    if(name==""){
        showError("fnameError", "Please enter your correct name.");valid= false;
    }

    if(surname==""){
        showError("lnameError", "Please enter your correct surname.");valid= false;
    }
    


    if(!/^\d{10}$/.test(phone)){
       showError("phoneError", "Please enter a valid 10-digit phone number.");valid= false;
    }

    if(enquiry==""){
      showError("enquiryError", "Please enter your enquiry.");valid= false;
    }

    const emailPattern = /^[^@]+\.[^@]+$/;
    if(!emailPattern.test(email)){
       showError("emailError", "Please enter a valid email address.");valid= false;
    }
    
    if(!valid){
        return;
    }

    alert("Thank You," +name + "! Your information has been successfully submitted");
    contactForm.requestFullscreen();

    
});
}

function showError(errorId, message){
    const errorElement = document.getElementById(errorId);
    if (errorElement){
        errorElement.textContent = message ;
    }
}

const galleryImages = document.querySelectorAll("#gallery img, #lane2 img, .align img");


const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeButton = document.getElementById("closeLightbox");

let currentImage = 0;



if (galleryImages.length>0 && lightbox && lightboxImage) {
    galleryImages.forEach(function(image, index) {
     image.style.cursor ="pointer";

    image.addEventListener("click", function() {

        currentImage = index;
        dispalyImage();
        lightbox.style.display ="flex"
    });

});

  function displayImage(){
     lightboxImage.src = galleryImages[currentImage].src;
    lightboxImage.alt = galleryImages[currentImage].alt;
  }

  if (closeButton){
    closeButton.addEventListener("click",function(){
        lightbox.style.display ="none";
    });
  }

  lightbox.addEventListener("click", function(event){
    if (event.target ===lightbox) {
        lightbox.style.display ="none";
    }
  });
}

  



