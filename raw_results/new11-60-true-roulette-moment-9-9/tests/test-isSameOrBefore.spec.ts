export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputzFN4P5Y = null;
		const _unitsrK8Wsxf = "3qee2kCJ5trvmorOLhVVfnLp8vBMJkDIblNjw4TPVAw16x0XtqyoTY1nsjtnRilqXc0BKJiZQ8y2UsllgRpRW86HsBuLM";
		const _returnValueo9sKnJq = await isSameOrBefore(_inputzFN4P5Y, _unitsrK8Wsxf)
	});
})