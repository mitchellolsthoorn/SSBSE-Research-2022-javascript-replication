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
		const _graphIqPAkMI = "nW1YBxoKNYyWndaYwKs0iRk5ce9qPfEQAmo5oPiXxGJwBN4RCqomn46rdw";
		const _arrayValuetzFIkEz = "YK2Ub4Q6MZe7vW9mpexjYc8yK8N2aRie5NzOF8gF9JcxOq89GdS4lDaB3eGu4JhlwXp8zj";
		const _arrayValuetFSxvvU = 5.1420643422175;
		const _arrayValueOUUNrZf = {
		
	}
		const _returnValueK1lR7Rw = [_arrayValuetzFIkEz, _arrayValuetFSxvvU, _arrayValueOUUNrZf]
		const _getKeyCxeuxRR = () => { return _returnValueK1lR7Rw };
		const _startVertexiA2X6lR = {
			"getKey": _getKeyCxeuxRR
	}
		const _returnValueDvgw5D2 = await dijkstra(_graphIqPAkMI, _startVertexiA2X6lR)
	});

	it('test for dijkstra', async () => {
		const _arrayValueoi9QpYs = undefined;
		const _arrayValueLWEFfeQ = 9.079435439880793;
		const _isDirectedl71UL3G = [_arrayValueoi9QpYs, _arrayValueLWEFfeQ]
		const _graphm1ixYrs = new Graph(_isDirectedl71UL3G)
		const _returnValuelJdZkG8 = await _graphm1ixYrs.reverse()
		const _returnValueWAkPI0 = null;
		const _vertexKeyBW2a2fm = () => { return _returnValueWAkPI0 };
		const _returnValueaasj80 = await _graphm1ixYrs.getVertexByKey(_vertexKeyBW2a2fm)
		const _returnValueH1zhUSH = await _graphm1ixYrs.toString()
		const _returnValueAa4IUvY = await _graphm1ixYrs.reverse()
		const _vertexKeyFu7HTbK = -7.955235130388629;
		const _returnValueJFEtuq = await _graphm1ixYrs.getVertexByKey(_vertexKeyFu7HTbK)
		const _returnValueVozwtn5 = 9.543379115786994;
		const _getKeyeU8Li7k = () => { return _returnValueVozwtn5 };
		const _startVertexpS1gmx = {
			"getKey": _getKeyeU8Li7k
	}
		const _returnValuedJtHcB3 = await dijkstra(_graphm1ixYrs, _startVertexpS1gmx)
	});

	it('test for dijkstra', async () => {
		const _isDirectedZ5idLI = false;
		const _graphgjl42dk = new Graph(_isDirectedZ5idLI)
		const _returnValuerJBwjv = await _graphgjl42dk.getAllVertices()
		const _valuegnhmNvu = null;
		const _startVertexRjlCO0Z = new GraphVertex(_valuegnhmNvu)
		const _returnValueMBom0nU = await _startVertexRjlCO0Z.getEdges()
		const _returnValueCL2rhOg = await _startVertexRjlCO0Z.getEdges()
		const _edgedwDWwRe = 2.187939128745146;
		const _returnValuetKDC1Ni = await _startVertexRjlCO0Z.deleteEdge(_edgedwDWwRe)
		const _returnValueAroNa9r = await dijkstra(_graphgjl42dk, _startVertexRjlCO0Z)
	});
})