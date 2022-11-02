export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthOb8TUlA = -9.838045416629358;
		const _typesZspHlBg = {
			"length": _lengthOb8TUlA
	}
		const _returnValuesMRNdMu = await normalizeTypes(_typesZspHlBg)
	});

	it('test for normalizeTypes', async () => {
		const _lengthK5r2i65 = 3.127790564651292;
		const _typesZmB69Xk = {
			"length": _lengthK5r2i65
	}
		const _returnValueQd0SCby = await normalizeTypes(_typesZmB69Xk)
	});

	it('test for normalizeTypes', async () => {
		const _typespRWO6A6 = "iPTcINS9RgXHmHGi6rvtKSiTTHKVrs";
		const _returnValuek6Qmebf = await normalizeTypes(_typespRWO6A6)
	});
})