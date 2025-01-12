let dependencies = {};

export const addDependency = (cell, dependentCell) => {
  if (!dependencies[cell]) {
    dependencies[cell] = [];
  }
  dependencies[cell].push(dependentCell);
};

export const updateDependencies = (cell, data) => {
  if (dependencies[cell]) {
    dependencies[cell].forEach(dependentCell => {
      const [row, col] = dependentCell.split(',');
      data[row][col] = evaluateFormula(data[row][col], data);
      updateDependencies(dependentCell, data);
    });
  }
};