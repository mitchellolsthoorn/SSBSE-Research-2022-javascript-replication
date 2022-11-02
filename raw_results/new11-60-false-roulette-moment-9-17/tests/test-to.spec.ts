export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValueCxyuQ5g = false;
		const __isDSTShiftedOcQiV8B = () => { return _returnValueCxyuQ5g };
		const _arrayValuesfdxDFe = "6DaVGdvh8DoHF7JyNcvDPhVdBeTyIo7gTBYbss7onAXdNB5PuphHimT2dc8afmY0v55xdkvrhEhtQT";
		const _arrayValueRq6ua5h = undefined;
		const _returnValue6YkZa9 = [_arrayValuesfdxDFe, _arrayValueRq6ua5h]
		const _isValidR3m5rqh = () => { return _returnValue6YkZa9 };
		const _timelvqLR7Q = {
			"_isDSTShifted": __isDSTShiftedOcQiV8B,
		"isValid": _isValidR3m5rqh
	}
		const _withoutSuffixZvDHCLd = null;
		const _returnValueQ20GMvq = await to(_timelvqLR7Q, _withoutSuffixZvDHCLd)
	});
})