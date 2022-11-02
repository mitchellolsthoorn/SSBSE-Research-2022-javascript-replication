export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueK6YovVc = null;
		const _getAllVerticesDzZicid = () => { return _returnValueK6YovVc };
		const _returnValueU126wjb = "4PH1a11zPLIxwoi";
		const _getAllEdgesArbFQ8u = () => { return _returnValueU126wjb };
		const _graphRGKI2eK = {
			"getAllVertices": _getAllVerticesDzZicid,
		"getAllEdges": _getAllEdgesArbFQ8u
	}
		const _returnValueiQGIdpb = await detectUndirectedCycleUsingDisjointSet(_graphRGKI2eK)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueNUaNOfX = []
		const _getAllVertices9iRbNC = () => { return _returnValueNUaNOfX };
		const _returnValuek5Yzrxn = -9.0707062048589;
		const _getAllEdgesXaBMCBq = () => { return _returnValuek5Yzrxn };
		const _graphc7jbKFY = {
			"getAllVertices": _getAllVertices9iRbNC,
		"getAllEdges": _getAllEdgesXaBMCBq
	}
		const _returnValueOcZSzlb = await detectUndirectedCycleUsingDisjointSet(_graphc7jbKFY)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuej8iEOug = []
		const _getAllVerticesRmsdUN = () => { return _returnValuej8iEOug };
		const _arrayValueeh68Dr4 = true;
		const _arrayValueHNmsFQk = "SAlfY5EVOyQeJOjpEtR5PYewYAHBVFKPoJEYin66W5qJYJna4lVBGrM4";
		const _arrayValueUVhowPj = "iWBztz9yf";
		const _arrayValueB2aMWr9 = [_arrayValueHNmsFQk, _arrayValueUVhowPj]
		const _arrayValueZONc80 = true;
		const _returnValueF411i6b = [_arrayValueeh68Dr4, _arrayValueB2aMWr9, _arrayValueZONc80]
		const _getAllEdgesgG2Ebgw = () => { return _returnValueF411i6b };
		const _graphqhlX0L = {
			"getAllVertices": _getAllVerticesRmsdUN,
		"getAllEdges": _getAllEdgesgG2Ebgw
	}
		const _returnValueIXziCY = await detectUndirectedCycleUsingDisjointSet(_graphqhlX0L)
	});
})