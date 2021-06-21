function solution(nums) {
    var answer = 0;
    var selectPkm = nums.length / 2;
    var check = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (check.indexOf(nums[i]) === -1) {
            check.push(nums[i]);
        }
    }
    if (selectPkm > check.length)answer = check.length;
    else{answer = selectPkm;}
    
    console.log(check);
    
    
    return answer;
}
// 배열에서 중복되는 숫자 죽이기. 
// 1. set 함수 씀
// 2. filter 함수 씀
// 3. 하나하나 비교해가면서 indexOf로 가려냄
