export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueFCgyTGm = undefined;
		const _arrayValueJ8T1sQx = () => { return _returnValueFCgyTGm };
		const _arrayValueTaA1J1 = -7.343929831520995;
		const _graphZEyDcmA = [_arrayValueJ8T1sQx, _arrayValueTaA1J1]
		const _returnValueWdg2G0s = await stronglyConnectedComponents(_graphZEyDcmA)
	});
})