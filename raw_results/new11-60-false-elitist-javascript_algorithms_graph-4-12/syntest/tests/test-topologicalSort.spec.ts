export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _arrayValueL8LCzQu = false;
		const _arrayValuexVv1sa = "BrqqaN9X9EfsvIYpHGKa4qC6sgeLqYWVRhgDb1XtP4KmeSNs0YO6XBoqXmHv6w6XWLvew5ZVSUKclccvAU";
		const _arrayValuezeXBmlN = null;
		const _returnValuevMghNtY = [_arrayValueL8LCzQu, _arrayValuexVv1sa, _arrayValuezeXBmlN]
		const _getAllVerticesmv3y2yv = () => { return _returnValuevMghNtY };
		const _graphEwC1a3J = {
			"getAllVertices": _getAllVerticesmv3y2yv
	}
		const _returnValuefpqGi47 = await topologicalSort(_graphEwC1a3J)
	});
})