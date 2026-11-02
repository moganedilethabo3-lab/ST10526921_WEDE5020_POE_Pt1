const contact = document.getElementById('contact');contact.addEventListener('submit',function(event){
    event.preventDefault();

    const name=document.getElementById('fname').value.trim()
    const surname=document.getElementById('lname').value.trim()
    const phone=document.getElementById('phone').value.trim()
    const email=document.getElementById('email').value.trim()
    const enquiry=document.getElementById('enquiry').value.trim()
   
    if(name==""){
        document.getElementById('fnameError').innerHTML="Enter your first name correctly";
        return;
    }

    if(surname==""){
        document.getElementById('lnameError').innerHTML="Enter your first surname correctly";
        return;
    }

    if(!/^\d{10}$/.test(phone)){
        document.getElementById('phoneError').innerHTML="Please ensure your phone number consists of 10 digits only";
        return;
    }

    if(enquiry==""){
        document.getElementById('enquiryError').innerHTML="Please type your enquiy for the organisation";
        return;
    }

    const emailPattern = /^[^@]+\.[^@]+$/;
    if(!emailPattern.test(email)){
        document.getElementById('emailError').innerHTML="Enter the correct structured email";
        return;
    }



    
})

const galleryImages = document.querySelectorAll(".dog-name");


const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const closeButton = document.getElementById("closeLightbox");

let currentImage = 0;



galleryImages.forEach(function(image, index) {

    image.addEventListener("click", function() {

        currentImage = index;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.style.display = "flex";

    });

});
nextButton.addEventListener("click", nextImage);

previousButton.addEventListener("click", previousImage);



closeButton.addEventListener("click", function() {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }

});



