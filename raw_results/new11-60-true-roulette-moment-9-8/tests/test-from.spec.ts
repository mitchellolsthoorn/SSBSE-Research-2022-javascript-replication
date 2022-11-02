export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueIwhcPiB = false;
		const _isValidjVe0pis = () => { return _returnValueIwhcPiB };
		const _returnValueGaw13C = -3.0408809548563065;
		const _valueOfVZAByP7 = () => { return _returnValueGaw13C };
		const _cloneEUZrCuE = 4.725721878286507;
		const _timevDA9LBF = {
			"isValid": _isValidjVe0pis,
		"valueOf": _valueOfVZAByP7,
		"clone": _cloneEUZrCuE
	}
		const _withoutSuffixOBfgnwi = true;
		const _returnValueSpsCvL = await from(_timevDA9LBF, _withoutSuffixOBfgnwi)
	});
})