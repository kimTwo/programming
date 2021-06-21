function solution(n, lost, reserve) {
    var answer = 0;
    let check = n - lost.length;
    let lostZeroCount = 0;
    lost.sort();
    reserve.sort();			// 왜 오름차순 정렬을 해야 테스트케이스 3,4가 					통과되냐 ㄷㄷ;
//    let newLost = lost;
//    let newReserve = reserve;
// n >= 2 && n <= 30
// lost >=1 && lost <= n;
// reserve >=1 && reserve <= n;

 
   for(let k = 0; k < lost.length; k++) {
        for(let m = 0; m < reserve.length; m++) {
            if (lost[k] === reserve[m]){
                lost.splice(k, 1);
                reserve.splice(m, 1);
                check += 1;
                k--;
                m--;
            }
        }
    }    
// 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려 줄 수 있다.
    for(let i = 0; i < lost.length; i++) {
        for(let j = 0; j < reserve.length; j++) {
            if(lost[i] === reserve[j] - 1 || lost[i] === reserve[j] + 1){
                lost.splice(i, 1, 0);
                reserve.splice(j, 1, 0);
            }
        }
    }
    for(let a = 0; a < lost.length; a++){
        if(lost[a] === 0)lostZeroCount++;
    }
    answer = check + lostZeroCount;
    
    return answer;
}

// splice할 때, splice한 값을 다른 배열에 넣으면 splice해서 자르고 남은 값이 들어가는게 아니라, splice해서 자른 부분의 값이 들어감 주의하자.
// slice와 splice의 차이를 정확히 알 것.
