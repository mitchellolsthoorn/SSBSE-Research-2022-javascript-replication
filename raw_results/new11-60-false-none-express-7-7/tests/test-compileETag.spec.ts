export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _arrayValueOF1Afik = {
		
	}
		const _arrayValueB1mDGBy = undefined;
		const _valN9IwvuF = [_arrayValueOF1Afik, _arrayValueB1mDGBy]
		const _returnValuehqonDU8 = await compileETag(_valN9IwvuF)
	});

	it('test for compileETag', async () => {
		const _arrayValuesjBBaUC = false;
		const _arrayValueVPMHuZ9 = false;
		const _returnValueLSAHLss = [_arrayValuesjBBaUC, _arrayValueVPMHuZ9]
		const _valEFI8WyW = () => { return _returnValueLSAHLss };
		const _returnValueS2rBBv8 = await compileETag(_valEFI8WyW)
	});
})