export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _arrayValuelYPnwXC = "yvU8pMwVy861xLlgrCMxaA2qmqNhzXm8r6bfQY0VLYlV6XhaAFDEj4JOWVVuQt8DZ6idr8C6Y";
		const _returnValueLhexVf8 = [_arrayValuelYPnwXC]
		const _isValidHkzTv4s = () => { return _returnValueLhexVf8 };
		const _timetXVXBOS = {
			"isValid": _isValidHkzTv4s
	}
		const _withoutSuffixA4ccdty = undefined;
		const _returnValuefIYEQtt = await from(_timetXVXBOS, _withoutSuffixA4ccdty)
	});
})