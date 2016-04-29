var userID = "57222856c80eb66928eacb1a";


angular
	.module('card-stack-demo', ['gajus.swing'])

	.controller('card-stack-playground', function ($scope, $http) {

		var _scope = this;

		$scope.cards = [];
		var usedArticles = [],
			posArticles = [],
			limit = 5,
			dir = 0,prev = 0,
			url;
			
		$scope.getNext = function(){
			
			if (usedArticles.length > 50) {
				usedArticles = usedArticles.splice(posArticles.length-50,50);
			}
			if (posArticles.length > 5) {
				posArticles = posArticles.splice(posArticles.length-5,5);
			}
			url = "/articles?limit=" + limit + "&id_pos=" + posArticles.toString() + "&id_prev=" + usedArticles.toString();
			$http.get(url)
				.then(function(response) {
					for (var i in response.data) {
						response.data[i].style = "style_" + Math.floor((Math.random()*4)+1);
						usedArticles.push(response.data[i]._id);
						$scope.cards.push(response.data[i]);
					}
				});            
		}

		$scope.throwout = function (eventName, eventObject) {
			dir = 0,prev = 0;
			$scope.mood = "neutral";
			$scope.$apply();
			this.remove();
		};
		$scope.throwin = function (eventName, eventObject) {
			dir = 0,prev = 0;
			$scope.mood = "neutral";
			$scope.$apply();

		};        

		$scope.throwoutright = function (eventName, eventObject) {
			posArticles.push(eventObject.target.attributes["ng-id"].value)
		};

		$scope.dragmove = function (eventName, eventObject) {
			dir = eventObject.throwDirection;
			if (dir !== prev) {
				if (dir === -1) {
					$scope.mood = "dislike";
					$scope.$apply();
				}
				if (dir === 1) {
					$scope.mood = "like";
					$scope.$apply();
				}
			}
			prev = dir;
		};

		$scope.remove = function () {
			$scope.cards = $scope.cards.splice(0, $scope.cards.length-1);
			$scope.$apply();
		
			if ($scope.cards.length === 0 ) {
			   this.getNext();
			} 
		}
		
		$scope.getNext();

	});

