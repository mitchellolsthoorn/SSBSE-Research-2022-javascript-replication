export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueDnJlt7W = null;
		const _getAllVerticesNKvmMg0 = () => { return _returnValueDnJlt7W };
		const _graph7ThC6N = {
			"getAllVertices": _getAllVerticesNKvmMg0
	}
		const _returnValueXYaDPRO = await detectDirectedCycle(_graph7ThC6N)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedWWgFvKG = false;
		const _graphnKkH82a = new Graph(_isDirectedWWgFvKG)
		const _returnValuetliWhoC = await _graphnKkH82a.getAdjacencyMatrix()
		const _returnValue8NiwNP = await _graphnKkH82a.getAdjacencyMatrix()
		const _returnValueQ2P3ISv = await _graphnKkH82a.getWeight()
		const _returnValueSvt0brn = await detectDirectedCycle(_graphnKkH82a)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedlagOkxl = true;
		const _graphaB2T1ud = new Graph(_isDirectedlagOkxl)
		const _returnValueBhsiK7 = 9.236539883154109;
		const _getKeywFi3BUD = () => { return _returnValueBhsiK7 };
		const _newVertexa54MlO = {
			"getKey": _getKeywFi3BUD
	}
		const _returnValueucqEu1g = await _graphaB2T1ud.addVertex(_newVertexa54MlO)
		const _returnValuetn7NmQs = await _graphaB2T1ud.toString()
		const _vertexKeyw5kIuNr = -1.6460923106033079;
		const _returnValuebH1lZbN = await _graphaB2T1ud.getVertexByKey(_vertexKeyw5kIuNr)
		const _returnValuecwfCXG = await detectDirectedCycle(_graphaB2T1ud)
	});
})