export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueOtsJtqf = 8.506614735861874;
		const _getAllVerticesHhg8jWw = () => { return _returnValueOtsJtqf };
		const _arrayValueBi4yYsR = null;
		const _returnValueTXrn1vL = [_arrayValueBi4yYsR]
		const _returnValuezgWYrQU = () => { return _returnValueTXrn1vL };
		const _findEdgefwkyj9 = () => { return _returnValuezgWYrQU };
		const _graphI6588B = {
			"getAllVertices": _getAllVerticesHhg8jWw,
		"findEdge": _findEdgefwkyj9
	}
		const _returnValueZACQhRM = null;
		const _getKeyTp49UF = () => { return _returnValueZACQhRM };
		const _startVertexErzHjWm = {
			"getKey": _getKeyTp49UF
	}
		const _returnValue31Mumf = await dijkstra(_graphI6588B, _startVertexErzHjWm)
	});

	it('test for dijkstra', async () => {
		const _isDirectedqpLzeoQ = -6.34186229895095;
		const _graphLIn7d7C = new Graph(_isDirectedqpLzeoQ)
		const _returnValueEW6W74X = await _graphLIn7d7C.toString()
		const _returnValueGkyj6SI = undefined;
		const _getKeyXQ1l3G7 = () => { return _returnValueGkyj6SI };
		const _startVertexky6y69R = {
			"getKey": _getKeyXQ1l3G7
	}
		const _returnValueUkvsK8i = await dijkstra(_graphLIn7d7C, _startVertexky6y69R)
	});

	it('test for dijkstra', async () => {
		const _isDirectedCMj7eSR = false;
		const _graphE1OyVPd = new Graph(_isDirectedCMj7eSR)
		const _returnValueubvhg9 = true;
		const _getNeighborsQYdhkPk = () => { return _returnValueubvhg9 };
		const _vertexsIrvcB = {
			"getNeighbors": _getNeighborsQYdhkPk
	}
		const _returnValueQzSrlTV = await _graphE1OyVPd.getNeighbors(_vertexsIrvcB)
		const _returnValuerPbWZQc = await _graphE1OyVPd.reverse()
		const _returnValuerGfQnco = null;
		const _arrayValueZHchGSS = () => { return _returnValuerGfQnco };
		const _arrayValuetL3qCPZ = -9.653970422927918;
		const _valuetOU2qpL = [_arrayValueZHchGSS, _arrayValuetL3qCPZ]
		const _startVertex4f1eK7 = new GraphVertex(_valuetOU2qpL)
		const _edgeK4xFu67 = {
		
	}
		const _returnValueq0tMAr = await _startVertex4f1eK7.deleteEdge(_edgeK4xFu67)
		const _returnValueBli7m44 = await _startVertex4f1eK7.getDegree()
		const _returnValueJR4hiH = await _startVertex4f1eK7.getNeighbors()
		const _returnValuen7mZ37o = await dijkstra(_graphE1OyVPd, _startVertex4f1eK7)
	});

	it('test for dijkstra', async () => {
		const _isDirectedc6IKOBh = true;
		const _graphuV2HeaX = new Graph(_isDirectedc6IKOBh)
		const _returnValue3rWdwb = await _graphuV2HeaX.getWeight()
		const _returnValuee1WATwy = {
		
	}
		const _valuexU7RQhl = () => { return _returnValuee1WATwy };
		const _startVertexxcyJ2eg = new GraphVertex(_valuexU7RQhl)
		const _returnValuezLlqQF = null;
		const _requiredEdgevPqpH9U = () => { return _returnValuezLlqQF };
		const _returnValueULGdXX = await _startVertexxcyJ2eg.hasEdge(_requiredEdgevPqpH9U)
		const _returnValueWR3D1DV = await _startVertexxcyJ2eg.getDegree()
		const _returnValueQiJ7yK = 5.947972587457466;
		const _callbackgP3jHJ9 = () => { return _returnValueQiJ7yK };
		const _returnValueeUTVILU = await _startVertexxcyJ2eg.toString(_callbackgP3jHJ9)
		const _edgefCNxF4y = "ONKbXW63EprWxDRKqVap3khTK2470GFyYjiDE9kuUY";
		const _returnValueMcllRJq = await _startVertexxcyJ2eg.addEdge(_edgefCNxF4y)
		const _returnValue3pSQRW = await dijkstra(_graphuV2HeaX, _startVertexxcyJ2eg)
	});
})