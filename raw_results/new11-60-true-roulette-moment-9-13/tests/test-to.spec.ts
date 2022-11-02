export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const __offsetvmOR17c = undefined;
		const __isUTCK1mcdy = true;
		const __changeInProgressCbzY8vc = null;
		const _returnValueB7zxLAf = undefined;
		const _isValidh7shCjX = () => { return _returnValueB7zxLAf };
		const _returnValueDuu8L4a = {
		
	}
		const _addBeM9aZx = () => { return _returnValueDuu8L4a };
		const _timeT1XdRfq = {
			"_offset": __offsetvmOR17c,
		"_isUTC": __isUTCK1mcdy,
		"_changeInProgress": __changeInProgressCbzY8vc,
		"isValid": _isValidh7shCjX,
		"add": _addBeM9aZx
	}
		const _arrayValuerwE0gmp = null;
		const _arrayValueICgymQ4 = undefined;
		const _withoutSuffixcnAe1P1 = [_arrayValuerwE0gmp, _arrayValueICgymQ4]
		const _returnValueKX41XIV = await to(_timeT1XdRfq, _withoutSuffixcnAe1P1)
	});
})