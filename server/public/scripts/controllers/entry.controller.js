TimeTrackerApp.controller('EntryController', ['EntryService', function (EntryService) {
    console.log ('EntryController is loaded');
    const self = this;
    self.message = "VC binding";
    self.MCV = EntryService.message;
    self.entries = EntryService.entries;
    self.newEntry = EntryService.newEntry;
}]);