export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueLUfSLtt = null;
		const _returnValuehZaV3GJ = () => { return _returnValueLUfSLtt };
		const _getAllVerticesFXoyRd2 = () => { return _returnValuehZaV3GJ };
		const _graphLZaqFSF = {
			"getAllVertices": _getAllVerticesFXoyRd2
	}
		const _returnValuedmEBK7M = await detectDirectedCycle(_graphLZaqFSF)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedH5yUaSU = -1.0679280497362829;
		const _graphJR5TGO3 = new Graph(_isDirectedH5yUaSU)
		const _returnValuet36ylxK = await _graphJR5TGO3.getAdjacencyMatrix()
		const _arrayValuefNHQecT = undefined;
		const _valueTvRN7Lb = [_arrayValuefNHQecT]
		const _vertexFPIxK5i = new GraphVertex(_valueTvRN7Lb)
		const _returnValueNPd0ds = await _vertexFPIxK5i.getDegree()
		const _vertexZf0dwF = false;
		const _returnValueOdEItzD = await _vertexFPIxK5i.hasNeighbor(_vertexZf0dwF)
		const _returnValueHBIbq2P = await _graphJR5TGO3.getNeighbors(_vertexFPIxK5i)
		const _vertexKeyFHh50dq = "57K4J8b6mrdcxpVjJxAKAOiK5sT046f9Hh7nL7asn0Vtf";
		const _returnValuevpuWVwn = await _graphJR5TGO3.getVertexByKey(_vertexKeyFHh50dq)
		const _returnValueSnUzVXX = await _graphJR5TGO3.reverse()
		const _returnValuedOqnHkh = await detectDirectedCycle(_graphJR5TGO3)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedEja0Hiv = true;
		const _graphXwWcagC = new Graph(_isDirectedEja0Hiv)
		const _returnValuezHe1dzt = undefined;
		const _getKeyWqID7VR = () => { return _returnValuezHe1dzt };
		const _newVertexacMtFNw = {
			"getKey": _getKeyWqID7VR
	}
		const _returnValueq9IJGBY = await _graphXwWcagC.addVertex(_newVertexacMtFNw)
		const _returnValueq62XvyD = await _graphXwWcagC.toString()
		const _returnValuehZxEBWD = await detectDirectedCycle(_graphXwWcagC)
	});
})