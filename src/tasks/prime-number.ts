import * as workerpool from "workerpool";

function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

export function getPrimeNumbersBelow(max: number): string {
    try {
        const primeNumbers: number[] = [];
        for (let number = 2; number < max; number++) {
            if (isPrime(number)) {
                primeNumbers.push(number);
            }
        }
        return `Prime numbers below ${max}: ${primeNumbers.join(', ')}`;
    }
    catch (err) {
        console.log(err)
    }
}

workerpool.worker({primes: getPrimeNumbersBelow});