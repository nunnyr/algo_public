function twoSum(nums, target){
    let final = []
    for(let i = 0; i < nums.length; i++){
      
      let j = i+1
      while(j < nums.length){
        if(nums[i] + nums[j] === target){
          final.push(i, j)
          return final
        }
        j++
      }
    }
  }
  