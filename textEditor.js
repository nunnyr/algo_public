class Solution {
    solve(s) {
        
        let final = ["a","b", "z" ]

        for(let i = 0; i < s.length; i++){
            if(s[i] === "<" && s[i + 1] === "-"){
                final.pop()
                i++
                continue
            } 
            final.push(s[i])  
        }
        return final.join("")
    }
}
