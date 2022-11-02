export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthf7GHS9R = -6.523060957294549;
		const _typesqsDsBwq = {
			"length": _lengthf7GHS9R
	}
		const _returnValuefhY6Qj = await normalizeTypes(_typesqsDsBwq)
	});

	it('test for normalizeTypes', async () => {
		const _lengthWiS0YlG = 9.892148821503476;
		const _typesW9ZeAcQ = {
			"length": _lengthWiS0YlG
	}
		const _returnValuekiBL7LB = await normalizeTypes(_typesW9ZeAcQ)
	});

	it('test for normalizeTypes', async () => {
		const _typesAnIEyV4 = "CIn1zByJVc0XLyjBVHVCj3pwtjJdIIahHfo2Qa4xNTyCwKCFP7RVtw4CvtIqp6G3NJi90uaf";
		const _returnValueVkBG00O = await normalizeTypes(_typesAnIEyV4)
	});
})