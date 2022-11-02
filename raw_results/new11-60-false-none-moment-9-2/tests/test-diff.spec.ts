export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _arrayValueY6Jk6WR = null;
		const _arrayValuebI6sHvm = true;
		const _arrayValuep2b8FlB = false;
		const _arrayValuelV7ZoY = undefined;
		const _inputr3iEaZv = [_arrayValueY6Jk6WR, _arrayValuebI6sHvm, _arrayValuep2b8FlB, _arrayValuelV7ZoY]
		const _returnValuebjzLP1h = true;
		const _arrayValuehR675HT = () => { return _returnValuebjzLP1h };
		const _unitsEuZjZNU = [_arrayValuehR675HT]
		const _arrayValuephYc4qg = undefined;
		const _arrayValueO2sRx4I = null;
		const _arrayValueiJVlfge = [_arrayValuephYc4qg, _arrayValueO2sRx4I]
		const _arrayValueIi0TZpY = true;
		const _arrayValuex81T4y = {
		
	}
		const _arrayValuete9dWPo = "QzB5YCdKc";
		const _arrayValueKCRznWg = [_arrayValueIi0TZpY, _arrayValuex81T4y, _arrayValuete9dWPo]
		const _arrayValueZsdBgVz = undefined;
		const _asFloatSbesWdR = [_arrayValueiJVlfge, _arrayValueKCRznWg, _arrayValueZsdBgVz]
		const _returnValueZQAysEB = await diff(_inputr3iEaZv, _unitsEuZjZNU, _asFloatSbesWdR)
	});
})