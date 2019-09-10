/**
 * Created by window on 2019/1/25.
 */
function layer_msg(content) {
    if (content == "") {
        content = "请刷新重试"
    }
    layer.open({
        content: content
        , skin: 'msg'
        , time: 20 //2秒后自动关闭
    });
}
function load_header() {
    $('body').append('<div class="zyw-header"></div>');
    $('.zyw-header').load('./global/head.html')
}

// 头部点击下拉
function down() {
    var i = 1
    $("body").on("click", ".btn", function () {
        // console.log(666)
        if (i % 2 == 1) {
            $('.nav').animate({
                'height': '250px'
            })
            i++
        } else {
            $('.nav').animate({
                'height': '0px'
            })
            i++
        }
    })

    /* $('.btn').click(function () {
        
     })*/
}
down();
