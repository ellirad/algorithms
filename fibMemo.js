function fibMemo(index, cache) {
    cache = cache || [];

    // Base case
    if (cache[index]) return cache[index];
    if (index < 3) return 1;
    cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);

    return cache[index]
}

console.log(fibMemo(50));