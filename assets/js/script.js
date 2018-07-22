//  hover function
$('.toggle-button img').hover(function() {
    $('.form').hide();
    $('.toggled-container').show();
    $('.right-container').addClass('orange');
}, function() {
    $('.toggled-container').hide();
    $('.form').show();
    $('.right-container').removeClass('orange');
});

// Click Functions
var maleClick = function() {
    $('.male-icon').addClass('male-hover');
    $('.male-icon').css('background-color', '#b1bfcd');
    $('.female-icon').removeClass('female-hover');
    $('.female-icon').css('background-color', '#f5f8f9');
}

var femaleClick = function() {
    $('.female-icon').addClass('female-hover');
    $('.female-icon').css('background-color', '#b1bfcd');
    $('.male-icon').removeClass('male-hover');
    $('.male-icon').css('background-color', '#f5f8f9');
}

var classicClick = function() {
    $('.classic-icon').addClass('classic-hover');
    $('.classic-icon').css('background-color', '#b1bfcd');
    $('.silver-icon').removeClass('silver-hover');
    $('.silver-icon').css('background-color', '#f5f8f9');
    $('.gold-icon').removeClass('gold-hover');
    $('.gold-icon').css('background-color', '#f5f8f9');
}

var silverClick = function() {
    $('.silver-icon').addClass('silver-hover');
    $('.silver-icon').css('background-color', '#b1bfcd');
    $('.classic-icon').removeClass('classic-hover');
    $('.classic-icon').css('background-color', '#f5f8f9');
    $('.gold-icon').removeClass('gold-hover');
    $('.gold-icon').css('background-color', '#f5f8f9');
}

var goldClick = function() {
    $('.gold-icon').addClass('gold-hover');
    $('.gold-icon').css('background-color', '#b1bfcd');
    $('.silver-icon').removeClass('silver-hover');
    $('.silver-icon').css('background-color', '#f5f8f9');
    $('.classic-icon').removeClass('classic-hover');
    $('.classic-icon').css('background-color', '#f5f8f9');
}

if ($('.male-icon').click()) {
    $('.male-icon').click(maleClick);
} 

if ($('.female-icon').click()) {
    $('.female-icon').click(femaleClick);
};

if ($('.classic-icon').click()) {
    $('.classic-icon').click(classicClick);
} 

if ($('.silver-icon').click()) {
    $('.silver-icon').click(silverClick);
} 

if ($('.gold-icon').click()) {
    $('.gold-icon').click(goldClick);
} 

// Validation Function
$('.save-button').click(function(e) {
    var isValid = true;
    $('input[type="text"], input[type="number"], input[type="date"]').each(function() {
        if ($.trim($(this).val()) == '') {
            isValid = false;
            $(this).css({
                "border": "3px solid #ff9200"
            });
            $('span').show();
            $('label').css({
                "color": "#ff9200"
            });
            $('.circle').show();
        }
        else {
            $(this).css({
                "border": ""
            });
            $('span').hide();
            $('label').css({
                "color": "#ff9200"
            });
            $('.circle').hide();
        }
    });
    if (isValid == false)
        e.preventDefault();
    else
        alert('Thank you for submitting');
});
    

