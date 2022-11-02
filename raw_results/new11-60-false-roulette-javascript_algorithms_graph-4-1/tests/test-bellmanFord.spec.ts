export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphHo8d9fn = "HxwRK5YIc9DMVMPbv0XrAYn4iPM7j3k3euY4lYBO65ELetkTS35lOS";
		const _arrayValuejJnTpWd = "Nq4sccVKS3bihcZ4SnrhkV8sM4wrKuZ6mU3JD6zx9H5jXsQqSjIMogbkCwWt0e";
		const _startVertexjnZT5h = [_arrayValuejJnTpWd]
		const _returnValuef9MY0g = await bellmanFord(_graphHo8d9fn, _startVertexjnZT5h)
	});

	it('test for bellmanFord', async () => {
		const _returnValueht38vO5 = "fPeqVlNASStBf5k3XbX6DXTOGF8EvSyVBD3c4JPuEa2fRJit3sLAFVAbNDF";
		const _graphtLs0wbE = () => { return _returnValueht38vO5 };
		const _valueR1Yl3h = 8.210246776563778;
		const _returnValueuRWbIUY = undefined;
		const _keyCallbackG6y3fm8 = () => { return _returnValueuRWbIUY };
		const _startVertexANLrFff = new DisjointSetItem(_valueR1Yl3h, _keyCallbackG6y3fm8)
		const _returnValueGzipnPz = await _startVertexANLrFff.getRoot()
		const _returnValuezFql7hI = await _startVertexANLrFff.getChildren()
		const _returnValuecFsPgK = await bellmanFord(_graphtLs0wbE, _startVertexANLrFff)
	});

	it('test for bellmanFord', async () => {
		const _returnValuertJy8DC = []
		const _getAllVerticesW3bMXii = () => { return _returnValuertJy8DC };
		const _arrayValueoS7KZ1L = true;
		const _arrayValueC5Ptmbg = [_arrayValueoS7KZ1L]
		const _arrayValueIFkKfXN = undefined;
		const _returnValueqjn0FQj = [_arrayValueC5Ptmbg, _arrayValueIFkKfXN]
		const _getVertexByKeyPdu1t0o = () => { return _returnValueqjn0FQj };
		const _arrayValueI3Itr2l = true;
		const _arrayValuedD7J3vb = undefined;
		const _returnValueKMEWAov = [_arrayValueI3Itr2l, _arrayValuedD7J3vb]
		const _returnValuezEfHIlX = () => { return _returnValueKMEWAov };
		const _returnValuerdiTAui = () => { return _returnValuezEfHIlX };
		const _getNeighborsNUAuYEo = () => { return _returnValuerdiTAui };
		const _returnValuevKsYB3n = {
		
	}
		const _findEdgeQNS15f7 = () => { return _returnValuevKsYB3n };
		const _graphUKl13C7 = {
			"getAllVertices": _getAllVerticesW3bMXii,
		"getVertexByKey": _getVertexByKeyPdu1t0o,
		"getNeighbors": _getNeighborsNUAuYEo,
		"findEdge": _findEdgeQNS15f7
	}
		const _returnValuemm4FVbs = null;
		const _getKeykru9At4 = () => { return _returnValuemm4FVbs };
		const _startVertexZ48HXea = {
			"getKey": _getKeykru9At4
	}
		const _returnValueW26Bt2N = await bellmanFord(_graphUKl13C7, _startVertexZ48HXea)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedh4h6ZFm = false;
		const _graphekSQuSs = new Graph(_isDirectedh4h6ZFm)
		const _returnValuejpkXxMe = undefined;
		const _getKeyX3IB877 = () => { return _returnValuejpkXxMe };
		const _newVertexZz8jVf2 = {
			"getKey": _getKeyX3IB877
	}
		const _returnValueci674EO = await _graphekSQuSs.addVertex(_newVertexZz8jVf2)
		const _returnValuenTVIBQk = "VHmnKYzCGIISru1";
		const _getKeyRLwU36 = () => { return _returnValuenTVIBQk };
		const _startVertexS0gNslT = {
			"getKey": _getKeyRLwU36
	}
		const _returnValueFB6IXn = await bellmanFord(_graphekSQuSs, _startVertexS0gNslT)
	});
})