export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _arrayValuef53GK5u = -1.1648152149006297;
		const _arrayValueDcAEu8Z = true;
		const _arrayValueJUeJcl4 = [_arrayValueDcAEu8Z]
		const _arrayValueqMNbHBg = true;
		const _arrayValueCzlr2rJ = [_arrayValueJUeJcl4, _arrayValueqMNbHBg]
		const _graphL8ELa5i = [_arrayValuef53GK5u, _arrayValueCzlr2rJ]
		const _returnValuehDam3wc = await eulerianPath(_graphL8ELa5i)
	});
})