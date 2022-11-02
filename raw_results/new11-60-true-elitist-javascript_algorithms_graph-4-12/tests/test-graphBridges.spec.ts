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
		const _returnValuej9XLBTn = null;
		const _getAllVerticesMgf5tel = () => { return _returnValuej9XLBTn };
		const _returnValueoV1V2rp = 0.5399406837545264;
		const _findEdgeGDFfw7A = () => { return _returnValueoV1V2rp };
		const _graphB9xXDhG = {
			"getAllVertices": _getAllVerticesMgf5tel,
		"findEdge": _findEdgeGDFfw7A
	}
		const _returnValueNzGn2qj = await graphBridges(_graphB9xXDhG)
	});

	it('test for graphBridges', async () => {
		const _isDirectedjY039we = false;
		const _graphy3K7LV6 = new Graph(_isDirectedjY039we)
		const _valueyJXiG56 = undefined;
		const _arrayValuemk2LT6k = false;
		const _arrayValueGAzA5kQ = "WEnvqqUSfcdFeMIyVKKLD6eBdoa43LN63ANwxfCSXxV596msFo";
		const _arrayValueIvALaUQ = null;
		const _arrayValueP8T3Imz = [_arrayValueIvALaUQ]
		const _returnValuemn2GuRL = [_arrayValuemk2LT6k, _arrayValueGAzA5kQ, _arrayValueP8T3Imz]
		const _returnValueb08Kik = () => { return _returnValuemn2GuRL };
		const _keyCallbacksM76QU = () => { return _returnValueb08Kik };
		const _newVertexuYipnkW = new DisjointSetItem(_valueyJXiG56, _keyCallbacksM76QU)
		const _returnValuez0lprR = await _newVertexuYipnkW.getChildren()
		const _returnValueIjeruPp = await _newVertexuYipnkW.getChildren()
		const _returnValuek1XjX3h = await _newVertexuYipnkW.getChildren()
		const _returnValueB96GMgk = await _graphy3K7LV6.addVertex(_newVertexuYipnkW)
		const _returnValuefwd1I8c = await graphBridges(_graphy3K7LV6)
	});
})