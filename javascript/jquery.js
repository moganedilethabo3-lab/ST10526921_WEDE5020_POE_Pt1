$(document).ready(function() {
    $("#social-media").hide();
<<<<<<< HEAD
    $("#follow,#social-button").on("click",function(){
=======
    $("#follow","#social-button").on("click",function(){
>>>>>>> 98be142dbaf8714f0d3a8eb6ce17a72699d8fe05
        $("#social-media").slideToggle(600);
    });


$(document).ready(function(){
    $("#gallery").hide();
    $("#openGallery").on("click",function(){
         $("#gallery").slideToggle(1000);
    });
});

$(document).ready(function(){
    $("#lane2").hide();
    $("#gallery2").on("click",function(){
         $("#lane2").slideToggle(1000);
    });
});

$(document).ready(function(){
    $("#social-media").hide();
    $("#social-button").on("click",function(){
         $("#social-media").slideToggle(1000);
    });
});

$(".faq-answer").hide();
$(".faq-question").on("click",function(){
    const answer =$(this).next(".faq-answer");
    answer.slideToggle(400);

    $(this).toggleClass("active")
});

<<<<<<< HEAD

const faqSection =[
    {
        question:"Can I bring a rescued dog to the shelter?",
        answer:"Yes, Paw R Us is a dog charity NPO that assists and provides shelter for both stray and rescued dogs. "
    },

    {
        question :"Who is eligible to adopt a dog at Paw R Us?",
        answer : "Anyone who is able to proof they are in a good position to provide suitable shelter and food for the dog which will be throughly checked through a house inspection."
    },

    {
        question :"From what age can one volunteer at the center?",
        answer : "Paw R Us prefers individuals from the age of 12 years and above to come and volunteer."
    },

    {
        question :"Should donations be made only in person",
        answer : "Not neccessarily. Donations can be online through PayPal and food parcels can be delivered using payable delivery services or if possible donations can be made in person by the donar."
    },

    {
        question :"Is it possible to adopt the dog of my choice.",
        answer : "Yes. Every adopter is given a chance to browse and select a dog that they would like to adopt and will not be assigned to a particular dog."
    },
];

const faqContainer =$("#faq");
if (faqContainer.length >0) {
    faqSection.forEach(function(item, index){
        const faqItem =$("<div>").addClass("faq-item");

        const question =$ ("<button>")
        .addClass("faq-question")
        .attr("type", "button")
        .attr("aria-expanded", "false")
        .attr("aria-controls", "faq-answer-" + index)
        .text(item.question);

         const answer =$("<div>")
        .addClass("faq-answer")
        .attr("id", "faq-answer-" +index)
        .attr("hidden", true)
        .text(item.answer);

            faqItem.append(question);
            faqItem.append(answer);
            faqContainer.append(faqItem);
    });

    }
    
    $("#faq").on("click", ".faq-question", function(){
        const answer =$(this).next(".faq-answer");

        const isOpen =$(this).attr("aria-expanded") === "true";

        $("#faq .faq-answer:visible").not(answer).slideUp(300);
        $("#faq .faq-question").not(this).attr("aria-expanded", "false");

        if (isOpen){
            answer.slideUp(300);
            $(this).attr("aria-expanded","false");
        }
        else{
            answer.prop("hidden",false)
            answer.slideDown(300);
            $(this).attr("aria-expanded", "true")
        }
    });

    });



=======
});
>>>>>>> 98be142dbaf8714f0d3a8eb6ce17a72699d8fe05

