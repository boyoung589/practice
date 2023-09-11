//1
function test1(A, B) {
    // TODO: 여기에 코드를 작성하세요.
    // 최대공약수
    // 둘 중 큰 수를 고른다
    let maxNum = Math.max(A, B);
    let minNum = Math.min(A, B);
    function gcd(minNum, maxNum){
        return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
    }
    return gcd(minNum, maxNum);
}

//2
function test2 (n, m) {
    // TODO: 여기에 코드를 작성하세요.
    // 1부터 n까지 수를 담아줄 배열 arrN선언
    let arrN = [];
    for(let j=1; j<=n; j++){
      arrN.push(j);
    }
    //순열!!!!
    let result = [];
    function permutation(arr, memo){
      //재귀 탈출조건
      if(memo.length === m){
        return result.push(memo);
      }
      for(let i=0; i<arr.length; i++){
        //원본 건들이지 말아줬으면..
        let temp = arr.slice();
        //뒤에 하나씩 뗀 숫자
        temp.splice(i, 1);
        //순열재귀
        permutation(temp, memo.concat(arr[i]));
      }
    }
    permutation(arrN, []);
    //result 속에있는 애들을 꺼내야함
    return result.map(el=>Number(el.join('')));
  
};

//3
function test3(board, operation) {
    // TODO: 여기에 코드를 작성하세요.
    // 명령어 별 이동하는 좌표변화
    const moves = {
      'R': [0, 1],
      'L': [0, -1],
      'U': [-1, 0],
      'D': [1, 0],
    }
  
    //범위체크
    let rowCheck = board[0].length;
    let colCheck = board.length;
    function isValid(r, c){
      return r >= 0 && r < rowCheck && c >= 0 && c < colCheck
    }
  
    //operation에 따라 움직이는 반복문
    //출발점
    let [row, col] = [0, 0];
    let count = 0;
    for (let i = 0; i < operation.length; ++i) {
      let [mRow, mCol] = moves[operation[i]];
      if (isValid(row + mRow, col + mCol)) {
        row += mRow;
        col += mCol;
        count += board[row][col];
        board[row][col] = 0;
      }
    }
    return count;
};