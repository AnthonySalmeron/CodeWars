var smallerNumbersThanCurrent = nums=>nums.map(el=>[...nums].sort((a,b)=>a-b).indexOf(el))
