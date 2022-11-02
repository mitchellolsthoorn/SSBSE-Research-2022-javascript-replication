export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _returnValueXyeo8GE = null;
		const _graphKEcgWNf = () => { return _returnValueXyeo8GE };
		const _returnValueTqt6z9n = await kruskal(_graphKEcgWNf)
	});

	it('test for kruskal', async () => {
		const _isDirecteduEbLj82 = {
		
	}
		const _returnValueoImBT00 = []
		const _getAllEdgesxvUA31E = () => { return _returnValueoImBT00 };
		const _returnValuehUhiOsU = false;
		const _getAllVerticeseODKWjN = () => { return _returnValuehUhiOsU };
		const _graphtTu8UZm = {
			"isDirected": _isDirecteduEbLj82,
		"getAllEdges": _getAllEdgesxvUA31E,
		"getAllVertices": _getAllVerticeseODKWjN
	}
		const _returnValueH2QdOAz = await kruskal(_graphtTu8UZm)
	});

	it('test for kruskal', async () => {
		const _isDirectedAcDhoOv = null;
		const _graphasg1U3f = new Graph(_isDirectedAcDhoOv)
		const _arrayValueWMxffkm = 0.8410951385045156;
		const _arrayValueHCM9VMl = false;
		const _vertexKeyDQsvFjh = [_arrayValueWMxffkm, _arrayValueHCM9VMl]
		const _returnValuejHJ59F = await _graphasg1U3f.getVertexByKey(_vertexKeyDQsvFjh)
		const _returnValueKvKNraA = await _graphasg1U3f.getVerticesIndices()
		const _returnValueRLNsSX = await _graphasg1U3f.getAdjacencyMatrix()
		const _returnValueGB3MUS2 = await _graphasg1U3f.reverse()
		const _returnValueg5LBQYb = await kruskal(_graphasg1U3f)
	});
})