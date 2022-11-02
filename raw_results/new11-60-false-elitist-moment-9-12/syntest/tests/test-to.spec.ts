export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValueZnufY9 = true;
		const _isValid2gUYTX = () => { return _returnValueZnufY9 };
		const _timeIelsAb = {
			"isValid": _isValid2gUYTX
	}
		const _withoutSuffixRNtUNLx = -0.47946993468905674;
		const _returnValuebSTCHUI = await to(_timeIelsAb, _withoutSuffixRNtUNLx)
	});
})