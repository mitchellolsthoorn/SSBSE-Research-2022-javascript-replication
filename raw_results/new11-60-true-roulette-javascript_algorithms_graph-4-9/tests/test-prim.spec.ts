export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _arrayValueNLlzZ3a = null;
		const _arrayValueqXEFZk8 = true;
		const _arrayValuedpTxQ49 = null;
		const _arrayValueXlvtoG6 = null;
		const _arrayValuehwmUUOb = "MuoxGo4zPXtBhKCIpvAvx5U72Gz0aSt2xfCwYYCG";
		const _arrayValuefsOIuWI = {
		
	}
		const _arrayValue9rsMiH = undefined;
		const _arrayValueSBYY0sk = undefined;
		const _arrayValueZlBM1lz = [_arrayValuehwmUUOb, _arrayValuefsOIuWI, _arrayValue9rsMiH, _arrayValueSBYY0sk]
		const _arrayValuesn5tk3s = "FHFLmtMp7wfQYiNnrzKqPwDpbAS6nDIioT9X";
		const _arrayValueU31dUe4 = [_arrayValueXlvtoG6, _arrayValueZlBM1lz, _arrayValuesn5tk3s]
		const _isDirectedQVosqI = [_arrayValueNLlzZ3a, _arrayValueqXEFZk8, _arrayValuedpTxQ49, _arrayValueU31dUe4]
		const _arrayValueX7dVEdX = undefined;
		const _arrayValueAp8nqcz = [_arrayValueX7dVEdX]
		const _returnValueVVAxLMQ = undefined;
		const _arrayValueJ0kMZRo = () => { return _returnValueVVAxLMQ };
		const _returnValueQGb6kK = [_arrayValueAp8nqcz, _arrayValueJ0kMZRo]
		const _getAllVerticesO11RWNq = () => { return _returnValueQGb6kK };
		const _graphLniFTS6 = {
			"isDirected": _isDirectedQVosqI,
		"getAllVertices": _getAllVerticesO11RWNq
	}
		const _returnValuea3QpatH = await prim(_graphLniFTS6)
	});

	it('test for prim', async () => {
		const _isDirectedz3bgpei = false;
		const _graphb5tr75X = new Graph(_isDirectedz3bgpei)
		const _returnValueMuiFN2w = await _graphb5tr75X.getAllVertices()
		const _returnValueeK7Zu5l = null;
		const _getKeyzsxlanp = () => { return _returnValueeK7Zu5l };
		const _newVertexoA5VXY2 = {
			"getKey": _getKeyzsxlanp
	}
		const _returnValueOGNni0P = await _graphb5tr75X.addVertex(_newVertexoA5VXY2)
		const _returnValueIkJrUuV = await _graphb5tr75X.getWeight()
		const _returnValuebrmBi9L = await prim(_graphb5tr75X)
	});

	it('test for prim', async () => {
		const _isDirectedGHhaAEJ = null;
		const _graphdkiPKM = new Graph(_isDirectedGHhaAEJ)
		const _arrayValuec3IHo1A = {
		
	}
		const _valuewNWpOuq = [_arrayValuec3IHo1A]
		const _newVertexf9qoPr5 = new GraphVertex(_valuewNWpOuq)
		const _returnValueWPtLUdR = await _newVertexf9qoPr5.getKey()
		const _returnValueMNocTcH = await _newVertexf9qoPr5.getEdges()
		const _returnValueYTOzS8W = await _graphdkiPKM.addVertex(_newVertexf9qoPr5)
		const _returnValuerYn6eKV = await prim(_graphdkiPKM)
	});
})