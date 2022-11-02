export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _graphoeW3fqN = "sNBB6zw1IC0JvtTuhtM662Is9BpDrbBznE4cCyNm0CtNghe0ZGmNodzTbatE4oqIwgA16wDTqffwVN93zmkNMRk";
		const _returnValueGTv50c7 = await floydWarshall(_graphoeW3fqN)
	});

	it('test for floydWarshall', async () => {
		const _returnValuet733eRf = {
		
	}
		const _getAllVerticesmvB0aIw = () => { return _returnValuet733eRf };
		const _returnValuedPk9Cym = null;
		const _findEdgeeVUTxGC = () => { return _returnValuedPk9Cym };
		const _graphlZTK8D0 = {
			"getAllVertices": _getAllVerticesmvB0aIw,
		"findEdge": _findEdgeeVUTxGC
	}
		const _returnValueUEVZy7w = await floydWarshall(_graphlZTK8D0)
	});

	it('test for floydWarshall', async () => {
		const _isDirectede78Qmua = true;
		const _graphXmoTNO = new Graph(_isDirectede78Qmua)
		const _returnValueANZhYOE = await _graphXmoTNO.reverse()
		const _returnValueaKVIdLg = await _graphXmoTNO.getAllVertices()
		const _returnValueiBRUmQN = await _graphXmoTNO.getAdjacencyMatrix()
		const _returnValueljsVaD = await _graphXmoTNO.getWeight()
		const _returnValueMfVx8px = await floydWarshall(_graphXmoTNO)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuedql0jU4 = {
		
	}
		const _arrayValue8EF6XV = null;
		const _returnValueWgmcihI = [_arrayValuedql0jU4, _arrayValue8EF6XV]
		const _getAllVerticesH0TtJUB = () => { return _returnValueWgmcihI };
		const _returnValuek387MO = null;
		const _findEdgeq5kMP47 = () => { return _returnValuek387MO };
		const _graphZWGU0Cp = {
			"getAllVertices": _getAllVerticesH0TtJUB,
		"findEdge": _findEdgeq5kMP47
	}
		const _returnValuejGitav = await floydWarshall(_graphZWGU0Cp)
	});
})