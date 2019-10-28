//将jedate + tinymce得初始化代码存到外接js文件中

//入口函数
$(function () {
    jeDate("#testico", {
        theme: { bgcolor: "#f12066", color: "#ffffff", pnColor: "#00CCFF" },
        trigger: "click",
        format: "YYYY-MM-DD",
        isinitVal: true,
    });

    tinymce.init({
        selector: '#mytextarea',
        language: 'zh_CN',
        directionality: 'ltl',
        browser_spellcheck: true,
        contextmenu: false,
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table contextmenu paste imagetools wordcount",
            "code"
        ],
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code",
    });
});