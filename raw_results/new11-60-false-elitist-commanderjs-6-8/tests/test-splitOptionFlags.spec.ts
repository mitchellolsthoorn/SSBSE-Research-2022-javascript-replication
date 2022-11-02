export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueTZztglc = "msdiALs0UWDbE";
		const _splitLfVk1sR = () => { return _returnValueTZztglc };
		const _flagsBqHAnwi = {
			"split": _splitLfVk1sR
	}
		const _returnValueZAL0ol = await splitOptionFlags(_flagsBqHAnwi)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValuet8L3lF6 = false;
		const _splitQnpnP01 = () => { return _returnValuet8L3lF6 };
		const _flagsK9hYAMa = {
			"split": _splitQnpnP01
	}
		const _returnValuetcyo7Mn = await splitOptionFlags(_flagsK9hYAMa)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValuelBgCmkh = undefined;
		const _arrayValue4cstcc = 8.530639090315816;
		const _arrayValuexqi2q8q = null;
		const _arrayValueSr0iWm9 = undefined;
		const _returnValuelwwtYQ = [_arrayValuelBgCmkh, _arrayValue4cstcc, _arrayValuexqi2q8q, _arrayValueSr0iWm9]
		const _splitm8ICTea = () => { return _returnValuelwwtYQ };
		const _flagsCC9Fe1T = {
			"split": _splitm8ICTea
	}
		const _returnValuefLjfx50 = await splitOptionFlags(_flagsCC9Fe1T)
	});
})