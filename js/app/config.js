var application = angular.module('application', ['ngRoute', 'ngSanitize']);

application.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {

  var dataService = ObjectManager.getInstance().getSingleton(DataService);
  dataService.init();

  $routeProvider
    .when('/', {
      templateUrl: 'views/index.html',
      controller: 'IndexController'
    })
    .when('/cover-letter', {
      templateUrl: 'views/cover-letter.html',
      controller: 'ApplicationController'
    })
    .when('/curriculum-vitae', {
      templateUrl: 'views/curriculum-vitae.html',
      controller: 'CurriculumController'
    })
    .when('/skill-page', {
      templateUrl: 'views/skill-page.html',
      controller: 'SkillPageController'
    })
    .otherwise('/');

    $locationProvider.html5Mode(true);
}]);
