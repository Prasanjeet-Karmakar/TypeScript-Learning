var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice["MIDDLE"] = "middle";
    SeatChoice[SeatChoice["WINDOW"] = 0] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 1] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
// Middle and window values are automatically implemented.
// Default type of enum values is always number but can be explicitly changed.
// When string or other types are initialized, we have to declare the rest too.
var ckSeat = SeatChoice.AISLE;
