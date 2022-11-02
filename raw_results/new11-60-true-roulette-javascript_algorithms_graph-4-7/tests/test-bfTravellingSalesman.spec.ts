export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _isDirectedry43Lx = undefined;
		const _graphG7lejcm = new Graph(_isDirectedry43Lx)
		const _returnValuewTkE9SC = await _graphG7lejcm.getAdjacencyMatrix()
		const _returnValueCxyue07 = await _graphG7lejcm.getAllEdges()
		const _returnValuePhFYL8S = await _graphG7lejcm.getAllVertices()
		const _arrayValueGL9b41X = undefined;
		const _arrayValueeh673UE = "RHNYu1QzNijH4gwBz2SydyIrJTCskb8Fmemuu";
		const _arrayValueU7jcAwn = null;
		const _arrayValuebDyhCkm = true;
		const _vertexKeyyJu76aD = [_arrayValueGL9b41X, _arrayValueeh673UE, _arrayValueU7jcAwn, _arrayValuebDyhCkm]
		const _returnValuefdMcWrK = await _graphG7lejcm.getVertexByKey(_vertexKeyyJu76aD)
		const _returnValuedOHxmpg = await bfTravellingSalesman(_graphG7lejcm)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedxVOu4l = true;
		const _graphXm4qrbi = new Graph(_isDirectedxVOu4l)
		const _returnValueyipexHU = "UKRwBEGgmBBi14QnuATFrToTEefC";
		const _getKeyu0yL4rc = () => { return _returnValueyipexHU };
		const _newVertexFPTcScs = {
			"getKey": _getKeyu0yL4rc
	}
		const _returnValueCJJDyv3 = await _graphXm4qrbi.addVertex(_newVertexFPTcScs)
		const _returnValueHjXq7gb = await _graphXm4qrbi.getAllEdges()
		const _returnValueNyuuBI6 = await _graphXm4qrbi.getVerticesIndices()
		const _returnValueeLXIBac = await _graphXm4qrbi.getAllEdges()
		const _returnValuebAGYn4W = await bfTravellingSalesman(_graphXm4qrbi)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedosS8Pl6 = true;
		const _graphOWYnw3p = new Graph(_isDirectedosS8Pl6)
		const _valueQnuN5BP = true;
		const _newVertex0hu0lB = new GraphVertex(_valueQnuN5BP)
		const _vertexE6r6XyX = null;
		const _returnValueYiv2afB = await _newVertex0hu0lB.hasNeighbor(_vertexE6r6XyX)
		const _returnValuea0DVPG = await _newVertex0hu0lB.getNeighbors()
		const _returnValueaDHKS7V = await _newVertex0hu0lB.deleteAllEdges()
		const _returnValueQBTZVSR = await _graphOWYnw3p.addVertex(_newVertex0hu0lB)
		const _returnValueTahdsad = await bfTravellingSalesman(_graphOWYnw3p)
	});
})