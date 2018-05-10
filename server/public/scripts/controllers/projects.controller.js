TimeTrackerApp.controller('ProjectController', ['ProjectService', function (ProjectService) {
    console.log ('ProjectController is loaded');
    const self = this;
    self.message = "VC binding";
    self.MCV = ProjectService.message;
    // self.entries = ProjectService.projects;
    // self.newProject = ProjectService.newProject;
}]);