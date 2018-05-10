TimeTrackerApp.service('ProjectService', ['$http', function ($http) {
    console.log('ProjectService is loaded');
    var self = this;

    self.message = "projects MCV";

    self.projects = {
        projectsArray: []
    };

}]);