const $w = $(window);
$w.on('load', function () {
    (function googleAnalytics() {
        window.ga = window.ga || function () {
            (ga.q = ga.q || []).push(arguments)
        };
        ga.l = +new Date;

        $("*[data-ga]").on("click", function () {
            let $this = $(this);
            ga('send', 'event', {
                eventCategory: $this.attr("data-ga"),
                eventAction: "click"
            });
        });
    })();

    (function kibana() {
        $("*[data-kibana_message]").on("click", function () {
            let $this = $(this);
            var dataJSON = {
                user_id: $('[data-user-id]').data('user-id') || 'anonim',
                item_id: "t&bMax",
                message: $this.attr("data-kibana_message"),
                geo: $('html').data('geo'),
                url: window.location.href,
                rnd: Math.random()
            };

            var log_json = {
                text: 'LANDING_STAT',
                data: JSON.stringify(dataJSON)
            };

            $.post("https://log.cnt.re/log/site_message", log_json);
        });
    })();
});