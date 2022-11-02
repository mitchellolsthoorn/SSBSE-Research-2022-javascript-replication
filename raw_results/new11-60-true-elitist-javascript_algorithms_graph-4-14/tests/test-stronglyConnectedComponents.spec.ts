export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValuenyQW2L1 = "9Vr";
		const _reverseD7fZ8Fq = () => { return _returnValuenyQW2L1 };
		const _graphupXihwy = {
			"reverse": _reverseD7fZ8Fq
	}
		const _returnValueABtCk7h = await stronglyConnectedComponents(_graphupXihwy)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedjqwBOq = false;
		const _graphAAUALUW = new Graph(_isDirectedjqwBOq)
		const _vertexKeyPtRXLGL = undefined;
		const _returnValueIxRewYh = await _graphAAUALUW.getVertexByKey(_vertexKeyPtRXLGL)
		const _returnValueT6ZKkGB = await stronglyConnectedComponents(_graphAAUALUW)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedkJCS80J = true;
		const _graphMIZYGOQ = new Graph(_isDirectedkJCS80J)
		const _returnValueDvtk1Nf = await _graphMIZYGOQ.getVerticesIndices()
		const _returnValueEvs9jnm = await _graphMIZYGOQ.getWeight()
		const _valueaLDIWdM = false;
		const _newVertexP0o6fsc = new GraphVertex(_valueaLDIWdM)
		const _returnValueYA0XReC = await _newVertexP0o6fsc.getKey()
		const _edgeRjDfS4z = "1S388mjInU4IH6S6c1Hvn7qFe5AZsS4";
		const _returnValueBKzPBEH = await _newVertexP0o6fsc.deleteEdge(_edgeRjDfS4z)
		const _returnValuedUnR1C = await _graphMIZYGOQ.addVertex(_newVertexP0o6fsc)
		const _returnValueRVwNCCx = await stronglyConnectedComponents(_graphMIZYGOQ)
	});
})