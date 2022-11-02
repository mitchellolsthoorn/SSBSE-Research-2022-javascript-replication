export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueMl11XlY = "5A5lq3ynPhgO3U7NJkuAJjLRAV8dn5F5JmiKpqry2EMlQgO5VAAWBTbcXf26o3hFWUlkd";
		const _graphaDc8rFc = () => { return _returnValueMl11XlY };
		const _arrayValueewxr2x4 = undefined;
		const _startVertexTVpV5xE = [_arrayValueewxr2x4]
		const _returnValueqNh21L = await dijkstra(_graphaDc8rFc, _startVertexTVpV5xE)
	});

	it('test for dijkstra', async () => {
		const _isDirectedZAwF8s = false;
		const _graphdyzvtVV = new Graph(_isDirectedZAwF8s)
		const _vertexKeyAuQvuv = false;
		const _returnValuePLfIA7N = await _graphdyzvtVV.getVertexByKey(_vertexKeyAuQvuv)
		const _returnValueXOOZxZz = await _graphdyzvtVV.getWeight()
		const _vertexKeyBRnD7cb = null;
		const _returnValuezdqUJQP = await _graphdyzvtVV.getVertexByKey(_vertexKeyBRnD7cb)
		const _returnValueTDADP0 = -3.076068624664833;
		const _getKey8TmTKn = () => { return _returnValueTDADP0 };
		const _startVertexFQYdJ9c = {
			"getKey": _getKey8TmTKn
	}
		const _returnValueWdNRFHa = await dijkstra(_graphdyzvtVV, _startVertexFQYdJ9c)
	});
})