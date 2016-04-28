angular
    .module('card-stack-demo', ['gajus.swing'])
    .controller('card-stack-playground', function ($scope) {
        $scope.cards = [
            { headline: "Search warrant issued at musician's home", bodytext: 'A search warrant was obtained in relation to the home of Prince shortly after he died, court documents show.'},
            { headline: "Five strange stories about mysterious musician", bodytext: "Prince, who has died at his home in Minnesota, was known for his cross-genre pop music and multiple reinventions - but it was also the sense of mystery around the man that delighted his fans."},
            { headline: "Prince the stage magician", bodytext: "There is 'no reason to believe' that Prince's death was suicide, the sheriff of the Minnesota county where the singer had his home has said after a post-mortem examination."},

        ];


        $scope.throwout = function (eventName, eventObject) {
           // console.log('DELETE throwout', eventObject);
           console.log("DELETE")
        };

        $scope.throwoutleft = function (eventName, eventObject) {
             console.log("MINUS")
           // console.log('throwoutleft', eventObject);
        };

        $scope.throwoutright = function (eventName, eventObject) {
             console.log("plus")
            console.log('throwoutright', eventObject);
        };
        $scope.dragmove = function (eventName, eventObject) {
            console.log(eventObject.throwDirection )
        };


/*
        $scope.throwin = function (eventName, eventObject) {
            console.log('throwin', eventObject);
        };

        $scope.dragstart = function (eventName, eventObject) {
            console.log('dragstart', eventObject);
        };

        $scope.dragmove = function (eventName, eventObject) {
            console.log('dragmove', eventObject);
        };

        $scope.dragend = function (eventName, eventObject) {
            console.log('dragend', eventObject);
        };
*/
    });

