export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _graphdbSoK8L = undefined;
		const _returnValueVniNTiq = await stronglyConnectedComponents(_graphdbSoK8L)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedJRjfypC = false;
		const _graphWlt538C = new Graph(_isDirectedJRjfypC)
		const _returnValueK5rJag7 = await _graphWlt538C.getAllVertices()
		const _returnValuegtVlGdM = await _graphWlt538C.getVerticesIndices()
		const _vertexKeyzgGG6jL = undefined;
		const _returnValueVwoDke = await _graphWlt538C.getVertexByKey(_vertexKeyzgGG6jL)
		const _returnValuet16yeX8 = await stronglyConnectedComponents(_graphWlt538C)
	});
})