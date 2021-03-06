const $w = $(window);
const $header = $('.header');
const $headerButton = $('.header-button');
const $html$body = $('html, body');

function toggleOverflow() {
    return $html$body.toggleClass('owf-hidden', !$html$body.hasClass('owf-hidden'));
}

$w.on('load', function () {
    (function headerScroll() {
        $w.on('scroll', function () {
            let scroll = getCurrentScroll();
            $header.toggleClass('shrink', scroll >= 1)
        });

        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    })();

    (function toggleMenu() {
        $headerButton.on('click', function () {
            $header.toggleClass('menu-active', !$header.hasClass('menu-active'));
            toggleOverflow();
        });

        $('.menu-close').on('click', function () {
            return $headerButton.trigger('click');
        });
    })();

    (function maskedInput() {
        $('.main-input').mask("+ 38 (999) 999 99 99");
        $('.contacts-form input:nth-child(2)').mask("+38(999) 999 99 99");
    })();

    (function modal() {
        $('#openSiteModal').on('click', function () {
            $('#siteModal').addClass('active');
            toggleOverflow();
        });

        $('#openSystemModal').on('click', function () {
            $('#systemModal').addClass('active');
            toggleOverflow();
        });

        $('.modal-close').on('click', function () {
            $(this).closest('.modal').removeClass('active');
            toggleOverflow();
        });
    })();

    (function slider() {
        $('.projects-slider').slick({
            dots: false,
            infinite: false,
            arrows: true,
            prevArrow: $('.projects-arrows-left, .projects-chev-left'),
            nextArrow: $('.projects-arrows-right, .projects-chev-right')
        })
    })();

    (function anchorScrolling() {
        $("*[data-href]").on("click", function (e) {
            e.preventDefault();
            const id = $(this).attr('data-href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top - $header.height() + 1
            }, 1500);
            $header.hasClass('menu-active') && $headerButton.trigger('click')
        });
    })()


    $w.trigger('scroll');
});