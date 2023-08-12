
// Nivel hardcore
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144.
function fibo(pos) {
    if (pos <= 2)
        return 1
    return fibo(pos - 2) + fibo(pos - 1)
}

console.log(fibo(12))