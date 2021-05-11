function lengthOfLongestSubstring(s){
    let hash = {}, 
        left=0,
        final = 0
    
    for(let index in s){
        if(hash[(s[index]] && index<left){
          left += hash[s[index]] + 1   
        } 
        final = Math.max(final, index - left + 1) 
        hash[s[index]] = index
    }
    return final
  }