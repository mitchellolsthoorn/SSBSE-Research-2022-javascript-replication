export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputkUefbLq = "SjaYlaWOdiAWM7HRWcnisqkdoZ4tRVJWISACuTEHNAGAILaqgTVFm3Bs2TXGkUFEBYPBnhNRgNE5eXp";
		const _returnValuekh8729t = true;
		const _arrayValuebifGCUN = () => { return _returnValuekh8729t };
		const _unitsFREouul = [_arrayValuebifGCUN]
		const _returnValueIe3VeDF = await isSameOrBefore(_inputkUefbLq, _unitsFREouul)
	});
})