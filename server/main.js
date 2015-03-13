if (Meteor.isServer) {


    // 미티어 서버가 처음 시작될때 실행되는 코드입니다.
    Meteor.startup(function () {


        // 클라이언트에서 호출 가능한 server-side 함수들을 정의합니다.
        Meteor.methods({

            // 사용자가 문구를 넣으면 형태소를 분석하여 알맞은 이미지셋을 images 컬렉션에 담아 publish 해줍니다.
            searchImageByText: function (text) {


                // text를 형태소 분석하여 중요 단어를 추출합니다.

                // 서버에 저장된 images 컬렉션에서 tag 중 알맞은 image를 찾아냅니다.

                // 해당 이미지들을 중요도에 따라 images 컬렉션에 담아 publish 합니다.

            },

            // 사용자가 최종 작업물을 서버에 게시합니다.
            saveWorkingOutputs: function () {

            }




        });

    })
}
