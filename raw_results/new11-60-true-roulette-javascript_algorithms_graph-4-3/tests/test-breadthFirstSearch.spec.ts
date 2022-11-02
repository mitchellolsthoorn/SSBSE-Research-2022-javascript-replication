export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueNgEmg8M = "WFF1k8JTcGsQcLQWMXZ9Tnt4BqtdcUBwfNkhSnEuoSklS";
		const _graphPrTx5eJ = () => { return _returnValueNgEmg8M };
		const _startVertexXRUUME0 = undefined;
		const _originalCallbacksMqh470p = -9.342921559745584;
		const _returnValueL421jsD = await breadthFirstSearch(_graphPrTx5eJ, _startVertexXRUUME0, _originalCallbacksMqh470p)
	});

	it('test for breadthFirstSearch', async () => {
		const _graphmPuBQPU = "NgqLs3k8lVD3Kj8X2mfuF9NcKzPFb8FUMdjgLOjuBYqMD";
		const _arrayValueKrL8dOp = null;
		const _startVertexxzn1Agt = [_arrayValueKrL8dOp]
		const _originalCallbackskChSKow = undefined;
		const _returnValueJbCejd = await breadthFirstSearch(_graphmPuBQPU, _startVertexxzn1Agt, _originalCallbackskChSKow)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuebpzm85Y = "3bzAeCFi8HJ9QhkMwz8iHKP6u6nwB3cQ";
		const _arrayValueKlbAwre = null;
		const _arrayValuetAz8B9D = [_arrayValuebpzm85Y, _arrayValueKlbAwre]
		const _arrayValueLOvGdm9 = -2.588267817851019;
		const _returnValueOOnWOC6 = [_arrayValuetAz8B9D, _arrayValueLOvGdm9]
		const _getNeighborsmtDTrv0 = () => { return _returnValueOOnWOC6 };
		const _graphJQteVoJ = {
			"getNeighbors": _getNeighborsmtDTrv0
	}
		const _arrayValuef5RiJVs = "yB3qXti9v8dNxMzELNbRLdTOUL27jfUDWMSknd8ErCbntIVkInvjhVUdJMpQlVn3BdCRBp1";
		const _arrayValue0yki3s = undefined;
		const _arrayValuerTjYKUB = [_arrayValue0yki3s]
		const _arrayValueW8pIq03 = -0.1258669338746472;
		const _arrayValueJNdRMrX = null;
		const _arrayValueqzOOvyJ = undefined;
		const _arrayValuepdjsmIL = [_arrayValueW8pIq03, _arrayValueJNdRMrX, _arrayValueqzOOvyJ]
		const _startVertex44wUjV = [_arrayValuef5RiJVs, _arrayValuerTjYKUB, _arrayValuepdjsmIL]
		const _arrayValuebnP2Zan = "uoUkERjuw8awDCJNSg6NUyl0gUaFzph5hbJWIm35mzLlmFepiNUaH76LeGj7iC4TJw4VnA8gJagQz1HOIZYfve1pUF";
		const _arrayValuetcWmZim = -7.854574240506242;
		const _originalCallbacksEwrlaqg = [_arrayValuebnP2Zan, _arrayValuetcWmZim]
		const _returnValueQe2Ch3i = await breadthFirstSearch(_graphJQteVoJ, _startVertex44wUjV, _originalCallbacksEwrlaqg)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuenGWuDdu = {
		
	}
		const _arrayValuees5bjt4 = "7B73xIqbhi4eUU276XhrnzyXE8jA1gXurxHPunJNMDCeFVaSUG5QJ";
		const _returnValueG6h1YLt = [_arrayValuenGWuDdu, _arrayValuees5bjt4]
		const _arrayValuesVswEE2 = () => { return _returnValueG6h1YLt };
		const _arrayValueVUwkUjX = "qMFSpYB5Tgnbxwtv1345FUDc4d4o2FBtsvku925dYvYD3rPeDeV";
		const _arrayValueeR6wEf9 = [_arrayValueVUwkUjX]
		const _arrayValuexVP40lg = {
		
	}
		const _returnValueLKL9Ag3 = [_arrayValueeR6wEf9, _arrayValuexVP40lg]
		const _arrayValueKsmAlhu = () => { return _returnValueLKL9Ag3 };
		const _arrayValueOr4NTXB = 6.816133542436443;
		const _valuedsCWUeI = [_arrayValuesVswEE2, _arrayValueKsmAlhu, _arrayValueOr4NTXB]
		const _graphFQGt2a9 = new GraphVertex(_valuedsCWUeI)
		const _vertexYCgHbve = false;
		const _returnValuetCwxyU0 = await _graphFQGt2a9.findEdge(_vertexYCgHbve)
		const _returnValuedU97VjZ = await _graphFQGt2a9.getDegree()
		const _returnValueTMjtUNd = await _graphFQGt2a9.getEdges()
		const _returnValuevh9xYK2 = {
		
	}
		const _callbackTkpZGxA = () => { return _returnValuevh9xYK2 };
		const _returnValueLee56OJ = await _graphFQGt2a9.toString(_callbackTkpZGxA)
		const _startVertexTRDEJo = "4ctIB3J1s7CbGEv87ug0CFRme1iwW12LsQnZFt7u6HbC6fm9TH4P";
		const _arrayValueJRSa3ku = -4.910487407916166;
		const _originalCallbacks8omnLC = [_arrayValueJRSa3ku]
		const _returnValue91njJC = await breadthFirstSearch(_graphFQGt2a9, _startVertexTRDEJo, _originalCallbacks8omnLC)
	});
})