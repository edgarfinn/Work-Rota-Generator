export default (dayID) => {
    const rotaIndices = {};
    // set week index according to day index
    // (1 - 5 = week one) (6 - 10 = week two)
    rotaIndices.weekIndex = dayID < 6 ? 0 : 1;

    // set day index according to dayId
    rotaIndices.dayIndex = (dayID) => {
      switch(dayID) {
        case 1: return 0
        case 2: return 1
        case 3: return 2
        case 4: return 3
        case 5: return 4
        case 6: return 0
        case 7: return 1
        case 8: return 2
        case 9: return 3
        case 10: return 4
        default: undefined
      }
    }
    return rotaIndices;
  }
