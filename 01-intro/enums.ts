enum SeatChoice {
  AISLE = "aisle",
  MIDDLE = "middle",
  WINDOW = 0,
  FOURTH,
}
// Middle and window values are automatically implemented.
// Default type of enum values is always number but can be explicitly changed.
// When string or other types are initialized, we have to declare the rest too.

var ckSeat = SeatChoice.AISLE;

export {};
