//Contact list
//Using two functions on contact objects

var friends = {}

friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number : 3215232342,
    address : ["452 Microsoft Lane", "Seatle", "WA", "94204"]
};

friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number : 4218459232,
    address: ["133 Infinite Loop", "Cupertino", "CA", "02323"]
};

var list = function(friends){
    for (var i in friends){
        console.log(i);    
    }    
}

var search = function(name){
    for (var i in friends){
        if (name === friends[i].firstName){
            console.log(friends[i]);
            return friends[i];
        }    
    }
}

