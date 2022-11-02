export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueScO9wZY = true;
		const _returnValueqYT6qUe = () => { return _returnValueScO9wZY };
		const _getAllVertices8YYZcN = () => { return _returnValueqYT6qUe };
		const _graphBs4MVDc = {
			"getAllVertices": _getAllVertices8YYZcN
	}
		const _returnValueLcIe2ld = await topologicalSort(_graphBs4MVDc)
	});
})