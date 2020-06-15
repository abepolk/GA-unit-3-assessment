// I've seen this problem before

const reverseInt = (n) => {
    let s = n.toString();
    let neg = false
    if (s[0] === '-') {
        neg = true
         s = s.slice(1, s.length);
    }
    s = s.split('').reverse().join('');
    if (neg) {
        s = '-' + s
    }
    return parseInt(s);
}


const maxChar = (s) => {
    const count = {}
    for (let char of s.split('')) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1
        }
    }
    let max = [null, 0];
    for (let elem in count) {
        if (count[elem] > max[1]) {
            max = [elem, count[elem]]
        }
    }
    return max[0]
}

console.log(maxChar)

export {reverseInt, maxChar};