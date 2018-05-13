TimeTrackerApp.controller('EntryController', ['EntryService', 'ProjectService', function (EntryService, ProjectService) {
    console.log ('EntryController is loaded');
    const self = this;
    
    // objects
    self.message = ProjectService.message;
    self.entries = EntryService.entries;

    // methods
    self.deleteEntry = EntryService.deleteEntry;
    self.getEntries = EntryService.getEntries;
    self.newEntry = EntryService.newEntry;
    self.projects = ProjectService.projects;
    self.updateEntry = EntryService.updateEntry;

    // run methods on page load
    self.getEntries('');
}]);