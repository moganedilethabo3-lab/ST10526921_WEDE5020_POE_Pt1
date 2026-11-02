$(document).ready(function() {
    $("#social-media").hide();
    $("#follow").click(function(){
        $("#social-media").show(); 
    });
});

$(document).ready(function(){
    $("#gallery").hide();
    $("#openGallery").click(function(){
         $("#gallery").slideToggle(1000);
    })
})

$(document).ready(function(){
    $("#lane2").hide();
    $("#gallery2").click(function(){
         $("#lane2").slideToggle(1000);
    })
})

$(document).ready(function(){
    $("#social-media").hide();
    $("#social-button").click(function(){
         $("#social-media").slideToggle(1000);
    })
})

