function typedEffect() {
    console.log("typeEffect");
    // Hero typed
    if ($('.typed').length > 0) {
        console.log("do TypeEffect 2");
        var typed_strings = $(".typed").data('typed-items');
        typed_strings = typed_strings.split(',');
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }
}