export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValuecCVsqJw = {
		
	}
		const _graphC6ierC0 = () => { return _returnValuecCVsqJw };
		const _returnValueQgiHJBz = await bfTravellingSalesman(_graphC6ierC0)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValuebh2qB2I = "aUjw59yPllJv8Q3k8hKAWBOSgvrpnYgaoFZb2OXhvyuBuOOMyndSAkeTI71wtfJn1QmkoMa5jIDEWr6";
		const _getAllVerticesjY7Ufuf = () => { return _returnValuebh2qB2I };
		const _returnValueaXQAgd = undefined;
		const _getAdjacencyMatrixDZzBOZh = () => { return _returnValueaXQAgd };
		const _getVerticesIndicesx4D3mi6 = 2.3946384487859795;
		const _graphUKzsJjz = {
			"getAllVertices": _getAllVerticesjY7Ufuf,
		"getAdjacencyMatrix": _getAdjacencyMatrixDZzBOZh,
		"getVerticesIndices": _getVerticesIndicesx4D3mi6
	}
		const _returnValuevSFlS3 = await bfTravellingSalesman(_graphUKzsJjz)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedFtKjjb8 = false;
		const _graphwXXASd = new Graph(_isDirectedFtKjjb8)
		const _returnValuei2n7gA4 = await _graphwXXASd.getVerticesIndices()
		const _returnValueraflDpV = await _graphwXXASd.getAllVertices()
		const _returnValueqlxdO32 = null;
		const _getKeyclcD4rK = () => { return _returnValueqlxdO32 };
		const _newVertexDPzhPG1 = {
			"getKey": _getKeyclcD4rK
	}
		const _returnValueMJFZK8R = await _graphwXXASd.addVertex(_newVertexDPzhPG1)
		const _returnValuerColqek = await _graphwXXASd.getAllEdges()
		const _returnValuevt50Z42 = await bfTravellingSalesman(_graphwXXASd)
	});
})