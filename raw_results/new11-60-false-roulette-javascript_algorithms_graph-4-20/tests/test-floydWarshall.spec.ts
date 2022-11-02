export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValuerZDjCoe = -8.856713254497054;
		const _getAllVerticesGFOVRt = () => { return _returnValuerZDjCoe };
		const _returnValueUHXL0do = false;
		const _findEdgeGis5zA8 = () => { return _returnValueUHXL0do };
		const _graphzNCJbS6 = {
			"getAllVertices": _getAllVerticesGFOVRt,
		"findEdge": _findEdgeGis5zA8
	}
		const _returnValuewmgvodR = await floydWarshall(_graphzNCJbS6)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedQmxqkC8 = true;
		const _graphJLlki4J = new Graph(_isDirectedQmxqkC8)
		const _returnValueolZwNY7 = await _graphJLlki4J.reverse()
		const _returnValuedh8wzKS = await floydWarshall(_graphJLlki4J)
	});

	it('test for floydWarshall', async () => {
		const _arrayValue2GCIRE = true;
		const _arrayValuezuEJx17 = undefined;
		const _arrayValueQAMWduR = undefined;
		const _returnValueWO6ziWV = [_arrayValue2GCIRE, _arrayValuezuEJx17, _arrayValueQAMWduR]
		const _getAllVerticesM44LEhz = () => { return _returnValueWO6ziWV };
		const _returnValueyymfnj6 = 3.7804594485684397;
		const _findEdgedRUbX0x = () => { return _returnValueyymfnj6 };
		const _graphqSnSiZX = {
			"getAllVertices": _getAllVerticesM44LEhz,
		"findEdge": _findEdgedRUbX0x
	}
		const _returnValueDRsZDpn = await floydWarshall(_graphqSnSiZX)
	});
})