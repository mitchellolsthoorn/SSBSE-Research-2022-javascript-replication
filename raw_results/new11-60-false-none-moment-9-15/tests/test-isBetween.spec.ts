export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromr0MvAf9 = null;
		const _tolkat6aL = true;
		const _returnValueUWhn97O = null;
		const _unitsukWRtJF = () => { return _returnValueUWhn97O };
		const _arrayValueP256glX = false;
		const _arrayValuem8krMH = false;
		const _arrayValueCulYnzf = false;
		const _arrayValueany40LC = undefined;
		const _returnValueCd4Q07c = [_arrayValueP256glX, _arrayValuem8krMH, _arrayValueCulYnzf, _arrayValueany40LC]
		const _inclusivityxqw5ss4 = () => { return _returnValueCd4Q07c };
		const _returnValuekiqIIJj = await isBetween(_fromr0MvAf9, _tolkat6aL, _unitsukWRtJF, _inclusivityxqw5ss4)
	});
})