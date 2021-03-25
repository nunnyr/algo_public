class Solution {
    solve(nums) {
    //     let final = []
        
    //     for(let num of nums){
    //         if(!final.includes(num)){
    //             final.push(num)
    //         }
    //     }
    //     return final.length
    // }

    let map = {}
    for(let num of nums){
        
        map[num] ? map[num] += 1 : map[num] = 1
       // console.log("map", map)
        }
        return Object.keys(map).length
    }