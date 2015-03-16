Template.main.rendered = function() {
    $(function() {
        $('#image-gallery').gridrotator({
            rows: 2,
            columns: 10,
            maxStep: 2,
            interval: 2000,
            w1024: {
                rows: 2,
                columns: 10
            },
            w768: {
                rows: 2,
                columns: 8
            },
            w480: {
                rows: 3,
                columns: 4
            },
            w320: {
                rows: 2,
                columns: 4
            },
            w240: {
                rows: 2,
                columns: 4
            }
        });
    });

    resizeMainImage();

    $(window).resize(function() {
        resizeMainImage();
    });

    function resizeMainImage() {
        console.log($(window).height(), $(window).width(), $("#image-gallery").height());
        $("#main-image").height($(window).height() - $("#image-gallery").height());
        $("#main-image").width($(window).width());
    }
}

Template.main.events = {
    "keyup #input_text": function(evt, template){
        console.log(evt.currentTarget.value);
        console.log(evt.which);
        if(evt.which==13){
            //input value를 python으로 보내고, 문장 중 명사를 return 받습니다.

        }
    }
}