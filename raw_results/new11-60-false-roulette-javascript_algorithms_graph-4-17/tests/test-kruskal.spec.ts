export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedM8TcZET = undefined;
		const _returnValuepqUyTQf = false;
		const _getAllEdgesVOFUvs = () => { return _returnValuepqUyTQf };
		const _returnValueQVns2z = true;
		const _getAllVerticesJLxWJmH = () => { return _returnValueQVns2z };
		const _graphMM5Qdf3 = {
			"isDirected": _isDirectedM8TcZET,
		"getAllEdges": _getAllEdgesVOFUvs,
		"getAllVertices": _getAllVerticesJLxWJmH
	}
		const _returnValueYUNyEk9 = await kruskal(_graphMM5Qdf3)
	});

	it('test for kruskal', async () => {
		const _isDirectedyPHXft3 = false;
		const _graphX5UgT16 = new Graph(_isDirectedyPHXft3)
		const _returnValuefkhKFr6 = await _graphX5UgT16.reverse()
		const _returnValue0qGYzD = await _graphX5UgT16.getAllEdges()
		const _returnValueVU78Vad = await _graphX5UgT16.getAdjacencyMatrix()
		const _returnValuerdxQQ0C = await kruskal(_graphX5UgT16)
	});

	it('test for kruskal', async () => {
		const _arrayValueqR6OkpD = "B1GrFFeuTJHjrVKeing5QOwU";
		const _arrayValuecnobdRW = {
		
	}
		const _arrayValueD3qG0QJ = "oVmkhTpUG4M2YUJnTs7kS6EvNtokJI3ckoSTWsuYCVWNXdZqSzTD2xpNYmqNGlizCvw4PfwY02hMDZTELW45Pk1Ie";
		const _arrayValueTYCtbvw = true;
		const _isDirectedLrHw01Q = [_arrayValueqR6OkpD, _arrayValuecnobdRW, _arrayValueD3qG0QJ, _arrayValueTYCtbvw]
		const _arrayValuevj6iYE = "Y2jVJLk45TfYGKHqvY";
		const _arrayValuehvHqJe7 = undefined;
		const _returnValuesBiURYZ = [_arrayValuevj6iYE, _arrayValuehvHqJe7]
		const _returnValueuoIRNNM = () => { return _returnValuesBiURYZ };
		const _getAllEdgesietOH67 = () => { return _returnValueuoIRNNM };
		const _returnValuertIRVTV = false;
		const _returnValueBh0SbV = () => { return _returnValuertIRVTV };
		const _getAllVerticeskTN4nwl = () => { return _returnValueBh0SbV };
		const _graphl7EKKBk = {
			"isDirected": _isDirectedLrHw01Q,
		"getAllEdges": _getAllEdgesietOH67,
		"getAllVertices": _getAllVerticeskTN4nwl
	}
		const _returnValueeFVKlC6 = await kruskal(_graphl7EKKBk)
	});
})