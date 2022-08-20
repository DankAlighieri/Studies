/* 

*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break // breaks the loop (in this case the for loop)
    }
    console.log(`${x} = ${nums[x]}`);
}

for (y in nums) {
    if (y == 5) {
        continue // breaks the current loop and jumps to the next iteration.
    }
    console.log(`${y} = ${nums[y]}`);
}

externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo // breaking the most outwards loop
        console.log(`Pair = ${a}, ${b}`);
    }
}

console.log('End');