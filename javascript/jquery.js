$(document).ready(function() {
    $("#social-media").hide();
    $("#follow","#social-button").on("click",function(){
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

});

