export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValueoGEHpwL = null;
		const _indexOfnrANLXZ = () => { return _returnValueoGEHpwL };
		const _typexOg9Rrl = {
			"indexOf": _indexOfnrANLXZ
	}
		const _returnValueQLOmLUB = await normalizeType(_typexOg9Rrl)
	});

	it('test for normalizeType', async () => {
		const _typeSLLQAQp = "qwtMSNIQjN5RFmWUI6L1vseRGv6CiFV01TsfgFHx3qovtNR9oSq4MjXaD7JBba3";
		const _returnValuejqHjemM = await normalizeType(_typeSLLQAQp)
	});
})