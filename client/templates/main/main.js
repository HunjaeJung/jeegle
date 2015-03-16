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
            },
            preventClick: false
        });

        resizeMainImage();
    });

    function resizeMainImage() {
        $("#main-image").height($(window).height() - $("#image-gallery").height());
        $("#main-image").height(500);
        $("#main-image").width($(window).width());
    }

    $('#input_text').focus();

    $(window).resize(function() {
        resizeMainImage();
    });

    document.onkeypress = function (e) {
        $('#input_text').focus();
    };

    jeegle.init();
}

var jeegle = {
    _cacheElement : {

    },

    init : function() {
        this.addEventListener();
    },

    addEventListener : function() {
        jeegle.actionSelectBgImageItem();
    },

    actionSelectBgImageItem : function() {
        $('#image-gallery').on('click' , 'li', function(e) {
            e.preventDefault();

            var bg = $(this.childNodes[0]).css('background-image');
//            bg = bg.replace('url(','').replace(')','');
//            $("#main-image").css('background-image',  'url(' + bg + ')');
            $("#main-image").css('background-image',  bg);
        });
    }
}
