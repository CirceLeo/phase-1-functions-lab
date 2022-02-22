function distanceFromHqInBlocks (location){
    let HQ = 42;
    if (location <= HQ) {
        return HQ - location;
    } else {
        return location - HQ;
    }
}

function distanceFromHqInFeet (location){
    return distanceFromHqInBlocks(location)*264;
}

function distanceTravelledInFeet(start, destination){
    let distance = start - destination;
    distance = Math.abs(distance);
    return distance*264;
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        return 0;
    } else if (distance > 2500){
        return 'cannot travel that far';
    } else if (distance > 2000){
        return 25;
    } else {
        return (distance - 400) * .02;
    }
}