export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _arrayValueZKHP0YS = {
		
	}
		const _arrayValueqevFJYs = [_arrayValueZKHP0YS]
		const _returnValueiSgYcVU = null;
		const _arrayValueczTNyZx = () => { return _returnValueiSgYcVU };
		const _arrayValuexvfARNY = "bfNqEou1eHES7aGu4hnF1h2";
		const _returnValuer7VsmJA = [_arrayValueqevFJYs, _arrayValueczTNyZx, _arrayValuexvfARNY]
		const _getAllVerticesNz4Vk8t = () => { return _returnValuer7VsmJA };
		const _returnValuet2fjkUp = -2.6758519358916386;
		const _findEdgeyEc5hTp = () => { return _returnValuet2fjkUp };
		const _graphlEoYRMw = {
			"getAllVertices": _getAllVerticesNz4Vk8t,
		"findEdge": _findEdgeyEc5hTp
	}
		const _returnValuexGBROS = await graphBridges(_graphlEoYRMw)
	});

	it('test for graphBridges', async () => {
		const _isDirectedZDjUst2 = false;
		const _graphI9kIBUq = new Graph(_isDirectedZDjUst2)
		const _returnValueGTBvawQ = "PzCMs86p";
		const _getKeyFJchEqK = () => { return _returnValueGTBvawQ };
		const _newVertexWeidK6 = {
			"getKey": _getKeyFJchEqK
	}
		const _returnValueRxuWWfg = await _graphI9kIBUq.addVertex(_newVertexWeidK6)
		const _returnValuesNXtZCd = await graphBridges(_graphI9kIBUq)
	});
})