window.onload = function() {
    window.dima = baron({
        root: '.clipper',
        scroller: '.scroller',
        bar: '.scroller__bar',
        barOnCls: 'baron',
        scrollingCls: '_scrolling',
        draggingCls: '_dragging'
    }).fix({
        elements: '.header__title',
        outside: 'header__title_state_fixed',
        before: 'header__title_position_top',
        after: 'header__title_position_bottom',
        clickable: true
    }).controls({
        // Element to be used as interactive track. Note: it could be different from 'track' param of baron.
        track: '.scroller__track',

        // Element to be used as 'down' / 'right' button
        forward: '.scroller__up',

        // Element to be used as 'up' / 'left' button
        backward: '.scroller__down',

        delta: 30
    });
};