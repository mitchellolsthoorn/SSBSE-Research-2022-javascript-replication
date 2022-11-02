export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueGkGM80n = "CGfoYluWCbQycDKHGFwfzDTbYr7iYhUFQlbhkwPVbWns";
		const _getAllVerticessTFyLpP = () => { return _returnValueGkGM80n };
		const _returnValuejVHI3tl = false;
		const _getAllEdgesKf1q8HQ = () => { return _returnValuejVHI3tl };
		const _graphZynbopg = {
			"getAllVertices": _getAllVerticessTFyLpP,
		"getAllEdges": _getAllEdgesKf1q8HQ
	}
		const _returnValueGFvVYj7 = await detectUndirectedCycleUsingDisjointSet(_graphZynbopg)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueuRhQLE = []
		const _getAllVerticesQMJDw17 = () => { return _returnValueuRhQLE };
		const _returnValueEQMBLFx = undefined;
		const _getAllEdgespU2qJq = () => { return _returnValueEQMBLFx };
		const _graphMKxquPC = {
			"getAllVertices": _getAllVerticesQMJDw17,
		"getAllEdges": _getAllEdgespU2qJq
	}
		const _returnValuetOuXBT6 = await detectUndirectedCycleUsingDisjointSet(_graphMKxquPC)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuef20Wf0P = []
		const _getAllVerticesLlOvFno = () => { return _returnValuef20Wf0P };
		const _arrayValueUR3SSVA = "P7zcKm9igwVXcCyAE5eszjv6zketIJIIv3tvI3U2v78ne9hyviqoEF";
		const _arrayValueHf6clCj = undefined;
		const _arrayValueVqvP4yI = -8.516041386336736;
		const _arrayValueodFXd3J = [_arrayValueUR3SSVA, _arrayValueHf6clCj, _arrayValueVqvP4yI]
		const _arrayValue7AWUTq = false;
		const _arrayValueCzSYdW = null;
		const _returnValuekdGovG3 = [_arrayValueodFXd3J, _arrayValue7AWUTq, _arrayValueCzSYdW]
		const _getAllEdgesfASVKfV = () => { return _returnValuekdGovG3 };
		const _graphiUQ8Mm = {
			"getAllVertices": _getAllVerticesLlOvFno,
		"getAllEdges": _getAllEdgesfASVKfV
	}
		const _returnValueE2jT1K0 = await detectUndirectedCycleUsingDisjointSet(_graphiUQ8Mm)
	});
})