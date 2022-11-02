export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphpCSA0Wy = "mlALxcXPXHbmdFriwc4hewieHRa6yLlB7g93o5wfaw2u2aKISi1Wuln5g2jF8XcYomAABk2jkb5wDbikeCRpIvjlQcfDB7wTc";
		const _startVertexjlhTWZ7 = "rvFRugO6jDrE8WmI4quAPVWtOtmOFsMN5jMn6qhpr648owthJ8NU9zSo1xv7tLz6uFpedCkrlrthTbt6D3ItQG";
		const _returnValueXTJ4d1W = await bellmanFord(_graphpCSA0Wy, _startVertexjlhTWZ7)
	});

	it('test for bellmanFord', async () => {
		const _returnValuePjVhmt = true;
		const _graphCTl9zMN = () => { return _returnValuePjVhmt };
		const _returnValuedSgaPir = "d6hVGI2";
		const _valueTN1mcY = () => { return _returnValuedSgaPir };
		const _startVertexGbQFEoL = new GraphVertex(_valueTN1mcY)
		const _requiredEdgeltF9o6x = undefined;
		const _returnValueoEpMXss = await _startVertexGbQFEoL.hasEdge(_requiredEdgeltF9o6x)
		const _returnValueUUFgEBr = null;
		const _arrayValuexdttCjv = () => { return _returnValueUUFgEBr };
		const _arrayValueM9GfT14 = true;
		const _requiredEdgeRRdi86 = [_arrayValuexdttCjv, _arrayValueM9GfT14]
		const _returnValueBIHDbrR = await _startVertexGbQFEoL.hasEdge(_requiredEdgeRRdi86)
		const _edgeVCTw4m = undefined;
		const _returnValueCJKnUu4 = await _startVertexGbQFEoL.addEdge(_edgeVCTw4m)
		const _returnValueU0LapiD = await bellmanFord(_graphCTl9zMN, _startVertexGbQFEoL)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedticmpBC = false;
		const _graphrCWjqK0 = new Graph(_isDirectedticmpBC)
		const _returnValueGcOBQK3 = await _graphrCWjqK0.reverse()
		const _returnValueMpcPMt3 = null;
		const _getKeyvLdJ9JT = () => { return _returnValueMpcPMt3 };
		const _startVertexOKUFPxc = {
			"getKey": _getKeyvLdJ9JT
	}
		const _returnValueQuxut3s = await bellmanFord(_graphrCWjqK0, _startVertexOKUFPxc)
	});
})