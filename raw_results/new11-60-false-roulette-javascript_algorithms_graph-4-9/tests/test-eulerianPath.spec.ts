export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _arrayValueveMjyY3 = null;
		const _arrayValuenW9Nm6y = 8.205522307556791;
		const _returnValuePN6Xxz7 = [_arrayValueveMjyY3, _arrayValuenW9Nm6y]
		const _graphdUtYihD = () => { return _returnValuePN6Xxz7 };
		const _returnValueoNdy3Qn = await eulerianPath(_graphdUtYihD)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedHLKI6ku = true;
		const _graphe8gIjnq = new Graph(_isDirectedHLKI6ku)
		const _returnValueOxi3n98 = await _graphe8gIjnq.getAllEdges()
		const _returnValue22Tobw = await _graphe8gIjnq.getAdjacencyMatrix()
		const _returnValueZTdOGPX = await _graphe8gIjnq.getAllVertices()
		const _returnValueNO3R4fT = await eulerianPath(_graphe8gIjnq)
	});
})