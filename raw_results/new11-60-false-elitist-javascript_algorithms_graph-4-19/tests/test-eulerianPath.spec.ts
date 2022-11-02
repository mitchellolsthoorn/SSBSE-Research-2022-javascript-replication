export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueWzxNLLu = {
		
	}
		const _getAllEdgeshHk3p1p = () => { return _returnValueWzxNLLu };
		const _returnValuecw9xgK7 = -7.443595332923474;
		const _getAllVerticesWw2KxFM = () => { return _returnValuecw9xgK7 };
		const _returnValuemY8jd2z = false;
		const _deleteEdgefM0puRS = () => { return _returnValuemY8jd2z };
		const _graphVUxhK7I = {
			"getAllEdges": _getAllEdgeshHk3p1p,
		"getAllVertices": _getAllVerticesWw2KxFM,
		"deleteEdge": _deleteEdgefM0puRS
	}
		const _returnValueK7dOBgl = await eulerianPath(_graphVUxhK7I)
	});

	it('test for eulerianPath', async () => {
		const _returnValueFlZia5 = []
		const _getAllEdgesNWYz1J2 = () => { return _returnValueFlZia5 };
		const _returnValueIRgKRRs = -4.473412527405369;
		const _getAllVerticesFw09P1k = () => { return _returnValueIRgKRRs };
		const _returnValueHjNMzcU = null;
		const _returnValue7E1Lpc = () => { return _returnValueHjNMzcU };
		const _deleteEdgeIw9Dvi = () => { return _returnValue7E1Lpc };
		const _graphKic3CL2 = {
			"getAllEdges": _getAllEdgesNWYz1J2,
		"getAllVertices": _getAllVerticesFw09P1k,
		"deleteEdge": _deleteEdgeIw9Dvi
	}
		const _returnValuewPu3mub = await eulerianPath(_graphKic3CL2)
	});
})