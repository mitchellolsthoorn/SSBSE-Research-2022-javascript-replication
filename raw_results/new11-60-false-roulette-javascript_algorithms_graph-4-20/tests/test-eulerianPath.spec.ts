export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValuejqd0P5V = undefined;
		const _returnValueJYLDn8q = () => { return _returnValuejqd0P5V };
		const _graphY8WdDL = () => { return _returnValueJYLDn8q };
		const _returnValueBBiHvau = await eulerianPath(_graphY8WdDL)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedjmZjHKM = true;
		const _graphCKvoQdd = new Graph(_isDirectedjmZjHKM)
		const _returnValueO7QRoEg = await _graphCKvoQdd.toString()
		const _returnValueZJqyXJ = await eulerianPath(_graphCKvoQdd)
	});
})