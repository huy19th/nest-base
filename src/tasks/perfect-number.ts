import * as workerpool from "workerpool";

function isPerfectNumber(num: number): boolean {
    let sum = 1; // 1 is always a divisor
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) {
                sum += num / i;
            }
        }
    }
    return sum === num && num !== 1;
}

export function getPerfectNumbersBelow(max: number): string {
    try {
            const perfectNumbers: number[] = [];
    for (let number = 2; number < max; number++) {
        if (isPerfectNumber(number)) {
            perfectNumbers.push(number);
        }
    }
    return `Perfect numbers smaller than ${max}: ${perfectNumbers.join(', ')}`;
    }
    catch (err) {
        console.log(err)
    }
}

workerpool.worker({perfects: getPerfectNumbersBelow});