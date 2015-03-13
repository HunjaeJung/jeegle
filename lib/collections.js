/****************************************************************************
* 이미지 메타 데이터 컬렉션
* file 프로퍼티에 직접 바이너리로 저장하거나, originalImageUrl 부분에 외부 주소로 저장합니다.
****************************************************************************/
images = new Mongo.Collection('images');

images.attachSchema(new SimpleSchema({

    title: {
        type: String,
        label: "title of the image",
        optional: true
    },
    file: {
        type: Object,
        label: "id of the 'imageFiles' document (ObjectId)",
        optional: true
    },
    originalImageUrl: {
        type: String,
        label: "original url of the image before being downloaded",
        min: 0
    },
    tag: {
        type: [String],
        label: "an array of tags that are relevant to the image",
        minCount: 1
    },
    alt: {
        type: String,
        label: "an alt attribute of the image element",
        optional: true
    },
    extra: {
        type: Object,
        label: "an extra space for future extension",
        optional: true
    }
}));

/****************************************************************************
* 이미지 파일 컬렉션, 메타 데이터 도큐멘트에 File 부분
* 이미지를 CollectionFS를 이용하여 MongoDB에 바이너리로 저장합니다.
****************************************************************************/
var imageFilesStore = new FS.Store.GridFS('imageFiles', {

    // GridFS 옵션 부분. https://github.com/CollectionFS/Meteor-CollectionFS/tree/devel/packages/gridfs 참조할 것.
});


imageFiles = new FS.Collection('imageFiles', {

    stores: [imageFilesStore]
    // filter: // 저장시 image transform이 필요하면 여기에서 처리하면 됩니다. https://github.com/CollectionFS/Meteor-CollectionFS 참조.
});


/****************************************************************************
* 사용자 개별 작업물 컬렉션
****************************************************************************/
outputs = new Mongo.Collection('outputs');

outputs.attachSchema(new SimpleSchema({


}));
