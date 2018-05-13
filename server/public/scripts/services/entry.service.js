TimeTrackerApp.service('EntryService', ['$http', function ($http) {
    console.log('EntryService is loaded');
    var self = this;

    self.entries = {
        entriesArray: [],
    };

    // DELETE entry
    self.deleteEntry = function (entry) {
        console.log('init deleteEntry function');
        $http({
            method: 'DELETE',
            url: `/entry/${entry.id}`
        })
            .then(function (response) {
                console.log(response);
                self.getEntries('');
            })
            .catch(function (error) {
                console.log('error on /entry DELETE', error);
            })
    }
    // end DELETE entry

    // GET entries
    self.getEntries = function (sort) {
        console.log('init getEntries function')
        console.log(sort);
        $http({
            method: 'GET',
            url: `/entry/${sort}`
        })
            .then(function (response) {
                self.entries.entriesArray = response.data;
                console.log(self.entries.entriesArray);
            })
            .catch(function (error) {
                console.log('error on /entry GET', error)
            })
    }// end GET new entry

    // POST new entry
    self.newEntry = function (newEntry) {
        console.log(newEntry);
        // use time input to determine duration in hours
        newEntry.hours = (newEntry.endTime - newEntry.startTime) / (1000 * 60 * 60);
        // convert duration to quarter hours
        newEntry.quarterHours = newEntry.hours * 4
        // round duration to the nearest quarter hour
        newEntry.quarterHours = Math.ceil(newEntry.quarterHours);
        // convert quarter hours to hours and assign to billingHours key
        newEntry.billingHours = (newEntry.quarterHours) / 4;
        console.log(newEntry.billingHours);
        $http({
            method: 'POST',
            url: '/entry',
            data: newEntry
        })
            .then(function (response) {
                console.log(response);
                //update the DOM
                self.getEntries('');
                //end update the DOM
            })
            .catch(function (error) {
                console.log('error on /entry POST', error);
            });
    }// end POST new entry

    // PUT entry
    self.updateEntry = function (entry) {
        console.log('init updateEntry function', entry);
        $http({
            method: 'PUT',
            url: '/entry',
            data: entry
        })
        .then(function (response) {
            console.log(response);
            //update the DOM
            self.getEntries('');
            //end update the DOM
        })
        .catch(function (error) {
            console.log('error on /entry PUT', error);
        });
    }
    // end PUT entry





    // display entries on page load
    self.getEntries('');

}]);