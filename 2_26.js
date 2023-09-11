// ['finished'],['br'],['truck_weights']

let bridge_length = 2;
let weight = 10;
let truck_weights = [7,4,5,6];


function solution(bridge_length, weight, truck_weights){

    let time = 1;
    let sum = 0;
    let br = new Array(bridge_length).fill(0);
    let passer = truck_weights.shift();
    br.push(passer);
    
    br.shift();
    
    // let sum = br.reduce((acc, cur)=> acc+cur,0)
    sum += passer;
    
    while(truck_weights.length>0){
    
        if(sum-br[0]+truck_weights[0] <= weight){
            br.shift();
            br.push(truck_weights[0]);
            truck_weights.shift();
            time++;
        } else{
            br.shift();
            br.push(0);

            time++

        }
    }
    return time + bridge_length;
}

