//Algorithm test
// https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
function intersect(nums1: number[], nums2: number[]) {
    let arrDefault = []
    let arr = []
    for (let i = 0; i < 1000; i++) {
        arrDefault.push(0)
    }
    for (let i = 0; i < nums1.length; i++) {
        arrDefault[nums1[i]]++
    }
    for (let i = 0; i < nums2.length; i++) {
        if (arrDefault[nums2[i]] !== 0) {
            arr.push(nums2[i])
            arrDefault[nums2[i]]--
        }
    }
    return arr
}

