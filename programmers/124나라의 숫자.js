function solution(n) {
    var answer = '';
    
//    answer = String(Math.floor(n/3)) + String(n % 3);
    if (Math.floor(n / 3) === 0){
        answer = String(n % 3);
    }else if(n % 3 === 0 && n >= 3){
        answer = String(4);
    }else if(n % 3 === 0 && n > 3){
        answer = String(Math.floor(n / 3) - 1) + String(4);
    }else {
        answer = String(Math.floor(n / 3)) + String(n % 3);
    }
    
    return answer;
}

// String + String로 숫자를 표현하려함..
// 근데 이거 자리수가 늘어남에 따라 노가다인데..


function solution(n) {
    const number124 = [4, 1, 2];
    var answer = '';
    
    while(n){
        answer = number124[n%3] + answer;
        n = (n%3 === 0)? n/3 - 1 : Math.floor(n / 3);
    }
    return answer;
}

// 답은 배열이었다. 배열 역시 String + String처럼 활용가능하니까
// 그러면서 자릿수에 구애받지않는 방법이었네 쩦..
