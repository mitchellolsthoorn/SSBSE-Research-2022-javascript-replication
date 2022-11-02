export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedkLYDcm = null;
		const _arrayValuejAzlkY = null;
		const _returnValueCNazXgQ = [_arrayValuejAzlkY]
		const _getAllVerticesQ1GidmV = () => { return _returnValueCNazXgQ };
		const _graphSK0tBBh = {
			"isDirected": _isDirectedkLYDcm,
		"getAllVertices": _getAllVerticesQ1GidmV
	}
		const _returnValuezl9tAws = await prim(_graphSK0tBBh)
	});

	it('test for prim', async () => {
		const _isDirectedW1XRFbm = -8.364495356583204;
		const _returnValuercuu9vm = null;
		const _getAllVerticesz2nCqmU = () => { return _returnValuercuu9vm };
		const _graphuKtamMW = {
			"isDirected": _isDirectedW1XRFbm,
		"getAllVertices": _getAllVerticesz2nCqmU
	}
		const _returnValuew9FFv3U = await prim(_graphuKtamMW)
	});

	it('test for prim', async () => {
		const _isDirectedDrybXNU = false;
		const _graphkK1W4L = new Graph(_isDirectedDrybXNU)
		const _valuey9izaA4 = {
		
	}
		const _returnValuearmG9KW = undefined;
		const _keyCallbackwY100Ki = () => { return _returnValuearmG9KW };
		const _newVertexrybeU8k = new DisjointSetItem(_valuey9izaA4, _keyCallbackwY100Ki)
		const _returnValuehX2VDUJ = await _newVertexrybeU8k.getRoot()
		const _returnValueFgUhed = await _newVertexrybeU8k.getKey()
		const _returnValueEAaculA = await _graphkK1W4L.addVertex(_newVertexrybeU8k)
		const _returnValuer2tfqG = await prim(_graphkK1W4L)
	});
})