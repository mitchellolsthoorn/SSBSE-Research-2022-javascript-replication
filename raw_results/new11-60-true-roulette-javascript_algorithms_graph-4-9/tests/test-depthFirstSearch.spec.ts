export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graphY2d1hf = -3.6597051661534294;
		const _arrayValuekOtwbeg = undefined;
		const _arrayValuesrU3qsO = {
		
	}
		const _arrayValuev74g4f = null;
		const _startVertexwtDBuoE = [_arrayValuekOtwbeg, _arrayValuesrU3qsO, _arrayValuev74g4f]
		const _callbacksBR8Ef0C = 5.651530779311962;
		const _returnValueuhBpW3 = await depthFirstSearch(_graphY2d1hf, _startVertexwtDBuoE, _callbacksBR8Ef0C)
	});

	it('test for depthFirstSearch', async () => {
		const _graphuaDfZby = -6.816246731434709;
		const _startVertexvQc4TY8 = true;
		const _arrayValueD052zWd = false;
		const _returnValueDOk3jpY = 6.073535870529561;
		const _arrayValueAkeIJrE = () => { return _returnValueDOk3jpY };
		const _callbacksPlyxDaw = [_arrayValueD052zWd, _arrayValueAkeIJrE]
		const _returnValuePVgAsTx = await depthFirstSearch(_graphuaDfZby, _startVertexvQc4TY8, _callbacksPlyxDaw)
	});
})