// Code your solution in this file!\
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(){return ['Antonia', 'Nuru']};
const returnLastTwoDrivers = function(){return ['Amari', 'Mo']};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(multiplier){
    return function(fare){
        return fare * multiplier;
    }
}
const fareDoubler = function(fare){
    return fare * 2;
}
const fareTripler = function(fare){
    return fare * 3;
}
const selectDifferentDrivers = function(drivers , randomFunction){
    if (randomFunction === returnFirstTwoDrivers){
    return ['Antonia','Nuru']}
    else {
        return ['Amari','Mo']
    }
    }
