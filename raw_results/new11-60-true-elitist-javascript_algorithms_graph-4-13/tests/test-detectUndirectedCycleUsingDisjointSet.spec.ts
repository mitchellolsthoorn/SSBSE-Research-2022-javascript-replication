export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _getAllVerticesN3Modl = undefined;
		const _returnValueFEKFzhU = undefined;
		const _getAllEdgesHTSew03 = () => { return _returnValueFEKFzhU };
		const _graphlCcfsHF = {
			"getAllVertices": _getAllVerticesN3Modl,
		"getAllEdges": _getAllEdgesHTSew03
	}
		const _returnValueAQ1YCw1 = await detectUndirectedCycleUsingDisjointSet(_graphlCcfsHF)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuegV3p3CD = []
		const _getAllVerticesrrE1wdP = () => { return _returnValuegV3p3CD };
		const _arrayValuebzZS3X8 = true;
		const _arrayValueK7oTMkZ = 5.269521560126886;
		const _arrayValueCNsPIzB = [_arrayValueK7oTMkZ]
		const _returnValueAPmfuRV = [_arrayValuebzZS3X8, _arrayValueCNsPIzB]
		const _getAllEdgespyZxE5X = () => { return _returnValueAPmfuRV };
		const _graphHnDKRBA = {
			"getAllVertices": _getAllVerticesrrE1wdP,
		"getAllEdges": _getAllEdgespyZxE5X
	}
		const _returnValueEaHYKcy = await detectUndirectedCycleUsingDisjointSet(_graphHnDKRBA)
	});
})