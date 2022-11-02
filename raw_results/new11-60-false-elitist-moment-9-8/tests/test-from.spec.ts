export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueGUU96zK = true;
		const _isValidK6WKITK = () => { return _returnValueGUU96zK };
		const _timet9EEuY = {
			"isValid": _isValidK6WKITK
	}
		const _arrayValueUPhqc5Z = true;
		const _withoutSuffixRBLmjqX = [_arrayValueUPhqc5Z]
		const _returnValue4AXfL5 = await from(_timet9EEuY, _withoutSuffixRBLmjqX)
	});
})