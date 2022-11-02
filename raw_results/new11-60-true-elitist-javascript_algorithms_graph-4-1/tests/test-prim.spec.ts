export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _returnValueShtK0RU = 8.022727294488764;
		const _isDirectedKj7Gy7p = () => { return _returnValueShtK0RU };
		const _arrayValueLFKswX3 = -0.738676883997659;
		const _arrayValuezyGHLAp = true;
		const _returnValueUTdkT2w = [_arrayValueLFKswX3, _arrayValuezyGHLAp]
		const _getAllVerticeskrAbBdc = () => { return _returnValueUTdkT2w };
		const _graphHMAadGI = {
			"isDirected": _isDirectedKj7Gy7p,
		"getAllVertices": _getAllVerticeskrAbBdc
	}
		const _returnValueS15qHAt = await prim(_graphHMAadGI)
	});

	it('test for prim', async () => {
		const _isDirectedG4p7hmh = false;
		const _graphmy1YRDm = new Graph(_isDirectedG4p7hmh)
		const _returnValueKT63nUW = await _graphmy1YRDm.getAllVertices()
		const _returnValueuvGBUMh = await _graphmy1YRDm.getAllEdges()
		const _returnValueduVl3nL = undefined;
		const _getKeyqjEe8g9 = () => { return _returnValueduVl3nL };
		const _newVertexeDCGDh = {
			"getKey": _getKeyqjEe8g9
	}
		const _returnValueUKBwYTs = await _graphmy1YRDm.addVertex(_newVertexeDCGDh)
		const _returnValueJkZiVfN = -3.3709999858177593;
		const _vertexKeyUllCWTA = () => { return _returnValueJkZiVfN };
		const _returnValuenVaIrKQ = await _graphmy1YRDm.getVertexByKey(_vertexKeyUllCWTA)
		const _returnValueLWJ691Z = await prim(_graphmy1YRDm)
	});

	it('test for prim', async () => {
		const _isDirectedKEH3HCG = false;
		const _graphFU3B7Or = new Graph(_isDirectedKEH3HCG)
		const _valueBbIFbE = "hvnfegRKFR3376zo45ppGBGKY6AsCLW8dmJL3Qtu1JcwsKGBxyozSIzim05GyxJ24uiGl1ORxMzYxDiHzdb3T3UMrQUBt";
		const _newVertexLUPfIcv = new GraphVertex(_valueBbIFbE)
		const _vertexfQgXlVV = true;
		const _returnValueeK7iAxp = await _newVertexLUPfIcv.hasNeighbor(_vertexfQgXlVV)
		const _returnValue76ntHF = await _graphFU3B7Or.addVertex(_newVertexLUPfIcv)
		const _returnValueIPwceA = await prim(_graphFU3B7Or)
	});
})