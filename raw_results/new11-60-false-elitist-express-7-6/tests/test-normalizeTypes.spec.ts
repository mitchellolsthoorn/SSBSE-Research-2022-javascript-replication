export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthp9QNZvZ = -1.2903762863115347;
		const _typesEt5RKwq = {
			"length": _lengthp9QNZvZ
	}
		const _returnValueh3FO4zG = await normalizeTypes(_typesEt5RKwq)
	});

	it('test for normalizeTypes', async () => {
		const _lengthcx1kdQf = 3.273624849963541;
		const _typesVgt3v8m = {
			"length": _lengthcx1kdQf
	}
		const _returnValuesrnkwXS = await normalizeTypes(_typesVgt3v8m)
	});

	it('test for normalizeTypes', async () => {
		const _typesiJ3JHQ8 = "xMlDRPkVDYfurii4Qsb5uLUPOiZoG0lAiSzDek6ME4fP7ksbEe4oguAXux67f2aM5Pnp17nTEAwM7PmsGDsJoOPFKC4iGSq5";
		const _returnValueb9uTvpG = await normalizeTypes(_typesiJ3JHQ8)
	});
})