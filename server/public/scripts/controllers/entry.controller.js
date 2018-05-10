TimeTrackerApp.controller('EntryController', ['EntryService', function (EntryService) {
    console.log ('EntryController is loaded');
    const self = this;
    self.message = "VC binding";
    self.MCV = EntryService.message;
}]);