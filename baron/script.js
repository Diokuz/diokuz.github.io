window.onload = function() {
    window.dima = baron({
        root: '.clipper_1',
        scroller: '.scroller',
        bar: '.scroller__bar',
        barOnCls: 'baron'
    }).fix({
        elements: '.header__title',
        outside: 'header__title_state_fixed',
        before: 'header__title_position_top',
        after: 'header__title_position_bottom',
        clickable: true
    }).pull({
        block: '.load',
        elements: [{
            self: '.load__value',
            property: 'width'
        }],
        limit: 115,
        onExpand: function() {
            $('.load').css('background', 'red');
        }
    });

    baron({
        scroller: '.clipper_2 .scroller',
        bar: '.scroller__bar._v',
        barOnCls: 'baron'
    }).fix({
        elements: '.header__title',
        outside: 'header__title_state_fixed',
        before: 'header__title_position_top',
        after: 'header__title_position_bottom'
    }).baron({
        barOnCls: 'baron_h',
        bar: '.scroller__bar._h'
    });

    var toggle = false;
    $('.toggler').on('click', function() {
        toggle = !toggle;
    });

    var i = 0;
    var scroller2 = $('.clipper_2 .scroller');
    setInterval(function() {
        if (toggle) {
            var height = 140 + Math.sin(i / 10) * 60;
            scroller2.css('height', height);
            $(window).trigger('resize');
            i++;
        }
    }, 50);
};