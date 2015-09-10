describe('romans', function() {
  it('return roman numerals for the number 1000', function () {
    expect(romans(1000)).to.equal('M')
  });

  it('returns roman numerals for thousands', function() {
    expect(romans(3000)).to.equal('MMM')
  });

  it('returns any number that is a basic roman numeral', function() {
    expect(romans(251)).to.equal("CCLI")
  });

  it('returns any number that is a special case roman numeral', function() {
    expect(romans(3454)).to.equal("MMMCDLIV")
  });
});
