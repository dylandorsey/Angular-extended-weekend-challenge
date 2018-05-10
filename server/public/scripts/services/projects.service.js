TimeTrackerApp.service('ProjectService', ['$http', function ($http) {
    console.log('ProjectService is loaded');
    var self = this;

    self.projects = {
        projectsArray: []
    };
    
    // GET projects
    self.getProjects = function () {
        console.log('init getProjects function')
        $http ({
            method: 'GET',
            url: '/project'
        })
        .then(function (response) {
            self.projects.projectsArray = response.data;
            console.log(self.projects.projectsArray);
        })
        .catch (function (error) {
            console.log('error on /project GET', error)
        })
    }// end GET project

    // display projects on page load
    self.getProjects();

}]);