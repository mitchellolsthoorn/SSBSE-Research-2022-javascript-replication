export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValuee5U7rpt = "xpK6AqpnB8xYCFV2PsAZpvAKnAgb9tOKMZTN33Buj6lGuv57Gc6eKUttIbNd8Q";
		const _getAllVerticesluz3FET = () => { return _returnValuee5U7rpt };
		const _arrayValueX9k7bQ = []
		const _arrayValueGAqAzdM = 0.6521227347506287;
		const _arrayValueJIzDLia = "43t4kY91xF9eLsTi9hCOyFp42VzDB2PWD6S4hWmI1KV";
		const _returnValueGpUZfbq = [_arrayValueX9k7bQ, _arrayValueGAqAzdM, _arrayValueJIzDLia]
		const _getVertexByKeyx5Lp84g = () => { return _returnValueGpUZfbq };
		const _returnValuebE6ZAS = undefined;
		const _getNeighborswO2Dyh0 = () => { return _returnValuebE6ZAS };
		const _returnValuee8lbOhj = undefined;
		const _findEdgeJbHed5r = () => { return _returnValuee8lbOhj };
		const _graphbUYaovl = {
			"getAllVertices": _getAllVerticesluz3FET,
		"getVertexByKey": _getVertexByKeyx5Lp84g,
		"getNeighbors": _getNeighborswO2Dyh0,
		"findEdge": _findEdgeJbHed5r
	}
		const _returnValuewIhNCEG = {
		
	}
		const _getKeyWK88fE7 = () => { return _returnValuewIhNCEG };
		const _startVertexbSOMbSa = {
			"getKey": _getKeyWK88fE7
	}
		const _returnValueCutErWe = await bellmanFord(_graphbUYaovl, _startVertexbSOMbSa)
	});

	it('test for bellmanFord', async () => {
		const _returnValuevXi9szQ = []
		const _getAllVerticesE3w6l4u = () => { return _returnValuevXi9szQ };
		const _returnValuevjUI7AK = "wYjL9C1IvnWwlyZmyzFSHNoXG2RDkvqzm4CvMvQu8Zilg1gXcHzVPKeqzSYsL";
		const _getVertexByKeykj2GY7n = () => { return _returnValuevjUI7AK };
		const _getNeighborsBuBNGw = []
		const _returnValueP0F8GJr = "s3uLou4k9NXWUzulG97f6Do";
		const _findEdgewkWe2yE = () => { return _returnValueP0F8GJr };
		const _graphD97pDqh = {
			"getAllVertices": _getAllVerticesE3w6l4u,
		"getVertexByKey": _getVertexByKeykj2GY7n,
		"getNeighbors": _getNeighborsBuBNGw,
		"findEdge": _findEdgewkWe2yE
	}
		const _returnValueLndjz99 = undefined;
		const _getKey6Xf8VO = () => { return _returnValueLndjz99 };
		const _startVertexG0TorZ4 = {
			"getKey": _getKey6Xf8VO
	}
		const _returnValueXRYfOpv = await bellmanFord(_graphD97pDqh, _startVertexG0TorZ4)
	});
})