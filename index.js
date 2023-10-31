const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
  }

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
   return function (fare) {
    return fare * integer;
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

// function selectDifferentDrivers(drivers, selectDrivers) {
//     drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
//     if (selectDrivers === returnFirstTwoDrivers) {
//         return returnFirstTwoDrivers();
//     } else if (selectDrivers === returnLastTwoDrivers) {
//         return returnLastTwoDrivers();
//     } 
// }

function selectDifferentDrivers(drivers, selectDrivers) {
    return selectDrivers(drivers);
}

// returnFirstTwoDrivers();
// returnLastTwoDrivers();
// createFareMultiplier();



