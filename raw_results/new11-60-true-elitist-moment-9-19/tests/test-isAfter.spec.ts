export {}
import {isAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAfter', () => {
	it('test for isAfter', async () => {
		const _inputk1rMPP9 = "BvcMo1dRtDILREq1kQ1N6tALsh1b37GzbWyF5PGpUwba";
		const _unitsrLzkRUz = {
		
	}
		const _returnValueZsIda2o = await isAfter(_inputk1rMPP9, _unitsrLzkRUz)
	});

	it('test for isAfter', async () => {
		const _inputHvdnFmv = 7.671809642866489;
		const _arrayValueJrHQKjH = 1.6986170394144988;
		const _arrayValueMv2P7l = -9.026338130219244;
		const _arrayValuerGgsteg = true;
		const _arrayValueHKeVAK0 = undefined;
		const _arrayValueDsIX1v1 = [_arrayValueMv2P7l, _arrayValuerGgsteg, _arrayValueHKeVAK0]
		const _arrayValueDXBHR6 = undefined;
		const _returnValueAss72v2 = [_arrayValueJrHQKjH, _arrayValueDsIX1v1, _arrayValueDXBHR6]
		const _unitsRiOeH9Q = () => { return _returnValueAss72v2 };
		const _returnValueCCH0Bx6 = await isAfter(_inputHvdnFmv, _unitsRiOeH9Q)
	});
})