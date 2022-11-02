export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValueKYvvH56 = false;
		const _isValidC8UaMAB = () => { return _returnValueKYvvH56 };
		const _timepBdvRQR = {
			"isValid": _isValidC8UaMAB
	}
		const _withoutSuffixq6R0cNM = undefined;
		const _returnValuecrbeDr4 = await to(_timepBdvRQR, _withoutSuffixq6R0cNM)
	});
})