class Solution {
    solve(shows, durations, k) {
        let hash = {}
        let sorted 
        let i = 0
        let final = 0 
       
        for(let s of shows){
            hash[s] ?  hash[s] += durations[i] : hash[s] = durations[i]
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
