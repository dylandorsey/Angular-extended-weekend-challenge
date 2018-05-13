TimeTrackerApp.service('ProjectService', ['$http', function ($http) {
    console.log('ProjectService is loaded');
    var self = this;

    self.message = 'Hi, I be the project service';
    self.projects = {
        projectsArray: []
    };

    self.new = {
        name: ''
    }

    // DELETE project
    self.deleteProject = function (project) {
        console.log('init deleteProject function');
        $http({
            method: 'DELETE',
            url: `/project/${project.id}`
        })
            .then(function (response) {
                console.log(response);
                self.getProjects();
            })
            .catch(function (error) {
                console.log('error on /project DELETE', error);
            })
    }// end DELETE project

    // GET projects
    self.getProjects = function () {
        console.log('init getProjects function')
        $http({
            method: 'GET',
            url: '/project'
        })
            .then(function (response) {
                self.projects.projectsArray = response.data;
                console.log(self.projects.projectsArray);
            })
            .catch(function (error) {
                console.log('error on /project GET', error)
            })
    }// end GET project

    // POST project
    self.newProject = function (newProject) {
        console.log(newProject);
        $http({
            method: 'POST',
            url: '/project',
            data: newProject
        })
            .then(function (response) {
                console.log(response);
                //update the DOM
                self.clearInputs();
                self.getProjects();
                //end update the DOM
            })
            .catch(function (error) {
                console.log('error on /Project POST', error);
            });
    }// end POST project

    // PUT project
    self.updateProject = function (project) {
        console.log('init updateProject function', project);
        $http({
            method: 'PUT',
            url: '/project',
            data: project
        })
            .then(function (response) {
                console.log(response);
                //update the DOM
                self.getProjects();
                //end update the DOM
            })
            .catch(function (error) {
                console.log('error on /project PUT', error);
            });
    }
    // end PUT project

    // clear new project input field
    self.clearInputs = function () {
        self.new.name = '';
    }

    // display projects on page load     
    self.getProjects();

}]);