export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _arrayValuevrpqe4Y = -0.5665936123838016;
		const _arrayValueNinw3D = null;
		const _arrayValueUazfN8N = true;
		const _flagsniqevd = [_arrayValuevrpqe4Y, _arrayValueNinw3D, _arrayValueUazfN8N]
		const _returnValueouzu0GY = await splitOptionFlags(_flagsniqevd)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsuO99mY = "J29viXbPJGEdAjQuvX23uhTmOfkPgWan8G6a3kGiStd7F027W1Fxr15eWlPCz6gRGrbbsKRWEEY94DJgwc";
		const _returnValueX4OkhQA = await splitOptionFlags(_flagsuO99mY)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueBEXKKE = "azb5bloxn2oMpIVPE1X65Oq3wyjUac8f1IrwP4darcF1h8CaN7IigkasnQfcP5IOgyCLOjoIBrTHy899cSkAm";
		const _splitPU2zBBc = () => { return _returnValueBEXKKE };
		const _flagsSa2LAME = {
			"split": _splitPU2zBBc
	}
		const _returnValue2hzjLd = await splitOptionFlags(_flagsSa2LAME)
	});
})