// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/images/icon-dengyan.png");
        document.title = '╭(°A°`)╮ 跑哪里去了~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/images/icon-tuzi.png");
        document.title = '(ฅ>ω<*ฅ) 抓到你了~' ;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
