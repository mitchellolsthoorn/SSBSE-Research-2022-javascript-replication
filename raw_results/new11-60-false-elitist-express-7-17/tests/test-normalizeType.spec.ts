export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValueAUVthAL = undefined;
		const _indexOfFYcykU4 = () => { return _returnValueAUVthAL };
		const _typeM3zZ5gF = {
			"indexOf": _indexOfFYcykU4
	}
		const _returnValuegKILpGY = await normalizeType(_typeM3zZ5gF)
	});

	it('test for normalizeType', async () => {
		const _typeDZc0O8J = "3GRP7txwb2kMh7NFY";
		const _returnValueklqQRvf = await normalizeType(_typeDZc0O8J)
	});
})