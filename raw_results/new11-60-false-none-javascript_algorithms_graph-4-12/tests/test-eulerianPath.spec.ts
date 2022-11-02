export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValuebFqGIWD = false;
		const _returnValuerbz9i62 = () => { return _returnValuebFqGIWD };
		const _graphVjaXwyl = () => { return _returnValuerbz9i62 };
		const _returnValueOTjcN7I = await eulerianPath(_graphVjaXwyl)
	});
})