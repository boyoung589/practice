//로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
    var answer = [];
    let same_num = 0; //lottos와 win_nums에 동일한 숫자가 몇개인지 확인
    let zero_count = 0;//lottos의 0 갯수 확인
    // 오름차순 정렬먼저
    // 0이 없을 때
    // same_num 확인
    lottos.sort();
    function checkNum(lottos, win_nums){
        for(let lottoNum of lottos){
            for(let winNum of win_nums){
                if( lottoNum === winNum){
                    same_num+=1;
                }
            }
        }
    }
    function winPoint(num){
        switch(num){
            case 6:
                return 1;
            case 5:
                return 2;
            case 4:
                return 3;
            case 3:
                return 4;
            case 2:
                return 5;
            default:
                return 6;
        }
    }
    
    if(lottos[0]!==0){
        checkNum(lottos, win_nums)
        //등수!!!
        answer = [winPoint(same_num), winPoint(same_num)]
    } else{
        // 0이 있을 때(정렬한 lottos의 0번째 인덱스가 0인 경우)
        // zero_count 확인
        // same_num 확인
        // answer[0]= same_num + zero_count
        // answer[1]= same_num
        for(let num of lottos){
            if(num === 0){
                zero_count+=1;
            }else{
                break;
            }
        }
        let newLottos = lottos.slice(zero_count);
        checkNum(newLottos, win_nums);
        answer = [winPoint(same_num + zero_count), winPoint(same_num)];
        
    }

    return answer;
}