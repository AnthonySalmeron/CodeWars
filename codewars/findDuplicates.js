// function containsDuplicates(a) {
//     let set = new Set()
//     for(let el of a){
//         if(set.has(el)) return true
//         set.add(el)
//     }
//     return false
// }

let containsDuplicates = a => a.length > new Set(a).size

//next solution I didn't make but it has good time complexity and I found it interesting
// def containsDuplicates(a):
//     d = set()
//     for inc in range(len(a) // 2):
//         beg = inc
//         end = len(a) - inc - 1
//         beg_val = a[beg]
//         end_val = a[end]
//         if beg_val == end_val:
//             return True
//         if beg_val in d or end_val in d:
//             return True
//         d.update([beg_val, end_val])
//     return False
//It compares two numbers, one from the left and another from the right. If they're equal then it returns true and if not they get added to the set. So at most it only has to run n/2 times
