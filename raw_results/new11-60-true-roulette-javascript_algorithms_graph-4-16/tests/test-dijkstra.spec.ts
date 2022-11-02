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
		const _arrayValuegVVpPf = false;
		const _graphsRTHmso = [_arrayValuegVVpPf]
		const _arrayValuegmwZI12 = "TXCT46KCKi8jIHicZaEbfC3oOYkSE98VytlYTvStet1xrNYVdG976";
		const _returnValueRID8ecz = [_arrayValuegmwZI12]
		const _startVertexYklaOiV = () => { return _returnValueRID8ecz };
		const _returnValuezStKujk = await dijkstra(_graphsRTHmso, _startVertexYklaOiV)
	});

	it('test for dijkstra', async () => {
		const _isDirectedPmTqpq = -0.16938530419034237;
		const _graphQ17j5mM = new Graph(_isDirectedPmTqpq)
		const _returnValuewfSFS8q = await _graphQ17j5mM.toString()
		const _valuegnStAp6 = null;
		const _returnValue9AbFCv = {
		
	}
		const _keyCallbackwuRXeei = () => { return _returnValue9AbFCv };
		const _startVertexYhdDzH7 = new DisjointSetItem(_valuegnStAp6, _keyCallbackwuRXeei)
		const _returnValuevYWxzGD = await _startVertexYhdDzH7.getChildren()
		const _returnValueOSwD9o = await _startVertexYhdDzH7.getChildren()
		const _returnValuet8wz1iV = await _startVertexYhdDzH7.getRank()
		const _returnValuePzl8vr = await _startVertexYhdDzH7.isRoot()
		const _returnValueGXBdjTV = await dijkstra(_graphQ17j5mM, _startVertexYhdDzH7)
	});

	it('test for dijkstra', async () => {
		const _isDirectedXk6bC1r = false;
		const _graphbi8V4O = new Graph(_isDirectedXk6bC1r)
		const _returnValueKX4QmuT = await _graphbi8V4O.getAdjacencyMatrix()
		const _valueNzxCr0e = {
		
	}
		const _startVertexhFqiMvq = new GraphVertex(_valueNzxCr0e)
		const _returnValuehhRfKlf = await _startVertexhFqiMvq.getKey()
		const _vertex0YcBL2 = true;
		const _returnValueXNYlT1 = await _startVertexhFqiMvq.hasNeighbor(_vertex0YcBL2)
		const _requiredEdgeiEiA0QU = "nqRyLmubs0";
		const _returnValuerKz6FTw = await _startVertexhFqiMvq.hasEdge(_requiredEdgeiEiA0QU)
		const _returnValuetgh2Uya = await dijkstra(_graphbi8V4O, _startVertexhFqiMvq)
	});
})