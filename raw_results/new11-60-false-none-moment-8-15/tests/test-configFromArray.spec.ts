export {}
import {configFromArray} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-array.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromArray', () => {
	it('test for configFromArray', async () => {
		const _arrayValueIOU1wIe = null;
		const _arrayValuemNESGv5 = false;
		const _arrayValueBUeDHAv = undefined;
		const _arrayValuePHhbKjd = null;
		const _returnValuehbHbDot = [_arrayValueBUeDHAv, _arrayValuePHhbKjd]
		const _arrayValuewnhCAvR = () => { return _returnValuehbHbDot };
		const _arrayValueLy3Zf0C = undefined;
		const _arrayValueWZn25QK = undefined;
		const _arrayValuesqWXWm = false;
		const _returnValueRhk7oZ0 = null;
		const _arrayValueoxvN2pl = () => { return _returnValueRhk7oZ0 };
		const _arrayValuecszo2iB = [_arrayValueWZn25QK, _arrayValuesqWXWm, _arrayValueoxvN2pl]
		const _arrayValueKAtEB9m = {
		
	}
		const _arrayValuefzaY2BD = "BtUzJIsgQ1giSS7i9";
		const _arrayValueOgfUDho = undefined;
		const _arrayValueqi0r4p9 = [_arrayValueOgfUDho]
		const _arrayValuenLJ80xL = [_arrayValuefzaY2BD, _arrayValueqi0r4p9]
		const _arrayValuenJZohQk = [_arrayValuecszo2iB, _arrayValueKAtEB9m, _arrayValuenLJ80xL]
		const _arrayValuea1WZDCw = [_arrayValuenJZohQk]
		const _arrayValuegUUYWL7 = [_arrayValuewnhCAvR, _arrayValueLy3Zf0C, _arrayValuea1WZDCw]
		const _configuqHTjeI = [_arrayValueIOU1wIe, _arrayValuemNESGv5, _arrayValuegUUYWL7]
		const _returnValueYDBh9jz = await configFromArray(_configuqHTjeI)
	});
})