export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _returnValueL8mBpw = {
		
	}
		const _isDirectedMogJqEF = () => { return _returnValueL8mBpw };
		const _returnValuekMquJzb = null;
		const _getAllVerticesb6VxNya = () => { return _returnValuekMquJzb };
		const _graphrNmBKJ = {
			"isDirected": _isDirectedMogJqEF,
		"getAllVertices": _getAllVerticesb6VxNya
	}
		const _returnValueBr5OsD7 = await prim(_graphrNmBKJ)
	});

	it('test for prim', async () => {
		const _isDirectedwUnS1bL = false;
		const _graphfTHPmGW = new Graph(_isDirectedwUnS1bL)
		const _returnValue4SGQoH = {
		
	}
		const _getKeyUYQI09 = () => { return _returnValue4SGQoH };
		const _newVertext5B1va = {
			"getKey": _getKeyUYQI09
	}
		const _returnValueUqAQkP6 = await _graphfTHPmGW.addVertex(_newVertext5B1va)
		const _returnValueKz1zOzp = await prim(_graphfTHPmGW)
	});
})