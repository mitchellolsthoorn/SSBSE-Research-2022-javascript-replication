export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueuQFaQBx = true;
		const _getAllVerticesYpyG9R7 = () => { return _returnValueuQFaQBx };
		const _arrayValuesjuDPz = undefined;
		const _returnValueLcAhrk3 = [_arrayValuesjuDPz]
		const _getAllEdgesgiQkpRG = () => { return _returnValueLcAhrk3 };
		const _graphJ6Mp3Rv = {
			"getAllVertices": _getAllVerticesYpyG9R7,
		"getAllEdges": _getAllEdgesgiQkpRG
	}
		const _returnValueGXWts6v = await detectUndirectedCycleUsingDisjointSet(_graphJ6Mp3Rv)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueSf26hZI = []
		const _getAllVerticesJdI4DGk = () => { return _returnValueSf26hZI };
		const _returnValuemIo3Bhs = "ccdBLRs0SENpflWWykN9Dtvi36MuRERS7aKzn3RIJD5g2IcgjrS8QSOxkVioI2B9Ia";
		const _getAllEdgesuIcWG2s = () => { return _returnValuemIo3Bhs };
		const _graphfIaLWn = {
			"getAllVertices": _getAllVerticesJdI4DGk,
		"getAllEdges": _getAllEdgesuIcWG2s
	}
		const _returnValueGXvpvsC = await detectUndirectedCycleUsingDisjointSet(_graphfIaLWn)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueYUwm3o = []
		const _getAllVerticesPrtRG6U = () => { return _returnValueYUwm3o };
		const _arrayValueWHCpe7i = undefined;
		const _arrayValueCiVJZsP = null;
		const _arrayValue9rraL2 = false;
		const _returnValueo3KkVUk = [_arrayValueWHCpe7i, _arrayValueCiVJZsP, _arrayValue9rraL2]
		const _getAllEdgeszz2OiNi = () => { return _returnValueo3KkVUk };
		const _graphfh9ju5a = {
			"getAllVertices": _getAllVerticesPrtRG6U,
		"getAllEdges": _getAllEdgeszz2OiNi
	}
		const _returnValuePk7SjRn = await detectUndirectedCycleUsingDisjointSet(_graphfh9ju5a)
	});
})