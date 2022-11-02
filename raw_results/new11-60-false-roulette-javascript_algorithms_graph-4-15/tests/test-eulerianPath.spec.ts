export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueQLt8p2p = 9.112227008904298;
		const _graphcvo4jnd = () => { return _returnValueQLt8p2p };
		const _returnValues8Fnidt = await eulerianPath(_graphcvo4jnd)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedA98Ryb2 = false;
		const _graphTGLzw4j = new Graph(_isDirectedA98Ryb2)
		const _returnValueVXr7Tcf = await _graphTGLzw4j.getAllEdges()
		const _returnValuebkvIvH = await _graphTGLzw4j.getAdjacencyMatrix()
		const _returnValuemo1GOzW = await _graphTGLzw4j.reverse()
		const _returnValueAGc8Qs = await _graphTGLzw4j.getAdjacencyMatrix()
		const _returnValueLJ8jSR0 = await eulerianPath(_graphTGLzw4j)
	});
})