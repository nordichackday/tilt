var userID = "57222856c80eb66928eacb1a";


angular
    .module('card-stack-demo', ['gajus.swing'])
    .controller('card-stack-playground', function ($scope, $http) {
        $scope.cards = [];

            
        $scope.getNext = function(){
            var limit = 5;
            
            $http.get("/articles?limit=4")
                .then(function(response) {
                    for (var i in response.data) {
                        $scope.cards.push(response.data[i]);
                    }
                   
                });            
        }

        $scope.throwout = function (eventName, eventObject) {
            this.remove();
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

        $scope.remove = function () {
            $scope.cards = $scope.cards.splice(0, $scope.cards.length-1);
            $scope.$apply();
            
            if ($scope.cards.length === 0 ) {
               this.getNext();
            } 
        }
        


        $scope.getNext();

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

