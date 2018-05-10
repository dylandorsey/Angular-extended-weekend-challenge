TimeTrackerApp.service('EntryService', ['$http', function ($http) {
    console.log('EntryService is loaded');
    var self = this;

    self.message = "entry MCV";

    self.newEntry = function (newEntry) {
        console.log(newEntry);
        newEntry.hours = (newEntry.endTime - newEntry.startTime) / (1000 * 60 * 60);
        $http({
            method: 'POST',
            url: '/entry',
            data: newEntry
        })
            .then(function (response) {
                console.log(response);
                //update the DOM
                //end update the DOM
            })
            .catch(function (error) {
                console.log('error on POST new', error);
            });
    }
}]);