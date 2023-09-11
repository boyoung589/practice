//1. 완주하지 못한 선수
let participant1 = ["leo", "kiki", "eden"];
let completion1 = ["eden", "kiki"];

participant1 = participant1.sort(); // [ 'eden', 'kiki', 'leo' ]
completion1 = completion1.sort();   // [ 'eden', 'kiki' ]

let participant2 = ["mislav", "stanko", "mislav", "ana"];	
let completion2 = ["stanko", "ana", "mislav"];

participant2 = participant2.sort(); //[ 'ana', 'mislav', 'mislav', 'stanko' ]
completion2 = completion2.sort();   //[ 'ana', 'mislav', 'stanko' ]

let participant3 = ["marina", "josipa", "nikola", "einko", "filipa"];
let completion3 = ["josipa", "filipa", "marina", "nikola"];

participant3 = participant3.sort(); //[ 'einko', 'filipa', 'josipa', 'marina', 'nikola' ]
completion3 = completion3.sort();   //[ 'filipa', 'josipa', 'marina', 'nikola' ]

//정렬했을 때 같은 인덱스의 값이 다르면 participant[i]가 답!

function solution(participant, completion) {
    participant = participant.sort();
    completion = completion.sort();
    let name = ''
    
    for(let i = 0; i<completion.length; i++){
        if(completion[i]!==participant[i]){
            name = participant[i];
            break;
        } 
    } 
    return name;
}

//2. K번째수

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
let answer = [];
answer.concat(array.slice(2-1,5).sort().slice(3-1,3));//[5]
answer //[]
array.slice(4-1,4).sort().slice(1-1,1)//[6]
answer.push(array.slice(1-1,7).sort().slice(3-1,3)) 

console.log("답", answer)

for(let command of commands){
  console.log(command);
}
//그냥 순서대로 써줌
function solution(array, commands) {
    var answer = [];
    
    for(let command of commands){
        answer = answer.concat(
            array.slice(command[0]-1,command[1])
            .sort((a,b)=>a-b)
            .slice(command[2]-1,command[2])
        )
    }
    
    return answer;
}

//3. 멀쩡한 사각형

// 대각선이 지나는 사각현 갯수를 구하는 공식
// W + H - (W, H의 최대 공약수)

// 유클리드 호제법을 이용한 최대 공약수 구하기
function gcd(w, h) {    // 처음 W와 H를 받습니다.

    // W와 H의 나머지를 구합니다.
    const mod = w % h;

    // 만약 나머지가 0일 경우 H를 반환합니다.
    if (mod === 0) {
        return h;
    }

    // 만약 0이 아닐경우 W에 H를 넣고 H에 나머지인 mod를 넣어 해당 함수를 다시 호출해 줍니다.
    return gcd(h, mod);
}

function solution(w, h) {
    // 최대 공약수를 구해줍니다.
    const gcdVal = gcd(w, h);

    // 공식에 맞춰 사용
    return w * h - (w + h - gcdVal);
}

//124 나라의 숫자

// 1 //1의 자리 숫자는 10진법을 3으로 나누어 떨어진 수
// 2 
// 4 //만약 n % 3 === 0 이면  4를 데려옴 [1, 2, 4] 몫은 1 더 돌리면 안됨. 0돼야함 1-1
// 11
// 12
// 20=>14 //만약 n % 3 === 0 이면 뒷자리는 4를 데려옴 [1, 2, 4] 몫은 2=> 한번 더 돌려줘야함 but 1돼야함 2-1
// 21
// 22
// 100=>24 //만약 n % 3 === 0 이면 뒷자리는 4를 데려옴 몫은 3 한번 더 돌려야 하는데 2돼야함 3그대로 돌리면 안됨 3-1
// 41 몫이 3인 경우 걍 3을 돌렸을 때 숫자를 앞에 넣어주면 됨

function solution(n) {
    let answer = ''
    while(n>0){
        if(n%3===1){
            answer='1'+ answer;
            n = Math.floor(n/3);
            continue;
        }
        if(n%3===2){
            answer='2'+ answer;
            n = Math.floor(n/3);
            continue;
        }
        if(n%3===0){
            answer='4'+ answer;
            n = Math.floor(n/3-1);
            continue;
        }
    } return answer;
}