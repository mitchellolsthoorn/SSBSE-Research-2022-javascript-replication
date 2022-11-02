export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _arrayValueyB90KoM = undefined;
		const _arrayValuex2sSPu = [_arrayValueyB90KoM]
		const _arrayValuedMWUSw2 = -8.406620071968826;
		const _inputu2Iw2vO = [_arrayValuex2sSPu, _arrayValuedMWUSw2]
		const _returnValueh9NFPjl = 5.634952360466176;
		const _unitsnW7Zzmz = () => { return _returnValueh9NFPjl };
		const _returnValuec3h5IsA = await isSame(_inputu2Iw2vO, _unitsnW7Zzmz)
	});

	it('test for isSame', async () => {
		const _inputwHqUIrC = null;
		const _unitsNNQxDOl = "NVq5QJvaokBzotxe4RR8R9Y2A5wOKmGwJdd5JldtvrM8xmi";
		const _returnValuejVcQYsL = await isSame(_inputwHqUIrC, _unitsNNQxDOl)
	});
})