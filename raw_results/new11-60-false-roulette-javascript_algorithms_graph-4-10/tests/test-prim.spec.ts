export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _returnValueLsE3lJ4 = undefined;
		const _graphu0NW49i = () => { return _returnValueLsE3lJ4 };
		const _returnValueJqK1r7f = await prim(_graphu0NW49i)
	});

	it('test for prim', async () => {
		const _isDirectedyVENjjJ = []
		const _returnValueiSSUSq1 = -3.232418301825767;
		const _getAllVerticeskOpuCaa = () => { return _returnValueiSSUSq1 };
		const _graphNkfPqAe = {
			"isDirected": _isDirectedyVENjjJ,
		"getAllVertices": _getAllVerticeskOpuCaa
	}
		const _returnValueIwlxtR0 = await prim(_graphNkfPqAe)
	});
})