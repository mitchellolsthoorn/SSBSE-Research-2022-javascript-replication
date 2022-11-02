export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueqEPDu7t = false;
		const _getAllVerticesfAvfVpv = () => { return _returnValueqEPDu7t };
		const _graphdx2CjId = {
			"getAllVertices": _getAllVerticesfAvfVpv
	}
		const _returnValuerFFHjRA = await topologicalSort(_graphdx2CjId)
	});
})