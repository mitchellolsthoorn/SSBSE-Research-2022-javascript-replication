export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _mFCCWA8Z = true;
		const _returnValuekXfNLWA = await isValid(_mFCCWA8Z)
	});

	it('test for isValid', async () => {
		const _returnValueLRDFOX = null;
		const _mjCq7bKn = () => { return _returnValueLRDFOX };
		const _returnValueMa4oYPZ = await isValid(_mjCq7bKn)
	});
})