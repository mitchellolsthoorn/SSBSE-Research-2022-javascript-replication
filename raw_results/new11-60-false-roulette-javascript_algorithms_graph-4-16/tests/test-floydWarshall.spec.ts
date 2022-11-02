export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _graphrOVcfsY = "R3bwb4CDLd51CXAa";
		const _returnValueCfT77R = await floydWarshall(_graphrOVcfsY)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueZrFOvms = false;
		const _returnValuemEthWa = [_arrayValueZrFOvms]
		const _getAllVerticesJWoafyb = () => { return _returnValuemEthWa };
		const _returnValueiRxNmiH = null;
		const _findEdgeJ7LCQbW = () => { return _returnValueiRxNmiH };
		const _graphJMgnM58 = {
			"getAllVertices": _getAllVerticesJWoafyb,
		"findEdge": _findEdgeJ7LCQbW
	}
		const _returnValueLfWGFh = await floydWarshall(_graphJMgnM58)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueVtCy4MJ = null;
		const _arrayValuefzej09f = null;
		const _arrayValueqJE7PzH = undefined;
		const _arrayValueU5anGmx = undefined;
		const _returnValueZdoqlAW = [_arrayValueVtCy4MJ, _arrayValuefzej09f, _arrayValueqJE7PzH, _arrayValueU5anGmx]
		const _getAllVerticesaTMfVpu = () => { return _returnValueZdoqlAW };
		const _returnValueCAYhLe = 8.055335720147248;
		const _returnValueSyrpYaw = () => { return _returnValueCAYhLe };
		const _findEdgeqEwtELs = () => { return _returnValueSyrpYaw };
		const _graphpFNHHkl = {
			"getAllVertices": _getAllVerticesaTMfVpu,
		"findEdge": _findEdgeqEwtELs
	}
		const _returnValueMXhIal = await floydWarshall(_graphpFNHHkl)
	});
})