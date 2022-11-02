export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _arrayValueY1bx1oK = "pJbLw6Mvuv47CVaoSMvlkDmYtrvtBl21V3pacC9pkfVpSQe0ttzseq64igk7tf93bjALvtG5iVvbkcBJCJoKY1FLufJU3MIQ";
		const _graphXsAVcx = [_arrayValueY1bx1oK]
		const _returnValued1kYSXU = await topologicalSort(_graphXsAVcx)
	});
})