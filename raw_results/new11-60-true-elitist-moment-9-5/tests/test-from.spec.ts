export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValuefAYlKP0 = undefined;
		const _isValidWf6ULO0 = () => { return _returnValuefAYlKP0 };
		const _timedWnvYg = {
			"isValid": _isValidWf6ULO0
	}
		const _withoutSuffixwxV7yc3 = "0goKxZjODAg7jpISVtlMkOYtWnqIGieShcuBW4RQWKr2sAtk";
		const _returnValueOT5Vblz = await from(_timedWnvYg, _withoutSuffixwxV7yc3)
	});
})