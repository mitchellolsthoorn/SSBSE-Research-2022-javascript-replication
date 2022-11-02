export {}
import {isAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAfter', () => {
	it('test for isAfter', async () => {
		const _inputLvhpNmN = undefined;
		const _unitsDUn3tBU = "nM9ktH93iKUVODmkAVDFsDVeqNDyUTIOBOf9GkDmJCCQ96ocr0kvNLryJICnTt8Vpi2a";
		const _returnValueGZ2MkOW = await isAfter(_inputLvhpNmN, _unitsDUn3tBU)
	});

	it('test for isAfter', async () => {
		const _inputHwf6pNK = false;
		const _unitsAlS9yU9 = false;
		const _returnValueK1D2DPM = await isAfter(_inputHwf6pNK, _unitsAlS9yU9)
	});
})