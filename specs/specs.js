describe('romanI', function() {
  it('return roman numerals for numbers less than 3', function () {
    expect(romanI(3)).to.equal('III')
  });

  it('returns roman numerals for numbers less than 5', function() {
    expect(romanI(7)).to.equal('VII')
  });
});
