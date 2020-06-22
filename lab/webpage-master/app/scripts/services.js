'use strict';

angular.module('confusionApp')
	.constant("baseURL", "http://localhost:3000/")

.service('menuFactory', ['$resource', 'baseURL', function ($resource, baseURL) {



	this.getDishes = function () {

		//return $http.get(baseURL + "dishes");
		return $resource(baseURL + "dishes/:id", null, {
			'update': {
				method: 'PUT'
			}
		});

	};

	/*this.getDish = function (index) {

		return $http.get(baseURL + "dishes/" + index);
	};*/

	/*this.getPromotion = function (index) {
		return promotions[index];
	};*/

	this.getPromotion = function () {
		return $resource(baseURL + "promotions/:id", null, {
			'update': {
				method: 'PUT'
			}
		});
	};


		}])

.factory('corporateFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

	var corpfac = {};


	corpfac.getLeader = function () {
		//return leadership;
		//return $http.get(baseURL + "dishes");
		return $resource(baseURL + "leadership/:id", null, {
			'update': {
				method: 'PUT'
			}
		});

	};

	/*corpfac.getLeader = function (index) {
		return leadership[index];
	};*/
	return corpfac;


	// Implement two functions, one named getLeaders,
	// the other named getLeader(index)
	// Remember this is a factory not a service


}])

.factory('feedbackFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
	var feedFact = {};
	feedFact.saveFeed = function () {
		return $resource(baseURL + "feedback/:id", null, {
			'save': {
				method: 'POST'
			}
		});
	}
	return feedFact;

}]);
