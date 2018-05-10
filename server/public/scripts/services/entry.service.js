TimeTrackerApp.service('EntryService', ['$http', function ($http) {
    console.log('EntryService is loaded');
    var self = this;

    self.message = "entry MCV";

    self.entries = {
        entriesArray: []
    };

    // POST new entry
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
                self.getEntries();
                //end update the DOM
            })
            .catch(function (error) {
                console.log('error on /entry POST', error);
            });
    }// end POST new entry

    // GET entries
    self.getEntries = function () {
        console.log('init getEntries function')
        $http ({
            method: 'GET',
            url: '/entry'
        })
        .then(function (response) {
            self.entries.entriesArray = response.data;
            console.log(self.entries.entriesArray);
        })
        .catch (function (error) {
            console.log('error on /entry GET', error)
        })
    }// end GET new entry

    // display entries on page load
    self.getEntries();

}]);