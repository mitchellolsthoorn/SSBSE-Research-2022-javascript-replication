export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _arrayValueRH4JAfW = true;
		const _returnValuew12x7Cw = [_arrayValueRH4JAfW]
		const _getAllVerticesxBcMe7q = () => { return _returnValuew12x7Cw };
		const _returnValuelOhSq8s = null;
		const _getAllEdgese1LImuc = () => { return _returnValuelOhSq8s };
		const _graphxmRPMDU = {
			"getAllVertices": _getAllVerticesxBcMe7q,
		"getAllEdges": _getAllEdgese1LImuc
	}
		const _returnValuewUWZ8DE = await detectUndirectedCycleUsingDisjointSet(_graphxmRPMDU)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuefXYIUne = []
		const _getAllVerticesQ0Jqd3j = () => { return _returnValuefXYIUne };
		const _returnValueVy1nUtb = "PsYmt5FT4kBJi6lqeRr3fOQCwynHe1cB67n9hPatj1LfJ6hd";
		const _getAllEdgesYJlbTZp = () => { return _returnValueVy1nUtb };
		const _graphuR8lbK = {
			"getAllVertices": _getAllVerticesQ0Jqd3j,
		"getAllEdges": _getAllEdgesYJlbTZp
	}
		const _returnValuefr56k8f = await detectUndirectedCycleUsingDisjointSet(_graphuR8lbK)
	});
})