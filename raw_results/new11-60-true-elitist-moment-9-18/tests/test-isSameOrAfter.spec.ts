export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _arrayValueLaZasVC = "gjqfsqvaEOUIKprBrkGb7XhpKN18zVWVvtBezehO5THTCN41hxvwRtfZNwFaUQ9mpETWaVXM8w1nlKe3EVm7j4l2kSiwzALcXk7";
		const _inputsVa5TmY = [_arrayValueLaZasVC]
		const _arrayValuerdAcdOl = "jlVmTJaCg4yxIue13Bc5UV4jGuejboHW2s3EpgztDjeUT86AsYel7Qx";
		const _arrayValueMGT0H60 = false;
		const _arrayValueXQNlatv = "mcbxmuLN6NVyv4U6I32JWynQsbS0SXsf5EijeIRB5mP1bUTRkt4Dt3BX";
		const _arrayValuePTcPrcU = undefined;
		const _arrayValuewF9qqRT = [_arrayValuePTcPrcU]
		const _arrayValueovZblp5 = [_arrayValuewF9qqRT]
		const _arrayValueFPnroL0 = [_arrayValueXQNlatv, _arrayValueovZblp5]
		const _unitsNz9ZBlW = [_arrayValuerdAcdOl, _arrayValueMGT0H60, _arrayValueFPnroL0]
		const _returnValue19dPT5 = await isSameOrAfter(_inputsVa5TmY, _unitsNz9ZBlW)
	});
})