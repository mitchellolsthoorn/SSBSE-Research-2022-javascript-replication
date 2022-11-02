export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _returnValuecTqvNGa = "twcakaV3oxfbDP3nMsVngBBwQq8FHuKZZEtvmefF30NtzfD37eRAl7qBBLIoCboZek0w418ahiORHK0ADycpQwSYmLKSQJY";
		const _graphJo72Va7 = () => { return _returnValuecTqvNGa };
		const _returnValueNt6YXKq = await kruskal(_graphJo72Va7)
	});

	it('test for kruskal', async () => {
		const _isDirectedSuJcLrA = {
		
	}
		const _arrayValueOJJ3tVf = true;
		const _arrayValueXmtxVm0 = "QX8lhxv7keS86vbqx86LRtEgf4eJE9osUH";
		const _returnValueuVjr5n7 = [_arrayValueOJJ3tVf, _arrayValueXmtxVm0]
		const _getAllEdgesoSDiisM = () => { return _returnValueuVjr5n7 };
		const _returnValueUUMcniu = []
		const _getAllVerticeslB01YuZ = () => { return _returnValueUUMcniu };
		const _graphtkJ8Yj = {
			"isDirected": _isDirectedSuJcLrA,
		"getAllEdges": _getAllEdgesoSDiisM,
		"getAllVertices": _getAllVerticeslB01YuZ
	}
		const _returnValuelN5ksS = await kruskal(_graphtkJ8Yj)
	});

	it('test for kruskal', async () => {
		const _isDirectedE9NLvqr = undefined;
		const _returnValueOEj05hq = "tSGQk8MPC6m4DampnNY4xPamrkLj3Y88";
		const _getAllEdgeslxKkCJe = () => { return _returnValueOEj05hq };
		const _returnValuelcLZmLP = 6.557082278345973;
		const _getAllVerticesiS012No = () => { return _returnValuelcLZmLP };
		const _graphdNa0vRp = {
			"isDirected": _isDirectedE9NLvqr,
		"getAllEdges": _getAllEdgeslxKkCJe,
		"getAllVertices": _getAllVerticesiS012No
	}
		const _returnValuepzquPYs = await kruskal(_graphdNa0vRp)
	});
})