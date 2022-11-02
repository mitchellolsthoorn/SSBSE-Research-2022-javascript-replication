export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _reverselLTG09P = null;
		const _graphZyG4PxW = {
			"reverse": _reverselLTG09P
	}
		const _returnValueqjtmsLC = await stronglyConnectedComponents(_graphZyG4PxW)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedeZweS5m = true;
		const _graphOUlX9wR = new Graph(_isDirectedeZweS5m)
		const _returnValueXTWUSNH = await _graphOUlX9wR.getWeight()
		const _returnValueB2ACdGi = await _graphOUlX9wR.toString()
		const _returnValuezzoluXt = await stronglyConnectedComponents(_graphOUlX9wR)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedLW7f3x8 = false;
		const _graphnnSleHj = new Graph(_isDirectedLW7f3x8)
		const _valueWjQFt1A = "s3252cOjOWPJA7KHIbSzbAL8U0zvwGW4";
		const _newVertexIMSrATM = new GraphVertex(_valueWjQFt1A)
		const _arrayValueWXh5Ld0 = true;
		const _arrayValueD01XO8j = undefined;
		const _arrayValuecuu0Iw9 = "8uWtbn1xH0MKl7C4APV4KDZMR2fGCnQCGrK4ZmcIUqkkz53ALz3hXahnnvAY81OsVKKe45zTpLOCWKI34R8Xn2e";
		const _arrayValueMckKV9S = null;
		const _arrayValueWTKozh = false;
		const _arrayValuern5rFZ = [_arrayValuecuu0Iw9, _arrayValueMckKV9S, _arrayValueWTKozh]
		const _arrayValue7I46NA = [_arrayValuern5rFZ]
		const _edgelnMa2dW = [_arrayValueWXh5Ld0, _arrayValueD01XO8j, _arrayValue7I46NA]
		const _returnValueSfcQNGm = await _newVertexIMSrATM.deleteEdge(_edgelnMa2dW)
		const _returnValueXnhXXc = await _newVertexIMSrATM.getDegree()
		const _returnValueDqbSxhj = await _newVertexIMSrATM.deleteAllEdges()
		const _returnValueOVjiErS = await _graphnnSleHj.addVertex(_newVertexIMSrATM)
		const _returnValued2JNLsS = await _graphnnSleHj.getAllVertices()
		const _returnValuemdofA0 = await _graphnnSleHj.getAllEdges()
		const _returnValueBtYJJDg = -4.600465571961551;
		const _getKeygzvgzrb = () => { return _returnValueBtYJJDg };
		const _startVertexhymvPZK = {
			"getKey": _getKeygzvgzrb
	}
		const _endVertexQ0OOI3o = -2.1089856489675416;
		const _returnValueMaFMgfy = await _graphnnSleHj.findEdge(_startVertexhymvPZK, _endVertexQ0OOI3o)
		const _returnValuez7fWiDv = await stronglyConnectedComponents(_graphnnSleHj)
	});
})