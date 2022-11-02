export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValueheSHkqh = false;
		const _indexOfHstFzT = () => { return _returnValueheSHkqh };
		const _typeXwdaEhS = {
			"indexOf": _indexOfHstFzT
	}
		const _returnValue8yOj5z = await normalizeType(_typeXwdaEhS)
	});

	it('test for normalizeType', async () => {
		const _arrayValuewDG3ax7 = false;
		const _arrayValueyNUJQqt = undefined;
		const _arrayValueu59MLQb = -2.1220819697238733;
		const _arrayValuelNbhQ1Z = [_arrayValuewDG3ax7, _arrayValueyNUJQqt, _arrayValueu59MLQb]
		const _arrayValueBrTRviV = 1.8778693988628348;
		const _arrayValueDVgWyKf = [_arrayValuelNbhQ1Z, _arrayValueBrTRviV]
		const _arrayValueEx4tv3b = 4.807853380016962;
		const _typeHn9JcWP = [_arrayValueDVgWyKf, _arrayValueEx4tv3b]
		const _returnValueNbPofHK = await normalizeType(_typeHn9JcWP)
	});
})