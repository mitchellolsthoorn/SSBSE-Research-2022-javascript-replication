export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputXSOPrfM = "1TXtzZfSIbU280J1Hsmlbpr";
		const _unitskVi50Jf = true;
		const _returnValueGZCkFuc = await isSameOrBefore(_inputXSOPrfM, _unitskVi50Jf)
	});
})