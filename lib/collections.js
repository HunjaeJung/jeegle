/****************************************************************************
* 사용자 개별 작업물 컬렉션
* 사용자들이 만든 작업물 슬라이드(slide)들의 묶음입니다.
****************************************************************************/
workingOutputs = new Mongo.Collection('workingOutputs');

workingOutputs.attachSchema(new SimpleSchema({

    user: {
        type: Object,
        label: "the owner id of this work. OPTIONAL!!",
        optional: true
    },

    slides: {

        type: [Object],
        label: "detail slides",
        minCount: 1
    }
}));

/****************************************************************************
* 각 슬라이드 컬렉션
* 실제 슬라이드별 작업물을 담고 있습니다. 어떤 배경이미지에 어떤 문구를 사용했는지,
* 위치는 어디이고 폰트 사이즈는 얼마인지 같은 세부 값이 들어있습니다.
****************************************************************************/
slide = new Mongo.Collection('slide');

slide.attachSchema(new SimpleSchema({


}));
