// images

Factory.define("image", images, {
    title: function() {
        return _.sample(["image1", "image2", "image3"]);
    },
    file: function() {
        return {};
    },
    originalImageUrl: function() {
        return _.sample(["https://designerdoginfo.files.wordpress.com/2012/10/puppy-on-the-painted-floor-boards.jpg", "https://my.vetmatrixbase.com/clients/12679/images/Gorgeous_puppies.jpg"]);
    },
    tag: function() {
        return _.sample(["hello1", "hello2", "hello3"], 2);
    },
    alt: function() {
        return _.sample(["hello1", "hello2", "hello3"]);
    },
    extra: function() {
        return {};
    }
});

if (images.find({}).count() === 0) {
    _(5).times(function(n) {
        Factory.create("image");
    });
}