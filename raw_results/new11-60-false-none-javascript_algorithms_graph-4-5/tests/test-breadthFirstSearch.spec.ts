export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graphCLO445j = "WHLIaSdrP85pm2rrX58SqlH6nzqQ6r5";
		const _returnValuewyIiAh = true;
		const _startVertexsyIEGHe = () => { return _returnValuewyIiAh };
		const _originalCallbacksC4QpOkA = false;
		const _returnValuenVHDOiL = await breadthFirstSearch(_graphCLO445j, _startVertexsyIEGHe, _originalCallbacksC4QpOkA)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueFJst0Ya = 8.350224199765947;
		const _arrayValuerTM5rPk = undefined;
		const _arrayValue5pQ8Dh = [_arrayValueFJst0Ya, _arrayValuerTM5rPk]
		const _arrayValueBm8Qe0b = null;
		const _graphvtYL08c = [_arrayValue5pQ8Dh, _arrayValueBm8Qe0b]
		const _startVertexWmxXP4u = "O44f0Bjvi2idlaerXah6B7uJG381VYLuH64Py4mM9uWnY884lECuzpzT1FRVerM5NmjDL9TvbRICbCvSm";
		const _originalCallbacksktlpJy = undefined;
		const _returnValuezEMDdo0 = await breadthFirstSearch(_graphvtYL08c, _startVertexWmxXP4u, _originalCallbacksktlpJy)
	});
})