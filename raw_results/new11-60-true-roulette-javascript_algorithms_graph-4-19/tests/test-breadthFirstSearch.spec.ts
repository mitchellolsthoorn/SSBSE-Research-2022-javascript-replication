export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _arrayValueOWIusXy = 8.317829742022347;
		const _arrayValueUqGBUM9 = null;
		const _arrayValueDQhXuyR = 3.4507100298703683;
		const _graphHV6ZVn = [_arrayValueOWIusXy, _arrayValueUqGBUM9, _arrayValueDQhXuyR]
		const _startVertexIKh7Qo = undefined;
		const _originalCallbacksOXTOiaP = []
		const _returnValueZ1GfaL7 = await breadthFirstSearch(_graphHV6ZVn, _startVertexIKh7Qo, _originalCallbacksOXTOiaP)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueZpeJ6SB = {
		
	}
		const _graphXzP7Ylx = new GraphVertex(_valueZpeJ6SB)
		const _edgeZjoz8aX = 3.192927172307755;
		const _returnValueuFboS0 = await _graphXzP7Ylx.addEdge(_edgeZjoz8aX)
		const _returnValuetlQqqtK = await _graphXzP7Ylx.getDegree()
		const _startVertexsM6Q2rE = false;
		const _originalCallbacksjkVD1Wf = undefined;
		const _returnValueKQjjsY = await breadthFirstSearch(_graphXzP7Ylx, _startVertexsM6Q2rE, _originalCallbacksjkVD1Wf)
	});

	it('test for breadthFirstSearch', async () => {
		const _valuecSHh6w = -0.20783309389262605;
		const _graphOmBJXry = new GraphVertex(_valuecSHh6w)
		const _vertexWfBPrs6 = -2.784976025625527;
		const _returnValuez3bFOM1 = await _graphOmBJXry.findEdge(_vertexWfBPrs6)
		const _returnValuen6dnX4 = await _graphOmBJXry.getKey()
		const _returnValueivIbn22 = await _graphOmBJXry.getKey()
		const _returnValueDQWHby7 = await _graphOmBJXry.deleteAllEdges()
		const _startVertexQJsHuG = false;
		const _returnValueKJvbVa8 = 2.5167687840609503;
		const _arrayValuejZWe8cC = () => { return _returnValueKJvbVa8 };
		const _arrayValueW01UJHD = "P57kRB5v2bGUIurhAznjqvLZ3zDhFtT6hQ7SJNpJU";
		const _arrayValueOjQmtqo = true;
		const _originalCallbacksxkOmIhh = [_arrayValuejZWe8cC, _arrayValueW01UJHD, _arrayValueOjQmtqo]
		const _returnValueL1zFlxA = await breadthFirstSearch(_graphOmBJXry, _startVertexQJsHuG, _originalCallbacksxkOmIhh)
	});
})