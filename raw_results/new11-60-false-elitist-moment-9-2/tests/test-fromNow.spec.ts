export {}
import {fromNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('fromNow', () => {
	it('test for fromNow', async () => {
		const _arrayValuevHuZQyY = false;
		const _arrayValueVcI1Waw = true;
		const _arrayValuexz3R5fV = -3.2952146145789794;
		const _returnValuehPn7qxj = true;
		const _arrayValueyjAVZ67 = () => { return _returnValuehPn7qxj };
		const _arrayValuekwX7FxG = [_arrayValuevHuZQyY, _arrayValueVcI1Waw, _arrayValuexz3R5fV, _arrayValueyjAVZ67]
		const _arrayValuegi4Q30h = true;
		const _withoutSuffixAaLksEi = [_arrayValuekwX7FxG, _arrayValuegi4Q30h]
		const _returnValuek8NQJO5 = await fromNow(_withoutSuffixAaLksEi)
	});
})