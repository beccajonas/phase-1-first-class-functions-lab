const returnFirstTwoDrivers = function(drivers) {
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.splice(0,2);
  }

const returnLastTwoDrivers = (drivers) => {
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.splice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
   return function (fare) {
    return fare * integer;
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectDrivers) {
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    if (selectDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers();
    } else if (selectDrivers === returnLastTwoDrivers) {
        return returnLastTwoDrivers();
    } 
}


returnFirstTwoDrivers();
returnLastTwoDrivers();
createFareMultiplier();




