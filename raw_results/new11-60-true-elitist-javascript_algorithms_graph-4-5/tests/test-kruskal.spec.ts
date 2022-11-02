export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedsfLsH08 = null;
		const _returnValueRc8VwoY = -5.228894904409035;
		const _getAllEdgespI5yieZ = () => { return _returnValueRc8VwoY };
		const _returnValuen21KkFS = -0.7277690053976844;
		const _getAllVerticesb0a0qzG = () => { return _returnValuen21KkFS };
		const _graphUW8Fo55 = {
			"isDirected": _isDirectedsfLsH08,
		"getAllEdges": _getAllEdgespI5yieZ,
		"getAllVertices": _getAllVerticesb0a0qzG
	}
		const _returnValueLQ9uzcE = await kruskal(_graphUW8Fo55)
	});

	it('test for kruskal', async () => {
		const _isDirectedOfxpT9G = []
		const _getAllEdgesjQrKfQu = undefined;
		const _arrayValuetwbaJSf = {
		
	}
		const _arrayValuevsS47cX = 1.4706141971579;
		const _returnValuekzIvLn = [_arrayValuetwbaJSf, _arrayValuevsS47cX]
		const _getAllVerticesw1GX7Us = () => { return _returnValuekzIvLn };
		const _graphjcSC9RW = {
			"isDirected": _isDirectedOfxpT9G,
		"getAllEdges": _getAllEdgesjQrKfQu,
		"getAllVertices": _getAllVerticesw1GX7Us
	}
		const _returnValueAok2NhF = await kruskal(_graphjcSC9RW)
	});

	it('test for kruskal', async () => {
		const _isDirectedXU9DL4l = null;
		const _returnValuewEePQGm = "DMPuYbXgx0XMQLtJchbcpCQmczOSWbNYFVCKxSpHjlo8L7U8xxC3o8ACEs3v";
		const _getAllEdgesfviAlW = () => { return _returnValuewEePQGm };
		const _returnValuefvR8GQX = null;
		const _getAllVerticesjLVqzsv = () => { return _returnValuefvR8GQX };
		const _graphGXvkzgC = {
			"isDirected": _isDirectedXU9DL4l,
		"getAllEdges": _getAllEdgesfviAlW,
		"getAllVertices": _getAllVerticesjLVqzsv
	}
		const _returnValueIfZ6Bqe = await kruskal(_graphGXvkzgC)
	});
})