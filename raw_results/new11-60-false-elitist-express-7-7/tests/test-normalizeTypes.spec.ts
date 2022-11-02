export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _lengthku0XbZF = 1.8535333309231241;
		const _typesyywrAsJ = {
			"length": _lengthku0XbZF
	}
		const _returnValue0i0wvZ = await normalizeTypes(_typesyywrAsJ)
	});

	it('test for normalizeTypes', async () => {
		const _lengthJArpIFS = -9.550324169740254;
		const _typesfkcYaPB = {
			"length": _lengthJArpIFS
	}
		const _returnValuegcQdfd1 = await normalizeTypes(_typesfkcYaPB)
	});

	it('test for normalizeTypes', async () => {
		const _arrayValueiwAteJK = undefined;
		const _arrayValuehG7MHac = [_arrayValueiwAteJK]
		const _arrayValuekArI0Y3 = undefined;
		const _arrayValueILyGLYo = true;
		const _typeskif4b58 = [_arrayValuehG7MHac, _arrayValuekArI0Y3, _arrayValueILyGLYo]
		const _returnValuegjbpAv7 = await normalizeTypes(_typeskif4b58)
	});
})