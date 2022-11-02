export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _arrayValuey1DCyeJ = undefined;
		const _arrayValuesk1VHq0 = null;
		const _arrayValueIeodvmj = [_arrayValuesk1VHq0]
		const _arrayValuedF055t = false;
		const _timeUBChHl = [_arrayValuey1DCyeJ, _arrayValueIeodvmj, _arrayValuedF055t]
		const _withoutSuffixN3wcxli = null;
		const _returnValuetfvpqc7 = await to(_timeUBChHl, _withoutSuffixN3wcxli)
	});
})