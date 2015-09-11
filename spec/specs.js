describe('findReplace', function() {
  it('will find and replace a word from a string', function() {
    expect(findReplace('red', 'red', 'blue')).to.equal('blue');
  });

  it('will find and replace words from a string', function() {
    expect(findReplace('red rover red rover', 'rover', 'range rover')).to.equal('red range rover red range rover');
  });
});
