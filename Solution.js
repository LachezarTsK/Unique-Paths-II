
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const SPACE = 0;
    const OBSTACLE = 1;
    const rows = obstacleGrid.length;
    const columns = obstacleGrid[0].length;

    if (obstacleGrid[0][0] === OBSTACLE || obstacleGrid[rows - 1][columns - 1] === OBSTACLE) {
        return 0;
    }

    const numberOfUniquePaths = Array.from(new Array(rows), () => new Array(columns).fill(0));
    for (let r = 0; r < rows && (obstacleGrid[r][0] === SPACE); ++r) {
        numberOfUniquePaths[r][0] = 1;
    }
    for (let c = 0; c < columns && (obstacleGrid[0][c] === SPACE); ++c) {
        numberOfUniquePaths[0][c] = 1;
    }

    for (let r = 1; r < rows; ++r) {
        for (let c = 1; c < columns; ++c) {
            if (obstacleGrid[r][c] === SPACE) {
                numberOfUniquePaths[r][c] = numberOfUniquePaths[r - 1][c] + numberOfUniquePaths[r][c - 1];
            }
        }
    }
    return numberOfUniquePaths[rows - 1][columns - 1];
};
