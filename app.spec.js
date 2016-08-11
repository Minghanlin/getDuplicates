describe('Checking getDuplicates function',function(){
it('throws Error when detects non integer',function(){
expect(getDuplicates([a, 3, d])).toThrowError(TypeError, "Not an integer");
});
it('Throws error for non array',function(){
expect(getDuplicates('nonarray')).toThrowError(TypeError, "Not an Array");
});
it('accepts empty arrasy',function(){
expect(getDuplicates([])).not.toBe(null);
});
it('returns empty array if no duplicates',function(){
if(getDuplicates([1, 2, 3, 4])) {
  expect(sortedArr).toBe([]);
}
});
it('returns ascending array',function(){
if(getDuplicates([1, 2, 3, 2, 5, 3])) {
  expect(sortedArr).toBe([1, 2, 3, 5]);
}
});
});
