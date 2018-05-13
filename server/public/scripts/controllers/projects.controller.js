TimeTrackerApp.controller('ProjectController', ['ProjectService', function (ProjectService) {
    console.log ('ProjectController is loaded');
    const self = this;

    // objects
    self.projects = ProjectService.projects;

    // methods
    self.newProject = ProjectService.newProject;
    self.deleteProject = ProjectService.deleteProject;
    self.getProjects = ProjectService.getProjects;

    // run methods on page load
    self.getProjects();
}]);