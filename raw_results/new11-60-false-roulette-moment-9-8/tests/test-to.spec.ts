export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValueMDe6zxH = false;
		const _isValidDrsgA1h = () => { return _returnValueMDe6zxH };
		const _timeCy4hWO9 = {
			"isValid": _isValidDrsgA1h
	}
		const _withoutSuffixFc75nYD = []
		const _returnValueASLafH1 = await to(_timeCy4hWO9, _withoutSuffixFc75nYD)
	});
})