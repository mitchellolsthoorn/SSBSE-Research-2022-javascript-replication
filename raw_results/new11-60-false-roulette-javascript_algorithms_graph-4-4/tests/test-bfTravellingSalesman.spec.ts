export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValuejmgwO4 = "9xlGlYXanBsP7Sf7CeW8TYdwIqykZhdDWUjV8GXEx4colv69t3y6HR9aqd6yVW7bFnxIk8QEu0SLy5uPpIrbYm8pcRm4";
		const _graphhZVH8Gr = () => { return _returnValuejmgwO4 };
		const _returnValueJATpn1E = await bfTravellingSalesman(_graphhZVH8Gr)
	});

	it('test for bfTravellingSalesman', async () => {
		const _arrayValueoA6Q8q = {
		
	}
		const _returnValueSBx0nJZ = [_arrayValueoA6Q8q]
		const _getAllVerticeslE65FtJ = () => { return _returnValueSBx0nJZ };
		const _getAdjacencyMatrixasIBk7x = "IU2wPnorDWXhuJjJT6afztc1qb";
		const _arrayValuehEzjACj = "S2eZARbuwTCyyPErODbVy5l1CII0";
		const _arrayValuecEPpV7X = 1.489857004324799;
		const _arrayValueIrVAhlZ = undefined;
		const _returnValueYXU3rXR = [_arrayValuehEzjACj, _arrayValuecEPpV7X, _arrayValueIrVAhlZ]
		const _getVerticesIndicesszLkrU4 = () => { return _returnValueYXU3rXR };
		const _graphySMYRTA = {
			"getAllVertices": _getAllVerticeslE65FtJ,
		"getAdjacencyMatrix": _getAdjacencyMatrixasIBk7x,
		"getVerticesIndices": _getVerticesIndicesszLkrU4
	}
		const _returnValuehoZgtQn = await bfTravellingSalesman(_graphySMYRTA)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedUpe86rr = false;
		const _graphbLoFFBx = new Graph(_isDirectedUpe86rr)
		const _returnValuelzGdlym = await _graphbLoFFBx.reverse()
		const _returnValueJEWVUZv = undefined;
		const _getKeyhiWKAsn = () => { return _returnValueJEWVUZv };
		const _newVertexDEumyM8 = {
			"getKey": _getKeyhiWKAsn
	}
		const _returnValueUuwvAqo = await _graphbLoFFBx.addVertex(_newVertexDEumyM8)
		const _vertexKeyyPcqC3m = undefined;
		const _returnValueeIY2sKe = await _graphbLoFFBx.getVertexByKey(_vertexKeyyPcqC3m)
		const _returnValuejl8C41 = await _graphbLoFFBx.getAllEdges()
		const _returnValueP6LFkqa = await bfTravellingSalesman(_graphbLoFFBx)
	});
})