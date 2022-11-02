export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueeT0IkAu = 9.067002878150088;
		const _graphlj68T4b = () => { return _returnValueeT0IkAu };
		const _returnValuep90PSj1 = await floydWarshall(_graphlj68T4b)
	});

	it('test for floydWarshall', async () => {
		const _returnValueWs7bpcF = 8.16223177153146;
		const _getAllVerticesJtcEwB = () => { return _returnValueWs7bpcF };
		const _findEdgezsEmdK = undefined;
		const _graphv53Bg8P = {
			"getAllVertices": _getAllVerticesJtcEwB,
		"findEdge": _findEdgezsEmdK
	}
		const _returnValueJU3bbN9 = await floydWarshall(_graphv53Bg8P)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedWHjGUx = true;
		const _graphx9g8J5 = new Graph(_isDirectedWHjGUx)
		const _vertexKeyezRPnRU = "R5vePrVP";
		const _returnValuef9Fuvnr = await _graphx9g8J5.getVertexByKey(_vertexKeyezRPnRU)
		const _returnValueH60aqs = await _graphx9g8J5.toString()
		const _returnValuewwjgkXK = await floydWarshall(_graphx9g8J5)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueUphqzKO = null;
		const _returnValueZVMgvPU = [_arrayValueUphqzKO]
		const _arrayValuew2Rky93 = () => { return _returnValueZVMgvPU };
		const _returnValue0pMXcj = [_arrayValuew2Rky93]
		const _getAllVerticesR8TLl8E = () => { return _returnValue0pMXcj };
		const _returnValuehgGK6fl = undefined;
		const _arrayValuevezxLiz = () => { return _returnValuehgGK6fl };
		const _arrayValueT2yIOfb = "Xcgwp1gmQJW";
		const _returnValueWewYen7 = [_arrayValuevezxLiz, _arrayValueT2yIOfb]
		const _findEdgeVUXBkuZ = () => { return _returnValueWewYen7 };
		const _graph3EGOZZ = {
			"getAllVertices": _getAllVerticesR8TLl8E,
		"findEdge": _findEdgeVUXBkuZ
	}
		const _returnValueIB2INxK = await floydWarshall(_graph3EGOZZ)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuePjKe61 = null;
		const _arrayValueOVcJyBT = 3.0574142075954605;
		const _arrayValueyHWZ2BY = null;
		const _returnValuewmqm9yT = [_arrayValuePjKe61, _arrayValueOVcJyBT, _arrayValueyHWZ2BY]
		const _getAllVerticesLK5ZLkh = () => { return _returnValuewmqm9yT };
		const _returnValues5fV2B3 = "RdKOc";
		const _findEdgeqRXSUc1 = () => { return _returnValues5fV2B3 };
		const _graphNk29iqg = {
			"getAllVertices": _getAllVerticesLK5ZLkh,
		"findEdge": _findEdgeqRXSUc1
	}
		const _returnValueXOw2VY1 = await floydWarshall(_graphNk29iqg)
	});
})