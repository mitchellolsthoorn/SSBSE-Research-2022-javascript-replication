export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueThzyXFd = undefined;
		const _getAllVerticesGBjsckl = () => { return _returnValueThzyXFd };
		const _returnValue8rm0NL = false;
		const _findEdgeKSvjhPq = () => { return _returnValue8rm0NL };
		const _graphKRgFda = {
			"getAllVertices": _getAllVerticesGBjsckl,
		"findEdge": _findEdgeKSvjhPq
	}
		const _returnValuec2MRfHz = await floydWarshall(_graphKRgFda)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuehuhOIiz = true;
		const _returnValuet2OUv7 = [_arrayValuehuhOIiz]
		const _getAllVerticeseDsOriB = () => { return _returnValuet2OUv7 };
		const _returnValueGRggyrV = undefined;
		const _findEdgek3ZX46Y = () => { return _returnValueGRggyrV };
		const _graphl7aua4z = {
			"getAllVertices": _getAllVerticeseDsOriB,
		"findEdge": _findEdgek3ZX46Y
	}
		const _returnValuem1J8Xja = await floydWarshall(_graphl7aua4z)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueNEODnRh = null;
		const _arrayValueekq821Q = undefined;
		const _returnValuer1LDsM = [_arrayValueNEODnRh, _arrayValueekq821Q]
		const _getAllVerticesY9HDF9R = () => { return _returnValuer1LDsM };
		const _returnValueUAV1pWK = undefined;
		const _findEdged26AmEz = () => { return _returnValueUAV1pWK };
		const _graphPPOwatr = {
			"getAllVertices": _getAllVerticesY9HDF9R,
		"findEdge": _findEdged26AmEz
	}
		const _returnValueR6cwpNQ = await floydWarshall(_graphPPOwatr)
	});
})