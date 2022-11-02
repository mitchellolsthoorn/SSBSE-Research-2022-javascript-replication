export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValueEFZRtUY = true;
		const _isValidJbPoB5 = () => { return _returnValueEFZRtUY };
		const _returnValueRw1HKFq = false;
		const _clonecEP87V = () => { return _returnValueRw1HKFq };
		const _returnValueQd08M0b = -5.230158326080663;
		const _toDateTYT0r9x = () => { return _returnValueQd08M0b };
		const _returnValueC8CL8gP = false;
		const _valueOfiKuQzd = () => { return _returnValueC8CL8gP };
		const _returnValuet6blXCD = null;
		const _returnValueA5Zjr87 = () => { return _returnValuet6blXCD };
		const _utcOffsetEITlAng = () => { return _returnValueA5Zjr87 };
		const _timeWFX89vL = {
			"isValid": _isValidJbPoB5,
		"clone": _clonecEP87V,
		"toDate": _toDateTYT0r9x,
		"valueOf": _valueOfiKuQzd,
		"utcOffset": _utcOffsetEITlAng
	}
		const _withoutSuffixsVXs5c = null;
		const _returnValued9g5QjU = await to(_timeWFX89vL, _withoutSuffixsVXs5c)
	});
})