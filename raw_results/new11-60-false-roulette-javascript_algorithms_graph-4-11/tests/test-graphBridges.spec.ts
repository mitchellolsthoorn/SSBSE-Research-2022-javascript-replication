export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValuewrmZxLf = undefined;
		const _getAllVerticessplm5Wl = () => { return _returnValuewrmZxLf };
		const _returnValueWTTmrVV = {
		
	}
		const _findEdgeEsuS43F = () => { return _returnValueWTTmrVV };
		const _graphfb059r = {
			"getAllVertices": _getAllVerticessplm5Wl,
		"findEdge": _findEdgeEsuS43F
	}
		const _returnValueNDUdLew = await graphBridges(_graphfb059r)
	});

	it('test for graphBridges', async () => {
		const _isDirectedcwkOdha = false;
		const _graphIhfmlxG = new Graph(_isDirectedcwkOdha)
		const _returnValueANMXMNh = await _graphIhfmlxG.getVerticesIndices()
		const _returnValuek6jnYDO = await _graphIhfmlxG.getVerticesIndices()
		const _returnValuezmBip9q = await _graphIhfmlxG.getVerticesIndices()
		const _returnValuep5N37nZ = await _graphIhfmlxG.reverse()
		const _returnValueE9MQzUf = "EyFqqHLvTDb";
		const _getKeyLfnZUqg = () => { return _returnValueE9MQzUf };
		const _newVertexg8uWM8N = {
			"getKey": _getKeyLfnZUqg
	}
		const _returnValueyRH9pwx = await _graphIhfmlxG.addVertex(_newVertexg8uWM8N)
		const _returnValueP6Jqp2H = await graphBridges(_graphIhfmlxG)
	});
})