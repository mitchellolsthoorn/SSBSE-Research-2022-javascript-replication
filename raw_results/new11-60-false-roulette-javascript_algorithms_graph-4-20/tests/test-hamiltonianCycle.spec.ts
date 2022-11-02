export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _getVerticesIndicesEqTYbjk = -7.063158367882098;
		const _returnValueer1Tg2o = undefined;
		const _getAdjacencyMatrixp5OnWOl = () => { return _returnValueer1Tg2o };
		const _returnValueyHQp0Si = "LuQZ2Ye8Q3ulLK0KvfMQWCmtlyV4fxQzW4tux63N0qrU9Jy6MPfpEqpE2bMTAJ2vdXFzesrAqzbBi";
		const _getAllVerticesTxCU179 = () => { return _returnValueyHQp0Si };
		const _graphMFlbUF = {
			"getVerticesIndices": _getVerticesIndicesEqTYbjk,
		"getAdjacencyMatrix": _getAdjacencyMatrixp5OnWOl,
		"getAllVertices": _getAllVerticesTxCU179
	}
		const _returnValuehPjVfHt = await hamiltonianCycle(_graphMFlbUF)
	});

	it('test for hamiltonianCycle', async () => {
		const _arrayValueP5d7L5N = true;
		const _arrayValueme52Ifc = null;
		const _arrayValueCau30ON = "RMsMOhCeKBCqPOP3PgQ9CMeBcIcJ1ZiyQYI1ERhK39uwpHSgWfLcbOQ6T";
		const _arrayValueQbcuuWF = [_arrayValueP5d7L5N, _arrayValueme52Ifc, _arrayValueCau30ON]
		const _returnValuedCacVE9 = [_arrayValueQbcuuWF]
		const _getVerticesIndicesK6J5sEX = () => { return _returnValuedCacVE9 };
		const _returnValueh0M9IqC = "3PdH4KmxzdlE0kQgf13qTI42XC6TskwGRRQhi";
		const _getAdjacencyMatrixf0sDBuR = () => { return _returnValueh0M9IqC };
		const _arrayValueM37Fz20 = null;
		const _returnValuebZzVUn = [_arrayValueM37Fz20]
		const _getAllVerticesl3shuKq = () => { return _returnValuebZzVUn };
		const _graphGKxgiI0 = {
			"getVerticesIndices": _getVerticesIndicesK6J5sEX,
		"getAdjacencyMatrix": _getAdjacencyMatrixf0sDBuR,
		"getAllVertices": _getAllVerticesl3shuKq
	}
		const _returnValueUojgxeV = await hamiltonianCycle(_graphGKxgiI0)
	});
})