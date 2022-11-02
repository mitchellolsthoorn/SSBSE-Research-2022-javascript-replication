export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _returnValueXSCS1XG = undefined;
		const _getAllVerticeskCuVEba = () => { return _returnValueXSCS1XG };
		const _graphjRBpb5b = {
			"getAllVertices": _getAllVerticeskCuVEba
	}
		const _returnValueVSK2IG1 = await topologicalSort(_graphjRBpb5b)
	});
})