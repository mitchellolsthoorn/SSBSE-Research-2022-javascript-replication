export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _inputHyMcVFs = undefined;
		const _arrayValueqK3LyW1 = null;
		const _arrayValueVpe9Kt = null;
		const _arrayValuep6CvOi = 0.4869518927431571;
		const _unitshw4R9zq = [_arrayValueqK3LyW1, _arrayValueVpe9Kt, _arrayValuep6CvOi]
		const _returnValuebF3pdXT = await isBefore(_inputHyMcVFs, _unitshw4R9zq)
	});

	it('test for isBefore', async () => {
		const _inputzxQxFpI = 5.990496463853676;
		const _unitsE8mF1ji = null;
		const _returnValueA7spW5 = await isBefore(_inputzxQxFpI, _unitsE8mF1ji)
	});
})