export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _object70LqVW = undefined;
		const _lengthnHRYQT8 = 3.6174890130513067;
		const _patho2XJA3y = {
			"length": _lengthnHRYQT8
	}
		const _defaultValueuPgJO61 = {
		
	}
		const _returnValueoyx8la = await result(_object70LqVW, _patho2XJA3y, _defaultValueuPgJO61)
	});

	it('test for result', async () => {
		const _objectIQoeN58 = undefined;
		const _arrayValuewWbXDip = -4.373285559776892;
		const _patheQzAEN1 = [_arrayValuewWbXDip]
		const _defaultValueQpgVLVg = {
		
	}
		const _returnValuePFbbW5a = await result(_objectIQoeN58, _patheQzAEN1, _defaultValueQpgVLVg)
	});

	it('test for result', async () => {
		const _objectyHgzB0x = undefined;
		const _pathcX5QIHL = undefined;
		const _returnValueiCY1RWj = "sTAFfwPhFi8PJsmD1ePPnpYz0NWbKoztNfLVL6nWhp9ww3yfIJPCVegLITPJAlru4og7mnU84wJcltGjqiQk1hkdx9";
		const _defaultValueaJuhPcA = () => { return _returnValueiCY1RWj };
		const _returnValueYnYeZLY = await result(_objectyHgzB0x, _pathcX5QIHL, _defaultValueaJuhPcA)
	});

	it('test for result', async () => {
		const _objectfhJYDT = undefined;
		const _pathTRF9M4e = []
		const _defaultValuewwCcnd = undefined;
		const _returnValueJp88kFp = await result(_objectfhJYDT, _pathTRF9M4e, _defaultValuewwCcnd)
	});
})