export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValuedUj0nFR = true;
		const _arrayValueoeg08df = () => { return _returnValuedUj0nFR };
		const _arrayValueMJP0Ged = undefined;
		const _arrayValue6xZMAM = false;
		const _graphAr8Xei9 = [_arrayValueoeg08df, _arrayValueMJP0Ged, _arrayValue6xZMAM]
		const _returnValueTjRf5XV = await topologicalSort(_graphAr8Xei9)
	});

	it('test for topologicalSort', async () => {
		const _returnValueAqUe9Y = []
		const _getAllVerticesDS7e3r = () => { return _returnValueAqUe9Y };
		const _graphBMwBiGp = {
			"getAllVertices": _getAllVerticesDS7e3r
	}
		const _returnValueiDWPsUb = await topologicalSort(_graphBMwBiGp)
	});
})