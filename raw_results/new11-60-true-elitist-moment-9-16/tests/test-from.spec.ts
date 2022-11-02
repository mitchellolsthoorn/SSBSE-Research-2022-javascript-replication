export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValueUhMYfJy = undefined;
		const _isValidocjIbsT = () => { return _returnValueUhMYfJy };
		const _timeqDrT7EG = {
			"isValid": _isValidocjIbsT
	}
		const _withoutSuffixeXFi5QX = undefined;
		const _returnValuewC4Lw1u = await from(_timeqDrT7EG, _withoutSuffixeXFi5QX)
	});
})