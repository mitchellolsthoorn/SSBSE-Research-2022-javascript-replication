export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedH6mXBRb = 5.6626782807725355;
		const _arrayValueu6RK6XS = 7.682719138044359;
		const _returnValued8vten6 = [_arrayValueu6RK6XS]
		const _getAllEdgesIP9BJe = () => { return _returnValued8vten6 };
		const _returnValueewhsQSf = true;
		const _returnValuefKgLFPQ = () => { return _returnValueewhsQSf };
		const _getAllVerticesFi086m = () => { return _returnValuefKgLFPQ };
		const _graphOyvxQnH = {
			"isDirected": _isDirectedH6mXBRb,
		"getAllEdges": _getAllEdgesIP9BJe,
		"getAllVertices": _getAllVerticesFi086m
	}
		const _returnValueCrWocnM = await kruskal(_graphOyvxQnH)
	});

	it('test for kruskal', async () => {
		const _isDirectedUory1dJ = undefined;
		const _returnValuenqiq5q = []
		const _getAllEdgesDHOHAMm = () => { return _returnValuenqiq5q };
		const _returnValueuilPkyg = {
		
	}
		const _getAllVerticesgKlBWdw = () => { return _returnValueuilPkyg };
		const _graphZBHrdfa = {
			"isDirected": _isDirectedUory1dJ,
		"getAllEdges": _getAllEdgesDHOHAMm,
		"getAllVertices": _getAllVerticesgKlBWdw
	}
		const _returnValueHepHTd = await kruskal(_graphZBHrdfa)
	});
})