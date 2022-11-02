export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValueRtWB6Pm = 4.9898759199520555;
		const _indexOfRMYc2pZ = () => { return _returnValueRtWB6Pm };
		const _typeGDqsQhj = {
			"indexOf": _indexOfRMYc2pZ
	}
		const _returnValuedQtTOE = await normalizeType(_typeGDqsQhj)
	});

	it('test for normalizeType', async () => {
		const _returnValueGkCMmRu = -1.3858618733025079;
		const _indexOfA9dCHN = () => { return _returnValueGkCMmRu };
		const _typer9lL6rY = {
			"indexOf": _indexOfA9dCHN
	}
		const _returnValuepxY1b4L = await normalizeType(_typer9lL6rY)
	});
})