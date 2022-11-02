export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _arrayValueKd2Fv06 = null;
		const _arrayValueB0qK59j = null;
		const _arrayValue4nBRp2 = true;
		const _graphn6lYYm7 = [_arrayValueKd2Fv06, _arrayValueB0qK59j, _arrayValue4nBRp2]
		const _returnValueophO9nk = await kruskal(_graphn6lYYm7)
	});

	it('test for kruskal', async () => {
		const _isDirectedIFRB73 = 0.08915182528456178;
		const _arrayValueH4bFW1J = "89e8Ro6gdrmDetLpM";
		const _arrayValueBagnUtB = -5.70840248476455;
		const _arrayValuedQ7vvCy = null;
		const _arrayValueQIOVKVd = 5.675829971528925;
		const _arrayValueEV5ILum = [_arrayValueQIOVKVd]
		const _arrayValuevZFJJXT = [_arrayValueH4bFW1J, _arrayValueBagnUtB, _arrayValuedQ7vvCy, _arrayValueEV5ILum]
		const _returnValueSeNSWhR = [_arrayValuevZFJJXT]
		const _getAllEdgesppRVeU5 = () => { return _returnValueSeNSWhR };
		const _returnValueciFYVqi = "vKb62Jb5s4veq26tmfknA5CP1Uny1HP1CBVNla22RQwvtSRffWD3BxCNgUxV3xdjLwJgiRuDDx9PCnUPvqGN9S1YBm1";
		const _getAllVerticesYGJwmZI = () => { return _returnValueciFYVqi };
		const _graphkuI5Vse = {
			"isDirected": _isDirectedIFRB73,
		"getAllEdges": _getAllEdgesppRVeU5,
		"getAllVertices": _getAllVerticesYGJwmZI
	}
		const _returnValueUOgYScu = await kruskal(_graphkuI5Vse)
	});

	it('test for kruskal', async () => {
		const _isDirectedpiy85jB = false;
		const _graphmLY2BPy = new Graph(_isDirectedpiy85jB)
		const _returnValuexUlOiSf = await _graphmLY2BPy.getAdjacencyMatrix()
		const _returnValuenJmoFIK = await _graphmLY2BPy.getAdjacencyMatrix()
		const _returnValueWYPV9dO = await kruskal(_graphmLY2BPy)
	});
})