export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueNRjgDGo = null;
		const _splitVQChwgR = () => { return _returnValueNRjgDGo };
		const _flagsdjBE4x5 = {
			"split": _splitVQChwgR
	}
		const _returnValueqWM8ryJ = await splitOptionFlags(_flagsdjBE4x5)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValuecIzk26e = "3DHLLCUaYQdDKPLINYX0dEUSrChwklBzDdXRZ7QcvS";
		const _splitQAD1gW3 = () => { return _returnValuecIzk26e };
		const _flagsOFAgr6X = {
			"split": _splitQAD1gW3
	}
		const _returnValue0xMehy = await splitOptionFlags(_flagsOFAgr6X)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueiZIW8Mr = false;
		const _returnValueVrT6guq = () => { return _returnValueiZIW8Mr };
		const _splitqgJRWv = () => { return _returnValueVrT6guq };
		const _flagswkqVkmH = {
			"split": _splitqgJRWv
	}
		const _returnValueyETc8TK = await splitOptionFlags(_flagswkqVkmH)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValuePRX8gTs = undefined;
		const _returnValuegsbPzpr = "EnMTnpacBMUQabt77nySh06d61fS7XOQLzvu3xkxP";
		const _arrayValueIpgErLq = () => { return _returnValuegsbPzpr };
		const _arrayValuefprVS1 = "rfPWtnvrwfvwD7QJp";
		const _returnValueZ4vpWA = [_arrayValuePRX8gTs, _arrayValueIpgErLq, _arrayValuefprVS1]
		const _splittIVXl1M = () => { return _returnValueZ4vpWA };
		const _flagsiDQeGyC = {
			"split": _splittIVXl1M
	}
		const _returnValueSyz5cvm = await splitOptionFlags(_flagsiDQeGyC)
	});
})