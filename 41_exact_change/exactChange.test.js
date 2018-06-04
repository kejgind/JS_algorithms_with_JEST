const exactChange = require('./exactChange');

describe('Exact Change - Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.', () => {
  it('should return an array', () => {
    expect(
      exactChange(19.5, 20.0, [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90.0],
        ['FIVE', 55.0],
        ['TEN', 20.0],
        ['TWENTY', 60.0],
        ['ONE HUNDRED', 100.0],
      ])
    ).toEqual(expect.any(Array));
  });
  it('should return a string', () => {
    expect(
      exactChange(19.5, 20.0, [
        ['PENNY', 0.01],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0],
      ])
    ).toEqual(expect.any(String));
  });
  it('should return a string', () => {
    expect(
      exactChange(19.5, 20.0, [
        ['PENNY', 0.5],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0],
      ])
    ).toEqual(expect.any(String));
  });

  it('should return [["QUARTER", 0.50]]', () => {
    expect(
      exactChange(19.5, 20.0, [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90.0],
        ['FIVE', 55.0],
        ['TEN', 20.0],
        ['TWENTY', 60.0],
        ['ONE HUNDRED', 100.0],
      ])
    ).toEqual([['QUARTER', 0.5]]);
  });
  it('should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]', () => {
    expect(
      exactChange(3.26, 100.0, [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90.0],
        ['FIVE', 55.0],
        ['TEN', 20.0],
        ['TWENTY', 60.0],
        ['ONE HUNDRED', 100.0],
      ])
    ).toEqual([
      ['TWENTY', 60.0],
      ['TEN', 20.0],
      ['FIVE', 15.0],
      ['ONE', 1.0],
      ['QUARTER', 0.5],
      ['DIME', 0.2],
      ['PENNY', 0.04],
    ]);
  });

  it('should return "Insufficient Funds"', () => {
    expect(
      exactChange(19.5, 20.0, [
        ['PENNY', 0.01],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0],
      ])
    ).toBe('Insufficient Funds');
  });
  it('should return "Insufficient Funds"', () => {
    expect(
      exactChange(19.5, 20.0, [
        ['PENNY', 0.01],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 1.0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0],
      ])
    ).toBe('Insufficient Funds');
  });

  it('should return "Closed"', () => {
    expect(
      exactChange(19.5, 20.0, [
        ['PENNY', 0.5],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0],
      ])
    ).toBe('Closed');
  });
});
