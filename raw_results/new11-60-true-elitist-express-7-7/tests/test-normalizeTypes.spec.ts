export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthurJD7yt = 5.799711961240536;
		const _typesLHCCoy = {
			"length": _lengthurJD7yt
	}
		const _returnValue7W9W7C = await normalizeTypes(_typesLHCCoy)
	});

	it('test for normalizeTypes', async () => {
		const _lengthYtqfEjE = -8.133704217583968;
		const _typesdHTAGYU = {
			"length": _lengthYtqfEjE
	}
		const _returnValueEed81rI = await normalizeTypes(_typesdHTAGYU)
	});

	it('test for normalizeTypes', async () => {
		const _typesEDG8vLO = "McrNNKvkaWcIhvsSbcxUVHSEORdqiLiI8RxVJukUTqjfQ4CkGjoazOWBrqcC6VMeTpMkcQqHSSE6lOw";
		const _returnValueJ3L0S1N = await normalizeTypes(_typesEDG8vLO)
	});
})