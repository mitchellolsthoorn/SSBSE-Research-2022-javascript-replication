export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _graphvBLp1Lq = "RPLkzN3cqU3gw8y1Xjr47R8J1Uxez69pfhqp6S7xdLvgcuOavaO6KVGKs7jEFpsTQ21h5j4nR4Y";
		const _returnValueule17FE = await graphBridges(_graphvBLp1Lq)
	});

	it('test for graphBridges', async () => {
		const _isDirectedSeZnKcM = false;
		const _graphEXbuKw6 = new Graph(_isDirectedSeZnKcM)
		const _returnValuemJ9mdU3 = undefined;
		const _getKeyTabWwQ6 = () => { return _returnValuemJ9mdU3 };
		const _startVertexrsIPl1j = {
			"getKey": _getKeyTabWwQ6
	}
		const _endVertexPXtFJ2c = "C58RSvTUCPTVWx4dNRdFngtV";
		const _returnValuev81qOco = await _graphEXbuKw6.findEdge(_startVertexrsIPl1j, _endVertexPXtFJ2c)
		const _arrayValue3ejyEx = undefined;
		const _arrayValueAz90Cus = -0.09128539268421676;
		const _arrayValuezc6knM9 = undefined;
		const _valuemGc9oTL = [_arrayValue3ejyEx, _arrayValueAz90Cus, _arrayValuezc6knM9]
		const _returnValueXhyIFb2 = "xsXXOHprzezLb1h3XRHAI9RGnw4Qrg5sljlfPkE4IqqCYK6";
		const _keyCallbackozjfS5e = () => { return _returnValueXhyIFb2 };
		const _newVertexZtUBgIs = new DisjointSetItem(_valuemGc9oTL, _keyCallbackozjfS5e)
		const _returnValueOoR2Ca = await _newVertexZtUBgIs.getChildren()
		const _returnValueO16JR0V = await _newVertexZtUBgIs.isRoot()
		const _returnValueLKabgX4 = await _newVertexZtUBgIs.getChildren()
		const _returnValueiWTaUg9 = await _graphEXbuKw6.addVertex(_newVertexZtUBgIs)
		const _returnValueuTxY2hr = await _graphEXbuKw6.getVerticesIndices()
		const _returnValuef1ah6eZ = await graphBridges(_graphEXbuKw6)
	});
})