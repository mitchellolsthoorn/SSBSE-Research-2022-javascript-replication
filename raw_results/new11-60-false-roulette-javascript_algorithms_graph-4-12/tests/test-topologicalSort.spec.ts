export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _arrayValuexni8g78 = undefined;
		const _arrayValuesczwotA = true;
		const _returnValueYURyz81 = undefined;
		const _arrayValueq2CYiH = () => { return _returnValueYURyz81 };
		const _arrayValuer8gsIJ = null;
		const _returnValueCeBQBSU = [_arrayValuexni8g78, _arrayValuesczwotA, _arrayValueq2CYiH, _arrayValuer8gsIJ]
		const _graphXfx6Tx = () => { return _returnValueCeBQBSU };
		const _returnValuekLcl3FF = await topologicalSort(_graphXfx6Tx)
	});
})