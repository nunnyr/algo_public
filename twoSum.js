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
  

function twoSum(nums, target){
    const dict = new Map()
    for(let i=0;i<nums.length;i++){
      let remainder = target - nums[i]
      if(dict.has(remainder)){
         return [dict.get(remainder),i]
         }
      dict.set(nums[i],i)
    }
  }
  
  const nums = [0,0,1,1]
  console.log(twoSum(nums,2))
  