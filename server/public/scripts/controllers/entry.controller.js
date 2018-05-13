TimeTrackerApp.controller('EntryController', ['EntryService', 'ProjectService', function (EntryService, ProjectService) {
    console.log ('EntryController is loaded');
    const self = this;
    self.message = ProjectService.message;
    self.entries = EntryService.entries;
    self.newEntry = EntryService.newEntry;
    self.deleteEntry = EntryService.deleteEntry;
    self.projects = ProjectService.projects;
    self.getEntries = EntryService.getEntries;
    self.getEntries('');
}]);