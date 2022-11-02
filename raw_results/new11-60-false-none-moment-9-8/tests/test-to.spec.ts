export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _arrayValueBD5OFe = "ghrfphnUuBKUFHgpELkEESocq2eX75lBAs1x1LwiBg";
		const _arrayValueko7p2Kc = "IU2Ok6T9Fcsi3byY8SJmCg6XKmXxVFCzfmi87LheyDo9n9s9bIZUNBGvbejdKzH";
		const _timeMAlvh2 = [_arrayValueBD5OFe, _arrayValueko7p2Kc]
		const _returnValueFimYDMK = -9.963571683015843;
		const _withoutSuffixCazYR7m = () => { return _returnValueFimYDMK };
		const _returnValueUJ4F5r = await to(_timeMAlvh2, _withoutSuffixCazYR7m)
	});
})