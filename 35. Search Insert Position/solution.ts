function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;
  let result = 0;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) return middle;
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    result = left;
  }
  return result;
}
