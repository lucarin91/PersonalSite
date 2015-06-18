'use strict';

/* Services */



var mysiteServices = angular.module('mysiteServices', ['ngResource']);

mysiteServices.value('language','ita')

mysiteServices.factory('MeService',['$resource',
  function($resource){
    return $resource('/api/:language/me',{language:'@lang'}, {
      getMe: {method:'GET', isArray:false},
      postMe: {method:'POST'}
      //putaction: {method:'PUT', isArray:true},
      //deleteaction: {method:'DELETE' isArray:true}
    });
}]);

mysiteServices.factory('ExperienceService',['$resource',
  function($resource){
    return $resource('/api/:language/experience',{language:'@lang'}, {
      getExperience: {method:'GET', isArray:false}
    });
}]);

mysiteServices.factory('EducationService',['$resource',
      function($resource){
        return $resource('/api/:language/education',{language:'@lang'}, {
          getEducation: {method:'GET', isArray:false}
        });
}]);

mysiteServices.factory('ProjectsService',['$resource',
  function($resource){
    return $resource('/api/:language/projects',{language:'@lang'}, {
      getProjects: {method:'GET', isArray:false}
    });
}]);

mysiteServices.factory('SkillsService',['$resource',
  function($resource){
    return $resource('/api/:language/skills',{language:'@lang'}, {
      getSkills: {method:'GET', isArray:false}
    });
}]);

// Demonstrate how to register services
// In this case it is a simple value service.
/*angular.module('Services',[])
.factory('JsonLoader',['$http',
  function($http){
    return {
      get: function(path){
        return $http({
          method: 'GET',
          url: path
        });
      }
    }
}]);
*/
