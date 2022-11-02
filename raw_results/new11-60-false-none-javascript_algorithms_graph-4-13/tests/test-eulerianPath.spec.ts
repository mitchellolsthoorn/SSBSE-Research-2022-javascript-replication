export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _arrayValueyDmoO77 = undefined;
		const _arrayValueioJTyYZ = null;
		const _graphSX9QaaH = [_arrayValueyDmoO77, _arrayValueioJTyYZ]
		const _returnValuej2A794T = await eulerianPath(_graphSX9QaaH)
	});
})