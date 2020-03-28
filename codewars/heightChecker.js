// Check to make sure an array containing heights for people is arranged from smallest to biggest, return the smallest number of people that need to be moved to make the ordering accurate
// basically a variant of counting sort, will decide where the numbers should be and compare to where they actually are
var heightChecker = function(heights) {
    let switches= 0,track =[],min = Math.min(...heights),max=Math.max(...heights)
    track.length = max-min+1
    track.fill(0)
    for(let i of heights){
        track[i-min]++
    }
    for(let j=1;j<track.length;j++){
        track[j]+=track[j-1]
    }
    for(let k of heights){
        if(heights[track[k-min]-1]==k) track[k-min]--
        else {
           switches++
           track[k-min]--
        }
    }
    return switches
};
