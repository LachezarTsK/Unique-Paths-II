
public class Solution {

    private static final int SPACE = 0;
    private static final int OBSTACLE = 1;

    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int rows = obstacleGrid.length;
        int columns = obstacleGrid[0].length;
        if (obstacleGrid[0][0] == OBSTACLE || obstacleGrid[rows - 1][columns - 1] == OBSTACLE) {
            return 0;
        }

        int[][] numberOfUniquePaths = new int[rows][columns];
        for (int r = 0; r < rows && (obstacleGrid[r][0] == SPACE); ++r) {
            numberOfUniquePaths[r][0] = 1;
        }
        for (int c = 0; c < columns && (obstacleGrid[0][c] == SPACE); ++c) {
            numberOfUniquePaths[0][c] = 1;
        }

        for (int r = 1; r < rows; ++r) {
            for (int c = 1; c < columns; ++c) {
                if (obstacleGrid[r][c] == SPACE) {
                    numberOfUniquePaths[r][c] = numberOfUniquePaths[r - 1][c] + numberOfUniquePaths[r][c - 1];
                }
            }
        }
        return numberOfUniquePaths[rows - 1][columns - 1];
    }
}
