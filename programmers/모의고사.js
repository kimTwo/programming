function solution(answers) {
    var answer = [];
    var check = [];
    const player1 = [1, 2, 3, 4, 5];
    const player2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const player3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let player1_cnt = 0;
    let player2_cnt = 0;
    let player3_cnt = 0;
    
    // answer이랑 수포자들 답 비교
    for (let i = 0; i < answers.length; i++){
        if (i > player1.length)break;
        if (answers[i] == player1[i])player1_cnt++;    
    }
    for (let i = 0; i < answers.length; i++){
        if (i > player2.length)break;
        if (answers[i] == player2[i])player2_cnt++;    
    }
    for (let i = 0; i < answers.length; i++){
        if (i > player3.length)break;
        if (answers[i] == player3[i])player3_cnt++;    
    }
    // return값 주입
    if (player1_cnt > 0){
        check.push(player1_cnt);
    }else if (player1_cnt = 0){
        check.push(0);
    }
    if (player2_cnt > 0){
        check.push(player2_cnt);
    }else if (player2_cnt = 0){
        check.push(0);
    }
    if (player3_cnt > 0){
        check.push(player3_cnt);
    }else if (player3_cnt = 0){
        check.push(0);
    }

    
    check.sort((a, b) => a - b);
    console.log(check);

    return answer;
}
// 거의 다온거 같은데 가장 높은 점수를 받은 사람이 여럿일경우, return하는 값을 오름차순 하라는데 내가 짠 식은 return한 값이랑 맞힌개수 값 두개로 나뉘어서 좀 애매한데
// 이거 디게 애매해졋네



function solution(answers) {
    var answer = [];
    var check = [];
    const player1 = [1, 2, 3, 4, 5];
    const player2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const player3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let player1_cnt = 0;
    let player2_cnt = 0;
    let player3_cnt = 0;
    
    // answer이랑 수포자들 답 비교
    for (let i = 0; i < answers.length; i++){
        if (i > player1.length)break;
        if (answers[i] === player1[i])player1_cnt++;    
    }
    for (let i = 0; i < answers.length; i++){
        if (i > player2.length)break;
        if (answers[i] === player2[i])player2_cnt++;    
    }
    for (let i = 0; i < answers.length; i++){
        if (i > player3.length)break;
        if (answers[i] === player3[i])player3_cnt++;    
    }
    // return값 주입
    if (player1_cnt > 0){
        check.push(player1_cnt);
    }else if (player1_cnt = 0){
        check.push(0);
    }
    if (player2_cnt > 0){
        check.push(player2_cnt);
    }else if (player2_cnt = 0){
        check.push(0);
    }
    if (player3_cnt > 0){
        check.push(player3_cnt);
    }else if (player3_cnt = 0){
        check.push(0);
    }

    let maxCount = Math.max(player1_cnt, player2_cnt, player3_cnt);
    console.log(check);
    console.log(maxCount);
    
    for(let i = 0; i < 3; i++){
        if(check[i] === maxCount){
            answer.push(i + 1);
        }
    }
    
    return answer;
}
// 거의 다왔엇음 그런데 이것도 불충분한데?



function solution(answers) {
    var answer = [];
    var check = [0, 0, 0];
    const player1 = [1, 2, 3, 4, 5];
    const player2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const player3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    // answer이랑 수포자들 답 비교
    for (let i = 0; i < answers.length; i++){
        if (answers[i] === player1[i%5])check[0]++;    
    }
    for (let i = 0; i < answers.length; i++){
        if (answers[i] === player2[i%8])check[1]++;    
    }
    for (let i = 0; i < answers.length; i++){
        if (answers[i] === player3[i%10])check[2]++;    
    }
    // 밑줄 덕분에 answers이랑 각 수포자들의 답안이 배열 개수가 맞지않아도
    //실행하는데 있어서 오류가 안남.

    let maxCount = Math.max(check[0], check[1], check[2]);
// 이 자리에 배열 이름이 아니라 각 요소들을 일일이 집어넣어줘야 연산되더라 참고
    
    for(let i = 0; i < 3; i++){
        if(check[i] === maxCount){
            answer.push(i + 1);
        }
    }
    
    return answer;
}
// 완벽 복기 잘합시다.
