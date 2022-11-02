export {}
const {Option} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");

describe('Option', () => {
	it('test for Option', async () => {
		const _flagsCLm6Uwy = "kNvjJwoTPBWTRSlAJX6DHzaU6JioJFYpxbdgtdJjJ91UOtW6p12cqdOwM5phkyTMBzExNznbBO9UIDd4pZeFsFDfiQIIjmAyDT";
		const _returnValueIw48FyH = "AkqngVxNCUqFDxoW2kahunu2e9mKrUn7HXkSuJpVwP5yo8Ry5FszEDKasMfpA9fTnOfLbywFm8zEcCIUtW3fZ3NiadotHyA";
		const _descriptionowHvSfD = () => { return _returnValueIw48FyH };
		const _OptionYQ0xyOh = new Option(_flagsCLm6Uwy, _descriptionowHvSfD)
		const _fn0K0JRr = undefined;
		const _returnValuejenZ0Qd = await _OptionYQ0xyOh.argParser(_fn0K0JRr)
		const _returnValuerTWvLX = await _OptionYQ0xyOh.attributeName()
		const _returnValuemS5suy = await _OptionYQ0xyOh.name()
	});

	it('test for Option', async () => {
		const _flagsVgAVYt2 = "qxbsb6EiIl5XuqyWfXtXqwvPbW4WWCbX7hIcDrdP9XO";
		const _descriptioneaFWhws = true;
		const _Optionu2anzpK = new Option(_flagsVgAVYt2, _descriptioneaFWhws)
		const _valueGDqBKTy = null;
		const _previousgo1LTzL = "3MtLjItsNMWDwGXenpyjg8Uwz4PsNH83QfwIH4wWnLG2pSkMqAuaGxkTcOXHdWs3beepta4umqvKNXQxEy89m3sC0yL9";
		const _returnValueSGZBmjv = await _Optionu2anzpK._concatValue(_valueGDqBKTy, _previousgo1LTzL)
		const _mandatorywZ3O4b = false;
		const _returnValueYWmoR8w = await _Optionu2anzpK.makeOptionMandatory(_mandatorywZ3O4b)
		const _valuebSjzyHF = undefined;
		const _descriptionYjjKVwT = undefined;
		const _returnValueYiUFOCA = await _Optionu2anzpK.default(_valuebSjzyHF, _descriptionYjjKVwT)
		const _valueZYr7KW7 = undefined;
		const _descriptiondaO73Yi = undefined;
		const _returnValueMOVU3yV = await _Optionu2anzpK.default(_valueZYr7KW7, _descriptiondaO73Yi)
	});

	it('test for Option', async () => {
		const _flagsksUE138 = "bA2z3IySBzGGSaYfyROMDxiJUGmVjP3iOXOC7S2630pDEL2igxjAJRbY4MjT7Ynq";
		const _descriptionflYwLZj = undefined;
		const _OptionoqBk2fw = new Option(_flagsksUE138, _descriptionflYwLZj)
		const _valuebrKD0o5 = undefined;
		const _arrayValueglHeYKc = -0.8223639558219826;
		const _returnValueztwTtTA = []
		const _returnValueHYZh0I2 = () => { return _returnValueztwTtTA };
		const _arrayValuexzFvxkw = () => { return _returnValueHYZh0I2 };
		const _arrayValueHjeUEZx = {
		
	}
		const _previousXxMa4yt = [_arrayValueglHeYKc, _arrayValuexzFvxkw, _arrayValueHjeUEZx]
		const _returnValueEvItipC = await _OptionoqBk2fw._concatValue(_valuebrKD0o5, _previousXxMa4yt)
		const _hideqiuoXjY = true;
		const _returnValuemaSAuwL = await _OptionoqBk2fw.hideHelp(_hideqiuoXjY)
	});

	it('test for Option', async () => {
		const _flagsO5GbA1w = "ueLOrGVQtROuAYUH222byVvko5G1Un0CVOO7UaaJdlYjHi3SBPwjQSIef8iLAGBnGkq8uV2MX89Ma4i7MHs4MZTv";
		const _descriptionSf4pSY = -4.641377254623836;
		const _OptionC8BF6N3 = new Option(_flagsO5GbA1w, _descriptionSf4pSY)
		const _arrayValueSZnkFz = -7.9503061842975455;
		const _arrayValueNV6Rcy8 = "sZqnHkhLNgADy0bFI5BwNxwmjBovT9rFHaIOsQlwUXK9vE2WEmq988bxYcbXAY1LgYwTAfkernjTQw74EAoRCmiXITBXnD";
		const _valuesXYRxQjT = [_arrayValueSZnkFz, _arrayValueNV6Rcy8]
		const _returnValuelbPNEA9 = await _OptionC8BF6N3.choices(_valuesXYRxQjT)
	});

	it('test for Option', async () => {
		const _flagsvVg8oV = "ZmruLNeMEVLvGPKcoPj3TQjJ1KBfU6WJiHftDs0HwMlcG3sPLqaxgYzJtfuICXRfwReJs7eBydVF3W13JJ1ggiWr4a";
		const _descriptionmrPzCGJ = "nkpn";
		const _OptionWdw0Dp = new Option(_flagsvVg8oV, _descriptionmrPzCGJ)
		const _hideKUuhWw = false;
		const _returnValueJ9BPWEK = await _OptionWdw0Dp.hideHelp(_hideKUuhWw)
		const _valueGiAfSzb = false;
		const _description8zYbOA = undefined;
		const _returnValueD9JLDl3 = await _OptionWdw0Dp.default(_valueGiAfSzb, _description8zYbOA)
		const _nameT2yeEaU = undefined;
		const _returnValueaHbC8Vp = await _OptionWdw0Dp.env(_nameT2yeEaU)
		const _hideRhKSo1n = false;
		const _returnValuelV55lR = await _OptionWdw0Dp.hideHelp(_hideRhKSo1n)
		const _returnValueSWPq0Jn = await _OptionWdw0Dp.name()
	});

	it('test for Option', async () => {
		const _flagsEm8Nipl = "vHLf3jzazsIc3Npo61htuYeKQnRf5BP";
		const _descriptioneWga44Y = -6.064430458089025;
		const _OptionOP4QkCR = new Option(_flagsEm8Nipl, _descriptioneWga44Y)
		const _valueJaDmSaw = undefined;
		const _descriptionFcBttGz = undefined;
		const _returnValuecGvDyh8 = await _OptionOP4QkCR.default(_valueJaDmSaw, _descriptionFcBttGz)
		const _argH2qDHvd = {
		
	}
		const _returnValueBsLM2Da = await _OptionOP4QkCR.is(_argH2qDHvd)
	});
})