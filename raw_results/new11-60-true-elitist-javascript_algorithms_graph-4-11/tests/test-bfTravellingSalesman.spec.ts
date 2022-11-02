export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValuekEuFVjP = undefined;
		const _getAllVerticesmFKIqrz = () => { return _returnValuekEuFVjP };
		const _returnValueAUyJu9r = undefined;
		const _getAdjacencyMatrixJ1XhyrP = () => { return _returnValueAUyJu9r };
		const _returnValueaEkcGqZ = 2.1038469172765843;
		const _getVerticesIndicesanyqik = () => { return _returnValueaEkcGqZ };
		const _graphB7R0e2t = {
			"getAllVertices": _getAllVerticesmFKIqrz,
		"getAdjacencyMatrix": _getAdjacencyMatrixJ1XhyrP,
		"getVerticesIndices": _getVerticesIndicesanyqik
	}
		const _returnValuevhMfRoe = await bfTravellingSalesman(_graphB7R0e2t)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValueTPSMmv9 = "W2BS96BoEejtiGUnSOLnwAkQEpCmgVGGI9LkvrQfp8wYc5aoVMsvHzOz7gauYrKYflQmfRYCzxHHXqzbeAM2JRRb9CQuPD";
		const _returnValueScge1o9 = () => { return _returnValueTPSMmv9 };
		const _getAllVerticesih9zb5n = () => { return _returnValueScge1o9 };
		const _returnValueYroIWN = undefined;
		const _getAdjacencyMatrixQpgstOW = () => { return _returnValueYroIWN };
		const _returnValuepP9pxVd = null;
		const _getVerticesIndicesge66l6q = () => { return _returnValuepP9pxVd };
		const _graphDPYgDy = {
			"getAllVertices": _getAllVerticesih9zb5n,
		"getAdjacencyMatrix": _getAdjacencyMatrixQpgstOW,
		"getVerticesIndices": _getVerticesIndicesge66l6q
	}
		const _returnValueN93kk9K = await bfTravellingSalesman(_graphDPYgDy)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedwgyuQCM = true;
		const _graphbFKYk7c = new Graph(_isDirectedwgyuQCM)
		const _returnValueXF8jX4 = "ERp9cd17x7BML9U1uLbf8Lnkj2Awqbyyg7XCYCUTLgvLHKWkKZ1DiMYaFT6VPem7YYKs5nJH8w1j";
		const _vertexKeyDxWSub = () => { return _returnValueXF8jX4 };
		const _returnValueOAsAjV1 = await _graphbFKYk7c.getVertexByKey(_vertexKeyDxWSub)
		const _returnValueaZZq1L3 = await _graphbFKYk7c.getAllVertices()
		const _returnValueGoBP7US = await _graphbFKYk7c.getAdjacencyMatrix()
		const _returnValueMWge5fk = null;
		const _getKeylh1dKrb = () => { return _returnValueMWge5fk };
		const _newVertexkHisd4B = {
			"getKey": _getKeylh1dKrb
	}
		const _returnValueyYwsaHW = await _graphbFKYk7c.addVertex(_newVertexkHisd4B)
		const _returnValueNrciBOy = await bfTravellingSalesman(_graphbFKYk7c)
	});
})