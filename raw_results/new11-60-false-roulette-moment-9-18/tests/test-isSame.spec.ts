export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _input4Jys5r = "6ZvBSyEMKWspco";
		const _unitsJDFuthb = "fTKeTXXqnoMQ7en2NTpM7AakimuoLjuErAbztT3ldcATL";
		const _returnValuexrAa7f = await isSame(_input4Jys5r, _unitsJDFuthb)
	});

	it('test for isSame', async () => {
		const _inputJ95XbSG = -9.95082501629356;
		const _unitshrHRRUe = {
		
	}
		const _returnValuegABD0DK = await isSame(_inputJ95XbSG, _unitshrHRRUe)
	});
})