export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _isDirectedgxaLo72 = true;
		const _graphuxi5tCU = new Graph(_isDirectedgxaLo72)
		const _returnValueAWacIyj = await _graphuxi5tCU.getAllEdges()
		const _returnValueppv6145 = 0.33015251773180765;
		const _getNeighborsgs3vDal = () => { return _returnValueppv6145 };
		const _vertexfttogtg = {
			"getNeighbors": _getNeighborsgs3vDal
	}
		const _returnValuekzztk5S = await _graphuxi5tCU.getNeighbors(_vertexfttogtg)
		const _returnValueh0Vl8I = await graphBridges(_graphuxi5tCU)
	});

	it('test for graphBridges', async () => {
		const _isDirectedWmXcKfx = true;
		const _graphlIJUNAv = new Graph(_isDirectedWmXcKfx)
		const _valuemQSCR7i = true;
		const _returnValueHaQPRIv = true;
		const _keyCallbacksdWi6Av = () => { return _returnValueHaQPRIv };
		const _newVertexClU2Ng3 = new DisjointSetItem(_valuemQSCR7i, _keyCallbacksdWi6Av)
		const _returnValueZKEVeU7 = await _newVertexClU2Ng3.getRank()
		const _returnValueMJGTPlc = await _newVertexClU2Ng3.isRoot()
		const _returnValueZccdVj9 = await _newVertexClU2Ng3.getChildren()
		const _returnValuedNaGP1O = await _newVertexClU2Ng3.getRoot()
		const _returnValuexMgr9S = await _graphlIJUNAv.addVertex(_newVertexClU2Ng3)
		const _returnValuempiTsyP = await _graphlIJUNAv.reverse()
		const _returnValuejGjinyz = await graphBridges(_graphlIJUNAv)
	});
})