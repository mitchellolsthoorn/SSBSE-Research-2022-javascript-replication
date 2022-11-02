export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueMZFmlaK = true;
		const _arrayValueKN2ykQN = () => { return _returnValueMZFmlaK };
		const _arrayValueY99Pvjk = []
		const _arrayValueVZ0KFgZ = null;
		const _arrayValueEVplXDn = [_arrayValueKN2ykQN, _arrayValueY99Pvjk, _arrayValueVZ0KFgZ]
		const _arrayValuezE8XPrN = {
		
	}
		const _arrayValuezJEBaQo = "f8iJwrmokVKhZGrenehcBxjKT5v3to9TnYXXP8wSiuwE6u4n6blCJcYMuxUnislgCtDM1svitHnnEUH4WRc5q";
		const _graphBXgCiaJ = [_arrayValueEVplXDn, _arrayValuezE8XPrN, _arrayValuezJEBaQo]
		const _returnValuepRqBq0n = await eulerianPath(_graphBXgCiaJ)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedEZ9kCF6 = false;
		const _graphK8xFdzt = new Graph(_isDirectedEZ9kCF6)
		const _returnValueotbbnP2 = await _graphK8xFdzt.getAdjacencyMatrix()
		const _returnValuemEDyuNa = await _graphK8xFdzt.getVerticesIndices()
		const _returnValuesMxNDuJ = await _graphK8xFdzt.reverse()
		const _returnValueOrUXmBF = await eulerianPath(_graphK8xFdzt)
	});
})