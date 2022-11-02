export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromtTPf0G0 = null;
		const _returnValuevYN5uA = null;
		const _toVDgFr9B = () => { return _returnValuevYN5uA };
		const _unitsnXpLvt2 = -0.8977407281039742;
		const _returnValueiqWrVBX = "e2mgvNRO4JNIy97wCsb7iDcX1fz3YZTT7";
		const _inclusivityKeHwfs2 = () => { return _returnValueiqWrVBX };
		const _returnValueCQ1Cm9s = await isBetween(_fromtTPf0G0, _toVDgFr9B, _unitsnXpLvt2, _inclusivityKeHwfs2)
	});
})