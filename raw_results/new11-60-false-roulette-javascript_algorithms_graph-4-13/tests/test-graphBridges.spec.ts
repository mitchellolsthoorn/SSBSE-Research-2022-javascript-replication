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
		const _graphabf4v3 = "AdKLWCEa";
		const _returnValueb3Yb7bS = await graphBridges(_graphabf4v3)
	});

	it('test for graphBridges', async () => {
		const _isDirectedNS7JLoy = true;
		const _graphWEwIHDC = new Graph(_isDirectedNS7JLoy)
		const _returnValuep3pW3Xp = await _graphWEwIHDC.reverse()
		const _returnValueFN5KYrh = await _graphWEwIHDC.getVerticesIndices()
		const _arrayValueQoEytXE = "wCWKcCC24YIcqPhnFEEN1y7JWuhX8NlWb7vGhOOiR9HgfiQzaSgXpcLEahsBo8kXd5R8IWoYM96Xs7My1bVyNxtlchCjOxoFbx";
		const _arrayValueVEkmIPX = -7.623939528604677;
		const _arrayValueYHW2MXL = [_arrayValueQoEytXE, _arrayValueVEkmIPX]
		const _arrayValueN4vBlQg = 1.7486534017820183;
		const _valueQZ1vFDT = [_arrayValueYHW2MXL, _arrayValueN4vBlQg]
		const _returnValueJ6DGUAe = "sQVKxEkO7GoMLkUwfNZtigh8nSrA";
		const _keyCallbackK2XTWiY = () => { return _returnValueJ6DGUAe };
		const _newVertexdswX7iK = new DisjointSetItem(_valueQZ1vFDT, _keyCallbackK2XTWiY)
		const _returnValuetKLkzIZ = await _newVertexdswX7iK.getChildren()
		const _returnValuedDHdNpi = await _newVertexdswX7iK.getRoot()
		const _returnValuePIsQXJV = await _graphWEwIHDC.addVertex(_newVertexdswX7iK)
		const _returnValuepnFtAN3 = await graphBridges(_graphWEwIHDC)
	});
})