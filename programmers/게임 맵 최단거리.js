function solution(maps) {
    let answer = 0;
    const row = maps.length;
    const column = maps[0].length;
    // 동서남북
    const mapsWayEW = [-1, 1, 0, 0];
    const mapsWaySN = [0, 0, 1, -1];
    const check = [...maps].map((r)=>r.map((c)=>1));
    
    const queue = [[0, 0]];
    while (queue.length){
        const [x, y] = queue.shift();
        for (let i = 0; i < 4; i++) {
            const dx = x + mapsWaySN[i];
            const dy = y + mapsWayEW[i];
            if (dx >= 0 && dy >= 0 && dx < row && dy < column) {
                if (maps[dx][dy] === 1 && check[dx][dy] === 1) {
                    check[dx][dy] = check[x][y] + 1;
                    queue.push([dx, dy]);
                }
            }
        }
    }
    answer = (check[row - 1][column - 1] === 1 ? -1 : check[row - 1][column - 1]);
    return answer;
}

// DFS(미로찾기에 유용) & BFS (최단거리 탐색에 유용) 
