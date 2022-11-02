export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueTJfgbz3 = -5.189772600976447;
		const _splitqwJDdjQ = () => { return _returnValueTJfgbz3 };
		const _flagsEWW0ncm = {
			"split": _splitqwJDdjQ
	}
		const _returnValueUqAuuwd = await splitOptionFlags(_flagsEWW0ncm)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValuegRO8qYM = false;
		const _arrayValuenGuwfWw = true;
		const _returnValuehajba8A = [_arrayValuegRO8qYM, _arrayValuenGuwfWw]
		const _splitAqwotpA = () => { return _returnValuehajba8A };
		const _flags7QBsZa = {
			"split": _splitAqwotpA
	}
		const _returnValuetoHFFII = await splitOptionFlags(_flags7QBsZa)
	});
})