Template.index.rendered = function() {
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

    $('#main-page-input').focus();

    $(window).resize(function() {
        resizeMainImage();
    });

    document.onkeypress = function(e) {
        $('#main-page-input').focus();
    };

    jeegle.init();


    // for indexing & easy search

    // var instance = EasySearch.getComponentInstance({
    //     index: 'Images'
    // });

    // instance.on('currentValue', function(val) {

    // });

    // instance.on('searchingDone', function(searchingIsDone) {
    //     console.log("searcingisdone", searchingIsDone);
    // });
};

Template.index.events({
    "keyup #main-page-input": function(event, template) {
        // Session.set("query", event.currentTarget.value);
        // EasySearch.getComponentInstance({
        //     index: 'Images'
        // }).search(event.currentTarget.value);
    }
});

Template.index.helpers({

});

var jeegle = {
    _cacheElement: {

    },

    init: function() {
        this.addEventListener();
    },

    addEventListener: function() {
        jeegle.actionSelectBgImageItem();
    },

    actionSelectBgImageItem: function() {
        $('#image-gallery').on('click', 'li', function(e) {
            e.preventDefault();

            var bg = $(this.childNodes[0]).css('background-image');
            // bg = bg.replace('url(','').replace(')','');
            // $("#main-image").css('background-image',  'url(' + bg + ')');
            $("#main-image").css('background-image', bg);
        });
    }
}