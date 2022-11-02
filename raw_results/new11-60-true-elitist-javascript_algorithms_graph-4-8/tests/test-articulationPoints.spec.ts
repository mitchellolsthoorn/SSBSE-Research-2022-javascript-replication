export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueGX79aY = {
		
	}
		const _getAllVerticessDpZpje = () => { return _returnValueGX79aY };
		const _graphf36N0UB = {
			"getAllVertices": _getAllVerticessDpZpje
	}
		const _returnValuefBzItDy = await articulationPoints(_graphf36N0UB)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedEuWkFwj = {
		
	}
		const _graphMM7yfpP = new Graph(_isDirectedEuWkFwj)
		const _returnValueGX3BM1 = "JhUygxUdJEMbblsg4Yk9rIz6htwRyGWU6MyU1iINeff0ub1M3wJb57N7Jkfh1JQyIUsqM7S5";
		const _getKeyg5CWx62 = () => { return _returnValueGX3BM1 };
		const _newVertexQNqXR0j = {
			"getKey": _getKeyg5CWx62
	}
		const _returnValueWLpcBEX = await _graphMM7yfpP.addVertex(_newVertexQNqXR0j)
		const _returnValueaWgR8hz = await _graphMM7yfpP.getAllVertices()
		const _returnValuedwLivLs = undefined;
		const _getNeighborsMi3ogpO = () => { return _returnValuedwLivLs };
		const _vertexdsKXwYw = {
			"getNeighbors": _getNeighborsMi3ogpO
	}
		const _returnValueZpQeew1 = await _graphMM7yfpP.getNeighbors(_vertexdsKXwYw)
		const _returnValueGFvDh0E = await articulationPoints(_graphMM7yfpP)
	});
})