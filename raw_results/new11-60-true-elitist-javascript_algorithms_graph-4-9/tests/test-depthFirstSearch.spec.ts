export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _arrayValuemk6ty1 = undefined;
		const _arrayValueOlaks9Z = null;
		const _arrayValuejrpsaY9 = undefined;
		const _arrayValuebh1D7a = {
		
	}
		const _graphJm9Qqtz = [_arrayValuemk6ty1, _arrayValueOlaks9Z, _arrayValuejrpsaY9, _arrayValuebh1D7a]
		const _startVertexTShMIXz = -6.621667874149184;
		const _callbacksryJncgq = 2.374776583538212;
		const _returnValueWMNBmis = await depthFirstSearch(_graphJm9Qqtz, _startVertexTShMIXz, _callbacksryJncgq)
	});

	it('test for depthFirstSearch', async () => {
		const _returnValuer1AGir = undefined;
		const _graphkK88RDq = () => { return _returnValuer1AGir };
		const _startVertexVR4YMlX = false;
		const _callbackslLdarWW = undefined;
		const _returnValuebfpnvmV = await depthFirstSearch(_graphkK88RDq, _startVertexVR4YMlX, _callbackslLdarWW)
	});
})