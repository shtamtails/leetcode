const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const calc = target - nums[i];
    if (map.has(calc)) {
      return [map.get(calc)!, i];
    }
    map.set(nums[i], i);
  }
  throw new Error("no two sum solutions");
};
