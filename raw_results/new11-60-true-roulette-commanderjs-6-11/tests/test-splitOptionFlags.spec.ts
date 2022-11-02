export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _arrayValuebA14mO = []
		const _arrayValueVALBuSd = null;
		const _arrayValueNfeuPUL = true;
		const _arrayValueZki35JK = null;
		const _flagsB99zpUS = [_arrayValuebA14mO, _arrayValueVALBuSd, _arrayValueNfeuPUL, _arrayValueZki35JK]
		const _returnValueQTvOzhW = await splitOptionFlags(_flagsB99zpUS)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsc7Hrq7j = "JfxKaiwQ4XodZsp5Ual0DiKzhdY6jD4cBlj3YEg5QNFIjPbuwbhXqVtCPAtFgiFODBOJWrWnvj1epjucPucaDqrJ4QdWO4";
		const _returnValuebMbloBW = await splitOptionFlags(_flagsc7Hrq7j)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValuemwwuIc = "5LEXPTCeo615npJmXhDa";
		const _splitXEBbrB = () => { return _returnValuemwwuIc };
		const _flagsGm8W2E = {
			"split": _splitXEBbrB
	}
		const _returnValuewVsHTqF = await splitOptionFlags(_flagsGm8W2E)
	});
})