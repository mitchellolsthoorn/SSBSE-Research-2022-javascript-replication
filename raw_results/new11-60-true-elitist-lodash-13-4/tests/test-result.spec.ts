export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectFQT4pwD = undefined;
		const _lengthwMpcEeY = 8.003485160304454;
		const _pathKptZlfb = {
			"length": _lengthwMpcEeY
	}
		const _defaultValuemI9xbP7 = {
		
	}
		const _returnValuenhy47F4 = await result(_objectFQT4pwD, _pathKptZlfb, _defaultValuemI9xbP7)
	});

	it('test for result', async () => {
		const _objectepLJvV = undefined;
		const _pathJ1PLpaD = undefined;
		const _defaultValuetTk4Qwi = "KTEahfUFTjiqIQs5LyIXrCEviYfJgsTyZVW64ic5H9WDhmsepKvHITWXMJiOTYpuPz6DEf";
		const _returnValuemGx1C2M = await result(_objectepLJvV, _pathJ1PLpaD, _defaultValuetTk4Qwi)
	});

	it('test for result', async () => {
		const _objectH6EIf20 = undefined;
		const _pathHfbCv03 = []
		const _defaultValueoHx2oY1 = {
		
	}
		const _returnValueTmRU20X = await result(_objectH6EIf20, _pathHfbCv03, _defaultValueoHx2oY1)
	});

	it('test for result', async () => {
		const _objectex6MWqS = undefined;
		const _pathXEZn9gX = null;
		const _returnValueRjv8RDX = "jvBOoW1nKWRB37AqJgjvbG3i4f88MADfSB7PSW9JQUt5m63NqON4zW8aHg2";
		const _defaultValueBKmZBv7 = () => { return _returnValueRjv8RDX };
		const _returnValuen6YsoR = await result(_objectex6MWqS, _pathXEZn9gX, _defaultValueBKmZBv7)
	});
})