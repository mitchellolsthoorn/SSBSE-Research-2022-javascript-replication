export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValuevsJk49 = true;
		const _getAllVerticesX2HY4Ts = () => { return _returnValuevsJk49 };
		const _returnValue7gVl0b = true;
		const _getAdjacencyMatrix8xIT6Z = () => { return _returnValue7gVl0b };
		const _returnValueCcABLLp = {
		
	}
		const _getVerticesIndicesnqdrQFg = () => { return _returnValueCcABLLp };
		const _graphvXftPBh = {
			"getAllVertices": _getAllVerticesX2HY4Ts,
		"getAdjacencyMatrix": _getAdjacencyMatrix8xIT6Z,
		"getVerticesIndices": _getVerticesIndicesnqdrQFg
	}
		const _returnValueDMUydmS = await bfTravellingSalesman(_graphvXftPBh)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedJpwQhNA = false;
		const _graphKgaT1NA = new Graph(_isDirectedJpwQhNA)
		const _returnValuegpstKsp = await _graphKgaT1NA.getVerticesIndices()
		const _vertexKeyCEWQpq = true;
		const _returnValuezg0Pq4p = await _graphKgaT1NA.getVertexByKey(_vertexKeyCEWQpq)
		const _returnValuerHmzfcH = undefined;
		const _getKeyqaKKjC = () => { return _returnValuerHmzfcH };
		const _newVertexr8ybOh7 = {
			"getKey": _getKeyqaKKjC
	}
		const _returnValueLAEl5Pp = await _graphKgaT1NA.addVertex(_newVertexr8ybOh7)
		const _returnValueE4PI0nh = await _graphKgaT1NA.getWeight()
		const _returnValueQ0LMNO = await _graphKgaT1NA.getAllEdges()
		const _returnValueiU8a3R2 = await bfTravellingSalesman(_graphKgaT1NA)
	});
})