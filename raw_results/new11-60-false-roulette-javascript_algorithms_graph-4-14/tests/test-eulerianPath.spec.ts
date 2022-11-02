export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValue4JADeK = false;
		const _graphtnaA2uk = () => { return _returnValue4JADeK };
		const _returnValuengsxWHd = await eulerianPath(_graphtnaA2uk)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedDY5UbKi = false;
		const _graphQuPHUug = new Graph(_isDirectedDY5UbKi)
		const _returnValueQkJ8iHg = await _graphQuPHUug.getVerticesIndices()
		const _returnValuebrWPot8 = await _graphQuPHUug.getAllEdges()
		const _vertexKeyrrmyEwm = []
		const _returnValueqmZGUQW = await _graphQuPHUug.getVertexByKey(_vertexKeyrrmyEwm)
		const _returnValuebUQ3xdq = await eulerianPath(_graphQuPHUug)
	});
})