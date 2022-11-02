export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _returnValuepwZiWsR = true;
		const _inputN40ylZx = () => { return _returnValuepwZiWsR };
		const _arrayValueAjzfJ2Q = {
		
	}
		const _arrayValuebCRyWqF = "pgUEqNNGEVhJEtjhjPDyyA2Hfh9pdjTe96H6cqfQmSC9nQJojAXK2hNht1HC5BiYZT62gMDbxUss2Khf3U";
		const _arrayValueFwq9g6y = [_arrayValueAjzfJ2Q, _arrayValuebCRyWqF]
		const _arrayValueNKEyb7u = {
		
	}
		const _unitsAjPI1Py = [_arrayValueFwq9g6y, _arrayValueNKEyb7u]
		const _returnValueMAPmjFF = await isSameOrBefore(_inputN40ylZx, _unitsAjPI1Py)
	});
})