<!-- reduce operator -->

const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum); // 10
