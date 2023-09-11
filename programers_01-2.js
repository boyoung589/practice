// let board = [
//   [0,0,0,0,0],
//   [0,0,1,0,3],
//   [0,2,5,0,1],
//   [4,2,4,4,2],
//   [3,5,1,3,1]
// ];

// let moves = [1,5,3,5,1,2,1,4];
// console.log("마지막에서 두번째는?", moves.slice(-2,-1))
// console.log("마지막은?", moves.slice(-1))
// let stack = []; //바구니
// let answer = 0;
// // let x=0;
// // let y=0;
// // let picker = board[x][y];

// for(let el of moves){
//   let choose = el-1;
//   // console.log(choose)
//   for(let i=0; i<board.length; i++){
//     // console.log("행",i)
//     // console.log("board", board[i][choose])
//     if(board[i][choose] === 0){
//       continue;
//     }else{
//       stack.push(board[i][choose]);
//       board[i][choose] = 0;
//       break;
//       // console.log(board)
//       // if(stack.slice(-2,-1) === stack.slice(-1)){
//       //   stack.pop();
//       //   stack.pop();
//       //   answer+=2;
//       // }
//       console.log("stack", stack)
//       // console.log(answer)
//     }
//   }
// }
// stack
// for(let i = 0; i<stack.length; i++){
//   for(let j = i+1; j<stack.length; j++){
//     if(stack[i] === stack[j]){
//       stack.splice(i,1)
//     }
//   }
// }

// stack
//[4,3,1,1,3,2,#,4];

// let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
// let phone=[
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//         ['*', 0, '#']
//     ];
// [first, second, third, fourth]=phone;
// let answer="";
// let right_point=phone[3][0];
// let right=[];
// let left=[]

// console.log("right_point", right_point)

// let left_point=phone[3][2];
// if(number[0] === 0){
//   //hand에 따라 결졍
//   //numbers.shift();
// }
// for(let button of numbers){
//   if(button === 1 || button === 4 || button === 7){
//     answer+="L";
//     for(let layer of phone){
//       if(layer.indexOf(button) !== -1){
//         left_point = phone[phone.indexOf(layer)][0]
//         console.log("L", left_point)
//         left.push(phone.indexOf(layer)
//       }
//     }
//   }
//   if(button === 3 || button === 6 || button === 9){
//     answer+="R";
//     for(let layer of phone){
//       if(layer.indexOf(button) !== -1){
//         right_point = phone[phone.indexOf(layer)][2]
//         console.log("R", right_point)
//         right.push(phone.indexOf(layer)
//       }
//     }
//   }
//   else{
//     //2일때
//     if(left.slice(-1)){
      
//     }
//     if(right.slice(-1)){}
    
    
//   }
//   // find the layer층 비교
//   // 칸비교
//   console.log("answer", answer)
// }

// console.log("phone.indexOf(first)", phone.indexOf(first))
// console.log("phone.indexOf(second)", phone.indexOf(second))

let board = [
  [0,0,0,0,0],
  [0,0,1,0,3],
  [0,2,5,0,1],
  [4,2,4,4,2],
  [3,5,1,3,1]
];

let moves = [1,5,3,5,1,2,1,4];
// console.log("마지막에서 두번째는?", moves.slice(-2,-1))
// console.log("마지막은?", moves.slice(-1))
let stack = []; //바구니
let answer = 0;
let x=0;
let y=0;
let picker = board[x][y];

for(let el of moves){
  let choose = el-1;
  // console.log(choose)
  for(let i=0; i<board.length; i++){
    // console.log("행",i)
    // console.log("board", board[i][choose])
    if(board[i][choose] === 0){
      continue;
    }else{
      stack.push(board[i][choose]);
      board[i][choose] = 0;
      console.log("막2", stack.slice(-2,-1))
console.log("막1",stack.slice(-1))
        if(stack.slice(-2,-1)[0] === stack.slice(-1)[0]){
        stack.pop();
        stack.pop();
        answer+=2;
          console.log(answer)
      }
      break;
      // console.log(board)
      // if(stack.slice(-2,-1) === stack.slice(-1)){
      //   stack.pop();
      //   stack.pop();
      //   answer+=2;
      // }
      console.log("stack", stack)
      // console.log(answer)
    }
  }
}
stack
console.log(stack.slice(-2,-1))
console.log(stack.slice(-1))

// array1.reduce((previousValue, currentValue) => previousValue + currentValue;), 초기값);


// let s = "aabbaccc";
// let arr = [];
// let match = [];
// let answer = 0;
// arr.push(s.slice(0,1));
// for(let i = 1; i <= s.length/2; i++){
//   //1개 ~ s만큼 끊기 위한 반복문
//   for(let j=0; j<s.length; j+=i){
//     // i = 0/1/2/3/4/5/6/7
//     // j = 0/1/3/
//     console.log(j)
//     arr.push(s.slice(j, j + i))
    
//   }
// }
// console.log("arr",arr)
// console.log("match",match)