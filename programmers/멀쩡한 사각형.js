function solution(w, h) {
    var answer;
    
    function gcd(w, h) {    
        const mod = w % h;
        if (mod === 0) {
            return h;
        }
        return gcd(h, mod);
    }
        
    answer = w*h - (w + h - gcd(w,h));
    return answer;
}

// 유클리드 호제법을 이용하여 최대공약수를 계산
// w+h-gcd가 없어지게되는 사각형의 개수가 됨.
// 재귀함수를 이용하는 방법 숙달할 것.
