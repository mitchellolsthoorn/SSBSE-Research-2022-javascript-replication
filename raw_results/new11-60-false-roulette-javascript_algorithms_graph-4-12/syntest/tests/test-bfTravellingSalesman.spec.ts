export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueBg8XuoG = undefined;
		const _graphVaWPnX7 = () => { return _returnValueBg8XuoG };
		const _returnValueV21P3lI = await bfTravellingSalesman(_graphVaWPnX7)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValuehYEvUo = "Tzd7CvCq1nOkX6EF2Rq6SmsoknDqX9";
		const _getAllVerticesYCj3mY = () => { return _returnValuehYEvUo };
		const _getAdjacencyMatrixSovZ0Pm = true;
		const _returnValue5pYw1E = {
		
	}
		const _getVerticesIndicesoELPbGA = () => { return _returnValue5pYw1E };
		const _graphQV9Hzic = {
			"getAllVertices": _getAllVerticesYCj3mY,
		"getAdjacencyMatrix": _getAdjacencyMatrixSovZ0Pm,
		"getVerticesIndices": _getVerticesIndicesoELPbGA
	}
		const _returnValueUTOrGlA = await bfTravellingSalesman(_graphQV9Hzic)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedn9WFSCT = false;
		const _graphyEahZV6 = new Graph(_isDirectedn9WFSCT)
		const _returnValuedydvKC = await _graphyEahZV6.getAdjacencyMatrix()
		const _returnValuewSiz9ih = null;
		const _returnValueYpu0Oo = () => { return _returnValuewSiz9ih };
		const _getKeyOLeF9Tp = () => { return _returnValueYpu0Oo };
		const _newVertexTL8SQSu = {
			"getKey": _getKeyOLeF9Tp
	}
		const _returnValueVuYysIE = await _graphyEahZV6.addVertex(_newVertexTL8SQSu)
		const _returnValueSgqS3u2 = await _graphyEahZV6.reverse()
		const _returnValueHUQTKiY = await _graphyEahZV6.getAllEdges()
		const _returnValuegNEShUL = await bfTravellingSalesman(_graphyEahZV6)
	});
})