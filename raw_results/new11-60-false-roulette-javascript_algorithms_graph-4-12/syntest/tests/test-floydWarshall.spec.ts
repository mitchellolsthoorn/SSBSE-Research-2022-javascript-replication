export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _arrayValue9EEUtY = 6.552042714441519;
		const _arrayValueL9QC3Tw = null;
		const _arrayValueBWEO2B4 = -8.13090396887081;
		const _returnValuejVitCqY = [_arrayValue9EEUtY, _arrayValueL9QC3Tw, _arrayValueBWEO2B4]
		const _graphbs74zF2 = () => { return _returnValuejVitCqY };
		const _returnValuepKiirS1 = await floydWarshall(_graphbs74zF2)
	});

	it('test for floydWarshall', async () => {
		const _returnValueGsLMUxB = "bvqD0gITqNbfQ55jRWhI88MdEQYFiIh6VJtFmIw8YT9kbaIYxIE1mYbfQ6mGE9BGnAC2elh36oYfFWV91ibgiXi7WVXp4VsfDXQ";
		const _getAllVerticeso3ilAvo = () => { return _returnValueGsLMUxB };
		const _returnValueYpRGuqs = "KpPEubtoyrPfpa668";
		const _findEdgeNWMXxld = () => { return _returnValueYpRGuqs };
		const _graphsGRzcJB = {
			"getAllVertices": _getAllVerticeso3ilAvo,
		"findEdge": _findEdgeNWMXxld
	}
		const _returnValues80Yx8q = await floydWarshall(_graphsGRzcJB)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueMcNoRsK = "uq65nk";
		const _arrayValueDKYrtcG = 4.410249856881805;
		const _arrayValuetW5IfTT = -3.416466696582691;
		const _returnValuezE7H76P = [_arrayValueMcNoRsK, _arrayValueDKYrtcG, _arrayValuetW5IfTT]
		const _getAllVerticestqBk8px = () => { return _returnValuezE7H76P };
		const _returnValueW89VL2v = "rOIivVB25GJrQwvF8NeQnC4TKu7sb2mD2YrUDahnVFlKGWWweVyMEYdcEhk2jIHY761fLixfbEVMCS6c";
		const _returnValuedUhGCrV = () => { return _returnValueW89VL2v };
		const _findEdgeTFm4qQY = () => { return _returnValuedUhGCrV };
		const _graphZhJJSt = {
			"getAllVertices": _getAllVerticestqBk8px,
		"findEdge": _findEdgeTFm4qQY
	}
		const _returnValueMOoI1YJ = await floydWarshall(_graphZhJJSt)
	});
})