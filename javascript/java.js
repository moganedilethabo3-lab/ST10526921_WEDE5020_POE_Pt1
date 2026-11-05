const contactForm = document.getElementById("contact");
if (contactForm) {
    contactForm.addEventListener("submit",function(event){
    event.preventDefault();

    const name=document.getElementById('fname').value.trim();
    const surname=document.getElementById('lname').value.trim();
    const phone=document.getElementById('phone').value.trim();
    const email=document.getElementById('email').value.trim();
    const enquiryField =document.getElementById("enquiry") ;
    const enquiry = enquiryField? enquiryField.value.trim() : "";

    document.querySelectorAll(".error-message").forEach(function(error){
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

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
       showError("emailError", "Please enter a valid email address.");valid= false;
    }

    const catergory=document.getElementById("catergory").value;
    if(catergory ===""){
        showError("catergoryError", "Please select an enquiry catergory.");
        valid=false;
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

const enquiryType =document.getElementById("catergory");
const catergoryResponse =document.getElementById("catergoryResponse");

if(enquiryType && catergoryResponse){
    enquiryType.addEventListener("change",function(){
        const selectedCatergory =enquiryType.value;
        
        if(selectedCatergory === "services"){
            catergoryResponse.innerHTML=
            "<h2> Paw R Us services </h2>" +
            "<h4> Paw R Us SA is an NPO pet welfare organisation that offers shelter and food for stray dogs that require assistance and care. </h4>" + 
            "<h4> If you have any enquiries about the organisation's services please do enquire and the team will respond to you. </h4>"
        }

     else if (selectedCatergory === "adoption"){
        catergoryResponse.innerHTML= 
        "<h2> Dog Adoption Information </h2>" +
        "<h4> Individuals interested in adopting any of our furry friends at Paw R Us will have to please have evidence to show they are in a good position to provide for the dog </h4>" +
        "<h4> Please do provide the organisation with detailed information about your adoption enquiry.</h4>"
    }
    
    else if (selectedCatergory === "donations") {
        catergoryResponse.innerHTML=
        "<h2> Paw R Us Donations </h2>" +
        "<h4> Donations of any amount and kind are all aprreciated and accepted at Paw R Us, becuase it through your donations that the comapny remains operating</h4>" +
        "<h4> Don't hestitate to enquire about the organisation's donation processes and details.</h4>"
        
    }

    else if(selectedCatergory === "volunteering") {
                catergoryResponse.innerHTML=
        "<h2> Paw R Us Volunteers </h2>" +
        "<h4> Thank you for your Interest in Volunteering at Paw R Us, your support and assistance is highly appreciated by us!</h4>" +
        "<h4> Do inform of how you would like to volunteer and what skills or services you can offer the organisation </h4>"
    
    }

    else {
        catergoryResponse.innerHTML=";"
    }

    });

    document.querySelectorAll("form").forEach(function(form){
        form.addEventListener("reset",function(){
            form.querySelector(".error-message").forEach(function(error){
                error.textContent="";
            });
            const catergoryResponse =form.querySelector("#catergoryResponse");
            if (catergoryResponse){
                catergoryResponse.innerHTML="";
            }
        });
    });
  
}

  



