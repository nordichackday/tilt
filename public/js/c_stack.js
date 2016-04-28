angular
    .module('card-stack-demo', ['gajus.swing'])
    .controller('card-stack-playground', function ($scope) {
        $scope.cards = [
            {name: 'clubs', symbol: '♣'},
            {name: 'diamonds', symbol: '♦'},
            {name: 'hearts', symbol: '♥'},
            {name: 'spades', symbol: '♠'}
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

