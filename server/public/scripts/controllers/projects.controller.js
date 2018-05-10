TimeTrackerApp.controller('ProjectController', ['ProjectService', function (ProjectService) {
    console.log ('ProjectController is loaded');
    const self = this;
    self.projects = ProjectService.projects;
    self.newProject = ProjectService.newProject;
    self.deleteProject = ProjectService.deleteProject;
    self.getProjects = ProjectService.getProjects;
    self.getProjects();
}]);