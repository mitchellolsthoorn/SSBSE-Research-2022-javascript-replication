export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValuenuQJ25m = "1n3UDCjYeBPcgHSyv1QCdmeQria6ihwLbeO7n66eFvoXTAkdOt7UkSSobmV5W";
		const _splitzdVLmm4 = () => { return _returnValuenuQJ25m };
		const _flagsAbInNHl = {
			"split": _splitzdVLmm4
	}
		const _returnValueCadgPZM = await splitOptionFlags(_flagsAbInNHl)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValueRSQujwz = 1.5708418624211085;
		const _arrayValueO7QsVH3 = true;
		const _arrayValueiQbGErU = true;
		const _arrayValueGvQSwAF = null;
		const _arrayValueQE2VEQ = null;
		const _arrayValueRAP2IlA = [_arrayValueO7QsVH3, _arrayValueiQbGErU, _arrayValueGvQSwAF, _arrayValueQE2VEQ]
		const _returnValueghBUQiZ = [_arrayValueRSQujwz, _arrayValueRAP2IlA]
		const _splitiW7bq6o = () => { return _returnValueghBUQiZ };
		const _flagsesp5KJq = {
			"split": _splitiW7bq6o
	}
		const _returnValueLOxjoQc = await splitOptionFlags(_flagsesp5KJq)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueMtRbMwg = false;
		const _splitq3o7Pz4 = () => { return _returnValueMtRbMwg };
		const _flagsZiAhMR = {
			"split": _splitq3o7Pz4
	}
		const _returnValuekKbh01s = await splitOptionFlags(_flagsZiAhMR)
	});
})