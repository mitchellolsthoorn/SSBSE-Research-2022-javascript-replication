export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueuugwiT8 = null;
		const _getAllVerticesXuHHdDJ = () => { return _returnValueuugwiT8 };
		const _arrayValuekzoXAS = undefined;
		const _returnValueDqT3QZE = null;
		const _arrayValuecFTZ9m = () => { return _returnValueDqT3QZE };
		const _arrayValuec3U5L1T = undefined;
		const _returnValueeUMYXUh = [_arrayValuekzoXAS, _arrayValuecFTZ9m, _arrayValuec3U5L1T]
		const _returnValueJB2TWzE = () => { return _returnValueeUMYXUh };
		const _getAllEdgessdNRUnv = () => { return _returnValueJB2TWzE };
		const _graphM4pI9jy = {
			"getAllVertices": _getAllVerticesXuHHdDJ,
		"getAllEdges": _getAllEdgessdNRUnv
	}
		const _returnValueaTXz2G6 = await detectUndirectedCycleUsingDisjointSet(_graphM4pI9jy)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedOcBAg9Y = true;
		const _graphnIYZFJb = new Graph(_isDirectedOcBAg9Y)
		const _arrayValue8aolIs = "e1EqYbGtMbPtxbk8rPOzRsKLEBMoJhE4haAatlu3ks7PPWQnRxGUfnTCxHQugfpjhF8uGaBFhF7p1sA8o6mSwGotv0kYa";
		const _arrayValueCFnchbk = {
		
	}
		const _arrayValueM0ZEoay = [_arrayValue8aolIs, _arrayValueCFnchbk]
		const _arrayValueBV7D70r = "qziMggGVLZnPCqgwtBgKkx7SpAa3M3RxrNjwBagdN3JO6IAwwftlAkqlTdywRjQdzJFQyJvXJK53mVEKLGKJdXesvUQnubXt5";
		const _arrayValuei9M8cVB = -0.27845566746715456;
		const _vertexKeyz7vwNKN = [_arrayValueM0ZEoay, _arrayValueBV7D70r, _arrayValuei9M8cVB]
		const _returnValuessllbQp = await _graphnIYZFJb.getVertexByKey(_vertexKeyz7vwNKN)
		const _returnValueE5P23q4 = await detectUndirectedCycleUsingDisjointSet(_graphnIYZFJb)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuesTcI1g7 = []
		const _getAllVerticesEXtpYI3 = () => { return _returnValuesTcI1g7 };
		const _arrayValueUqQga2v = 4.4100494254106195;
		const _arrayValueU2Va6NY = -5.690122387902323;
		const _arrayValue0BI46a = "uzUfciwjLe7JyTe1e9q5RG5kTqx6PuIRW8b7iWV";
		const _arrayValueKJFepFn = null;
		const _returnValuenIkboqG = "exWCa4lTYROPkhpp33zWDQGIcijrpF9vt7o5fDZRxtR1h2UBFGnAANDV7zZ6k2";
		const _arrayValueou2RLE = () => { return _returnValuenIkboqG };
		const _arrayValueJj3757C = [_arrayValueKJFepFn, _arrayValueou2RLE]
		const _returnValueZ1qhIuT = [_arrayValueUqQga2v, _arrayValueU2Va6NY, _arrayValue0BI46a, _arrayValueJj3757C]
		const _getAllEdgesR1TxbQ0 = () => { return _returnValueZ1qhIuT };
		const _graphqMrdlt0 = {
			"getAllVertices": _getAllVerticesEXtpYI3,
		"getAllEdges": _getAllEdgesR1TxbQ0
	}
		const _returnValuefvgzn2 = await detectUndirectedCycleUsingDisjointSet(_graphqMrdlt0)
	});
})