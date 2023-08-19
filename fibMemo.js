function fibMemo(index, cache) {
    cache = cache || [];

    // Base case
    if(cache[index]) return cache[index];

    if(index < 3) return 1;

    return fibMemo(index - 1, cache) + fibMemo(index - 2, cache);

}

console.log(fibMemo(20));