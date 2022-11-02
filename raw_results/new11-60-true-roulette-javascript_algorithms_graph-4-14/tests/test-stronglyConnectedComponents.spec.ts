export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _arrayValuefgnzSw = undefined;
		const _graphTkGFd2 = [_arrayValuefgnzSw]
		const _returnValueJSxPtED = await stronglyConnectedComponents(_graphTkGFd2)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedM1qHHSm = true;
		const _graphphg9OdO = new Graph(_isDirectedM1qHHSm)
		const _returnValueKj8Z4Ao = await _graphphg9OdO.getAllEdges()
		const _vertexKeysx1UnZF = null;
		const _returnValuexJzABqY = await _graphphg9OdO.getVertexByKey(_vertexKeysx1UnZF)
		const _returnValueI5jCVm7 = await stronglyConnectedComponents(_graphphg9OdO)
	});
})