function solution(numbers, target) {
    var answer = 0;
    
    recur(0, 0);
    function recur(count, sum) {
        if (count === numbers.length) {
            if (sum === target) {
                answer++;
            }
            return;
        }
        recur(count+1, sum-numbers[count]);
        recur(count+1, sum+numbers[count]);
    } 
    return answer;
}

// DFS와 BFS 솔직히 잘 모르겟다 이건 나중에 한번 다시보자.
