export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _inputLqBMKpb = "mmTJ78Tc7QdcVtzSvcoidQ";
		const _unitsCk4kf7V = null;
		const _returnValueI4Myl2x = await isBefore(_inputLqBMKpb, _unitsCk4kf7V)
	});

	it('test for isBefore', async () => {
		const _inputsQksMjG = null;
		const _unitsaBiNFRR = false;
		const _returnValuel1tT1R3 = await isBefore(_inputsQksMjG, _unitsaBiNFRR)
	});
})