const compose = (...fucns) => (comp) => {
    return fucns.reduceRight(
        (wrapped, f) => f(wrapped), comp);
}

export default compose;