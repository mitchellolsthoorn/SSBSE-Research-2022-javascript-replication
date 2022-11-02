export {}
import {isAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAfter', () => {
	it('test for isAfter', async () => {
		const _inputHuDsMFt = {
		
	}
		const _returnValueZ6gVGIB = false;
		const _unitsHTAJyp3 = () => { return _returnValueZ6gVGIB };
		const _returnValuey7fH0Ye = await isAfter(_inputHuDsMFt, _unitsHTAJyp3)
	});

	it('test for isAfter', async () => {
		const _inputGNPQYjx = true;
		const _unitsQXHuGgx = {
		
	}
		const _returnValuehvvYzVi = await isAfter(_inputGNPQYjx, _unitsQXHuGgx)
	});
})