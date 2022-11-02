export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _arrayValueRNOiTA = 8.288591751231856;
		const _arrayValueu0oH1ht = 9.684813034906796;
		const _graphncJ2YSj = [_arrayValueRNOiTA, _arrayValueu0oH1ht]
		const _returnValueou7tF4O = await eulerianPath(_graphncJ2YSj)
	});

	it('test for eulerianPath', async () => {
		const _arrayValueyrnvieO = false;
		const _arrayValuemUqATt = "81ENA4Lrmr6wKlKf9UbMRsxoPdcDk2MJtyEDdBCBbQwQ2aGCazemNZdC1Uc8AQzi6uvfbEve3Dm7mL8nxjZ";
		const _arrayValueRr8me8h = undefined;
		const _arrayValueQXPSc4m = [_arrayValuemUqATt, _arrayValueRr8me8h]
		const _isDirectedPSjknu = [_arrayValueyrnvieO, _arrayValueQXPSc4m]
		const _graphK0fNnGP = new Graph(_isDirectedPSjknu)
		const _returnValuejGQyKBz = await _graphK0fNnGP.reverse()
		const _returnValueTL69n0P = await _graphK0fNnGP.getWeight()
		const _arrayValuewmkAIdT = 7.473342921738009;
		const _arrayValueYsds8zX = null;
		const _arrayValueQbQedJg = -0.10555868185500294;
		const _arrayValuexebUv31 = false;
		const _vertexKeycQ5mGd = [_arrayValuewmkAIdT, _arrayValueYsds8zX, _arrayValueQbQedJg, _arrayValuexebUv31]
		const _returnValuev0IfYog = await _graphK0fNnGP.getVertexByKey(_vertexKeycQ5mGd)
		const _returnValue0ch5FY = await _graphK0fNnGP.getAdjacencyMatrix()
		const _vertexKeyZxqzpdu = true;
		const _returnValuepLOVdAZ = await _graphK0fNnGP.getVertexByKey(_vertexKeyZxqzpdu)
		const _returnValuePQ5ImRu = await eulerianPath(_graphK0fNnGP)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedngmZtRq = false;
		const _graphHOxTlBO = new Graph(_isDirectedngmZtRq)
		const _valueyyalO67 = "vtLB9PWQRKnmaCraQfEHWDa4fYJgjmhp0pAvsxVyGM";
		const _newVertexUdjrPrS = new GraphVertex(_valueyyalO67)
		const _returnValuegRIJtbh = await _newVertexUdjrPrS.getNeighbors()
		const _returnValuelRjGGih = await _newVertexUdjrPrS.deleteAllEdges()
		const _arrayValueaSH5nb = true;
		const _arrayValuePbmEl5H = "oot961wySFVpDeoD9QEmdScE834F9DqbAy8oqi0MKrakaQjpgQP4iWUVz1e8ZhVDLOzcyjxqlBSz9";
		const _requiredEdgeJbpMnoI = [_arrayValueaSH5nb, _arrayValuePbmEl5H]
		const _returnValueDZVhv6k = await _newVertexUdjrPrS.hasEdge(_requiredEdgeJbpMnoI)
		const _edgedj1r3b = "3QHHuaBsJrVEh0NoTNB";
		const _returnValueQmvIDDa = await _newVertexUdjrPrS.addEdge(_edgedj1r3b)
		const _returnValueLq8hKZz = await _newVertexUdjrPrS.getEdges()
		const _returnValueWpW6DaI = await _graphHOxTlBO.addVertex(_newVertexUdjrPrS)
		const _returnValuemlWr2HA = await _graphHOxTlBO.getVerticesIndices()
		const _returnValueshbwFBJ = await _graphHOxTlBO.reverse()
		const _returnValuezlGT60 = await _graphHOxTlBO.getAllEdges()
		const _returnValuekSjnK4f = await eulerianPath(_graphHOxTlBO)
	});
})