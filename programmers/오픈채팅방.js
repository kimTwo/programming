function solution(record) {
    var answer = [];
    var temp = [];
    console.log(record.length);
    for(let i = 0; i < record.length; i++) {
//        for(let j = 0; j < record[i].length; j++) {}
        temp[i] = record[i].split(" ");   
    }
    
// 여기서 나는 각 행의 [1] : uid에 맞춰서 [2]의 닉네임을 일괄 수정해서 표시하려 했으나 분명 이 방법으로는 표현이 안되는 반례들이 존재했고 다 틀렷음.
    for(let k = 0; k < temp.length; k++) {
        for(let l = 0; l < temp.length; l++) {
            if(temp[k][1] === temp[l][1] && k !== l && temp[k].length > 2 && temp[l].length > 2) {
                temp[k][2] = temp[l][2];
            }if(temp[k][1] === temp[l][1] && k !== l && temp[l].length < 3){
                temp[l].push(temp[k][2]);
            }
        }
    }
 
    // enter, change, leave
    for(let j = 0; j < temp.length; j++) {
        if(temp[j][0] === "Enter") {
            answer[j] = (`${temp[j][2]}님이 들어왔습니다.`); 
        }else if(temp[j][0] === "Leave") {
            if(temp[j].length < 3){
                answer[j] = (`${temp[j][1]}님이 나갔습니다.`)
            }else{
                answer[j] = (`${temp[j][2]}님이 나갔습니다.`)
            }
        }
    }
    
    console.log(temp);
    console.log(temp[0][1]);
    console.log(answer);
    return answer;






function solution(record) {
    var answer = [];
    var temp = [];
    for(let i = 0; i < record.length; i++) {
        temp[i] = record[i].split(" ");   
    }
// 그래서 아예 사전형으로 묶어버림. [1]을 킷값으로 [2]를 vlaue값으로 지정해서 한 쌍씩 엮은 방식. 
    var nickNameSet = {};
    for(let k = 0; k < temp.length; k++) {
        if(temp[k].length === 3) {
            nickNameSet[temp[k][1]] = temp[k][2];
        }
    }


    // enter, change, leave
    for(let j = 0; j < temp.length; j++) {
        if(temp[j][0] === "Enter") {
            answer.push(nickNameSet[temp[j][1]]+'님이 들어왔습니다.'); 
        } else if(temp[j][0] === "Leave") {
            answer.push(nickNameSet[temp[j][1]]+'님이 나갔습니다.');
            }
        }

    return answer;
}
