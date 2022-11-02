export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueSwAaPow = true;
		const _graphpRN1DdF = () => { return _returnValueSwAaPow };
		const _startVertexU6JhZS = "NtbY528acXB0Ffxg1j7pFFYcX7Q5wOssrXbIh01";
		const _returnValueqGOrYYM = await dijkstra(_graphpRN1DdF, _startVertexU6JhZS)
	});

	it('test for dijkstra', async () => {
		const _isDirectedb1zA8C = true;
		const _graphThRspi7 = new Graph(_isDirectedb1zA8C)
		const _returnValuemaZkBaN = await _graphThRspi7.getAdjacencyMatrix()
		const _valueH0Ugnoa = -9.853652103063864;
		const _returnValueI0pZ7x2 = undefined;
		const _keyCallbackUDmynr1 = () => { return _returnValueI0pZ7x2 };
		const _startVertexCzrXPVQ = new DisjointSetItem(_valueH0Ugnoa, _keyCallbackUDmynr1)
		const _returnValueS5hRGG = await _startVertexCzrXPVQ.getRank()
		const _returnValuexKKDEVi = await _startVertexCzrXPVQ.getRank()
		const _returnValueZssPmF0 = await _startVertexCzrXPVQ.getKey()
		const _returnValuexjrayWW = await dijkstra(_graphThRspi7, _startVertexCzrXPVQ)
	});

	it('test for dijkstra', async () => {
		const _isDirectedNMIP8iD = true;
		const _graphO476RRT = new Graph(_isDirectedNMIP8iD)
		const _returnValueolYfU2Q = await _graphO476RRT.getAllEdges()
		const _returnValueTeJjcDo = await _graphO476RRT.getAdjacencyMatrix()
		const _returnValueivU81iR = await _graphO476RRT.getAdjacencyMatrix()
		const _returnValueq7spqD = await _graphO476RRT.getAllEdges()
		const _returnValueOu6ThaZ = await _graphO476RRT.reverse()
		const _valuemeGUyja = false;
		const _startVertexBlOnb1A = new GraphVertex(_valuemeGUyja)
		const _arrayValuea6PoEKt = {
		
	}
		const _returnValueUUF422j = {
		
	}
		const _arrayValue3ICEt5 = () => { return _returnValueUUF422j };
		const _arrayValueg3VRGNR = -8.83107840481766;
		const _arrayValueEJhAolF = 1.7542854995264516;
		const _vertexQhTFeWE = [_arrayValuea6PoEKt, _arrayValue3ICEt5, _arrayValueg3VRGNR, _arrayValueEJhAolF]
		const _returnValuesjzCxZA = await _startVertexBlOnb1A.findEdge(_vertexQhTFeWE)
		const _returnValueTsJM7dy = "sc7asKUW5DZ5WASgT4vWJc6uDCmr1hVkXSsiD4nny0Zs2lBWau7V0nbVqbTiPVqVstV9PsWVYx";
		const _vertexIZlQrne = () => { return _returnValueTsJM7dy };
		const _returnValueR90y90C = await _startVertexBlOnb1A.hasNeighbor(_vertexIZlQrne)
		const _returnValuedN0EYi3 = await dijkstra(_graphO476RRT, _startVertexBlOnb1A)
	});
})