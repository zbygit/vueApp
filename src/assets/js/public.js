
export let setGlobalRem = function () {
    function setRem() {
        var clientWidth = $(window).width();
        var nowRem = (clientWidth / 414 * 10);
        $("html").css("font-size", parseInt(nowRem, 10) + "px");
    };
    setRem();

    var timer;
    $(window).bind("resize", function () {
        clearTimeout(timer)
        timer = setTimeout(function () {
            setRem();
        }, 100)
    })
}



