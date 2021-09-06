$(document).ready(function () {
    function checkSliders() {

        $('.testimonials:first').hasClass('active')
        $('.testimonials:last').hasClass('active');
        setInterval(function () {
            $(' .testimonials:first')
                .fadeOut(500)
                .next()
                .fadeIn(500)
                .end()

                .appendTo('.section-slider');

            if ($('.testimonials:last')) {
                $('.testimonials:first').fadeIn();
            }
        }, 5000);

    }
    checkSliders();

    $('.arrows i').click(function () {
        if ($(this).hasClass('fa-long-arrow-alt-right')) {
            $('.section-slider .active').fadeOut(100, function () {
                $(this).removeClass('active').next('.testimonials').addClass('active').fadeIn();
                checkSliders();

            });
        } else {
            $('.section-slider .active').fadeOut(100, function () {
                $(this).removeClass('active').prev('.testimonials').addClass('active').fadeIn();
                checkSliders();

            });
        }


    });

    // =================================== Start add new text ==============================================

    var add = $('#add');


    add.click(function () {
        $(this).replaceWith("<div class='container-service'><span class='added text-danger'>You have added an additional driver</span> <button onClick='remove()' class='btn remove remove_service'><i class='fas fa-trash pr-2'></i>Remove</button></div>");
    });





    // =================================== End add new text ===========================================

    // =================================== Start payment method page ===========================================

    var checked = $("#checked");
    var btnContinue = $("#btnContinue");
    checked.click(function () {
        btnContinue.removeClass("disabled");
    })
    // =================================== End payment method page ===========================================

    // =================================== Start payment  page ===========================================
    var selectPay = $(".mada");

    var selectPay2 = $(".visa");

    var selectPay3 = $(".apple-pay");

    var demo = $("#demo");

    if (selectPay.click(function () {
        selectPay.addClass("selected");
        selectPay2.removeClass("selected");
        selectPay3.removeClass("selected");
        demo.css({ 'display': 'block' });

    }));


    if (selectPay2.click(function () {
        selectPay2.addClass("selected");
        selectPay.removeClass("selected");
        selectPay3.removeClass("selected");
        demo.css({ 'display': 'block' });

    }));

    if (selectPay3.click(function () {
        selectPay3.addClass("selected");
        selectPay.removeClass("selected");
        selectPay2.removeClass("selected");
        demo.css({ 'display': 'none' });

    }));
    // =================================== End payment  page ===========================================



    $('#send').click(function () {
        $.alert({
            type: 'green',
            icon: 'fas fa-check-circle',
            title: 'Thank You',
            typeAnimated: true,
            content: 'Request has been sent, we will contact you as soon as possible',
            buttons: false,
            backgroundDismiss: true,
        });
    });

});
