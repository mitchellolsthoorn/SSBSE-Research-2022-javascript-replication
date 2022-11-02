export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _graphc0b3U7e = []
		const _returnValueo75yis2 = await eulerianPath(_graphc0b3U7e)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedHB83ZII = "ddOQ28XoziFPXpgMymlZyBvepoPpaPaAxMBAdLR";
		const _graphAi0vOw8 = new Graph(_isDirectedHB83ZII)
		const _vertexKeyclkXzQR = undefined;
		const _returnValuehvS2RHQ = await _graphAi0vOw8.getVertexByKey(_vertexKeyclkXzQR)
		const _returnValuekpC7w8a = await _graphAi0vOw8.toString()
		const _returnValueKvhZrbN = await eulerianPath(_graphAi0vOw8)
	});
})