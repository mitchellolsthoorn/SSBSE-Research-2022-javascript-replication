export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputH0sUVjn = "i9vnJ2dtuvrHaPjItCvx5Dlc76oCUTA2LuKP2eNxLlwBGzRlCyi48cmDwlEXsj1PtiDWpNRU0xCINw2nTs4M4gugF";
		const _unitsL4dUiyN = {
		
	}
		const _returnValuetRIRJBP = await isSame(_inputH0sUVjn, _unitsL4dUiyN)
	});

	it('test for isSame', async () => {
		const _inputdtecFfj = false;
		const _unitsG6d8NI = {
		
	}
		const _returnValueIaSL7DR = await isSame(_inputdtecFfj, _unitsG6d8NI)
	});
})