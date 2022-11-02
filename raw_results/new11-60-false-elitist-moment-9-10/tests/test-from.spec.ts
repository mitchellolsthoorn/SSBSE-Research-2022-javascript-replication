export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _isValidy8s6RB0 = false;
		const _timeiJ6833 = {
			"isValid": _isValidy8s6RB0
	}
		const _withoutSuffixO5rHfvX = false;
		const _returnValuekL0LPPr = await from(_timeiJ6833, _withoutSuffixO5rHfvX)
	});
})