// //내적
// function solution(a, b) {
//   var answer = 0;
//   for(let aword of a){
//       for(let bword of b){
//           answer += aword * bword;
//           b.shift();
//           break;
//       }
//   }
//   return answer;
//   // return a.reduce((acc, _, i) => { return acc += a[i]* b[i]},0);
// }


let result = [];

const permutation = (array, choiceNum, tmp) => {

  if (choiceNum === 0) {
    result.push(tmp);
    return;
  }

  for (let i = 0; i < array.length; i++) {
    let a = array.splice(i, 1); 
    permutation(array, choiceNum - 1, tmp.concat(a))
    array.splice(i, 0, ...a);
  }
}

permutation(sorted, choiceNum, []);
return result;
debugger;

function solution(record) {
  const users = {};
  const cmds = [];
  const cmdObj = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  for (let rec of record) {
    const [cmd, uid, nickname] = rec.split(" ");
    if (nickname) users[uid] = nickname;
    if (cmd !== "Change") cmds.push([cmd, uid]);
  }

  return cmds.map(([cmd, uid]) => `${users[uid]}${cmdObj[cmd]}`);
}