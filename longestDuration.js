class Solution {
    solve(shows, durations, k) {
        let hash = {}
        let i = 0
        let final = 0 
        let sorted 
       
        for(let show of shows){
            hash[show] ?  hash[show] += durations[i] : hash[show] = durations[i]
            i++
            //console.log("hash", hash)
        }

        sorted = Object.values(hash).sort((a,b) => a - b)
        //sorted = [1,3,4]

        //I only want the top K values
        for(let j = 0; j < k; j++){
               // console.log("show me sorted", sorted)
                final += sorted.pop()
        }
    return final
    }
}