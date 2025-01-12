export const evaluateFormula = (formula, data) => {
  if (formula.startsWith("=SUM")) {
    const range = formula.match(/\((.*?)\)/)[1];
    const [start, end] = range.split(":");
    const [startRow, startCol] = start.match(/\d+/g).map(Number);
    const [endRow, endCol] = end.match(/\d+/g).map(Number);
    let sum = 0;
    for (let row = startRow - 1; row <= endRow - 1; row++) {
      for (let col = startCol - 1; col <= endCol - 1; col++) {
        sum += parseFloat(data[row][col]) || 0;
      }
    }
    return sum;
  }

  if (formula.startsWith("=AVERAGE")) {
    const range = formula.match(/\((.*?)\)/)[1];
    const [start, end] = range.split(":");
    const [startRow, startCol] = start.match(/\d+/g).map(Number);
    const [endRow, endCol] = end.match(/\d+/g).map(Number);
    let sum = 0;
    let count = 0;
    for (let row = startRow - 1; row <= endRow - 1; row++) {
      for (let col = startCol - 1; col <= endCol - 1; col++) {
        sum += parseFloat(data[row][col]) || 0;
        count++;
      }
    }
    return count > 0 ? sum / count : 0;
  }

  if (formula.startsWith("=MAX")) {
    const range = formula.match(/\((.*?)\)/)[1];
    const [start, end] = range.split(":");
    const [startRow, startCol] = start.match(/\d+/g).map(Number);
    const [endRow, endCol] = end.match(/\d+/g).map(Number);
    let max = -Infinity;
    for (let row = startRow - 1; row <= endRow - 1; row++) {
      for (let col = startCol - 1; col <= endCol - 1; col++) {
        const value = parseFloat(data[row][col]);
        if (!isNaN(value) && value > max) max = value;
      }
    }
    return max !== -Infinity ? max : 0;
  }

  if (formula.startsWith("=MIN")) {
    const range = formula.match(/\((.*?)\)/)[1];
    const [start, end] = range.split(":");
    const [startRow, startCol] = start.match(/\d+/g).map(Number);
    const [endRow, endCol] = end.match(/\d+/g).map(Number);
    let min = Infinity;
    for (let row = startRow - 1; row <= endRow - 1; row++) {
      for (let col = startCol - 1; col <= endCol - 1; col++) {
        const value = parseFloat(data[row][col]);
        if (!isNaN(value) && value < min) min = value;
      }
    }
    return min !== Infinity ? min : 0;
  }

  if (formula.startsWith("=COUNT")) {
    const range = formula.match(/\((.*?)\)/)[1];
    const [start, end] = range.split(":");
    const [startRow, startCol] = start.match(/\d+/g).map(Number);
    const [endRow, endCol] = end.match(/\d+/g).map(Number);
    let count = 0;
    for (let row = startRow - 1; row <= endRow - 1; row++) {
      for (let col = startCol - 1; col <= endCol - 1; col++) {
        if (!isNaN(parseFloat(data[row][col]))) count++;
      }
    }
    return count;
  }

  return formula;
};
