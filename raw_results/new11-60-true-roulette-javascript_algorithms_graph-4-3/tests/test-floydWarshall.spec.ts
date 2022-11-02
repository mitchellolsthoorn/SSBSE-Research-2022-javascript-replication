export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueJacfGpl = "sE3oWtk2QxqqrWhcp9UqxAz7";
		const _getAllVerticesd6mhAYO = () => { return _returnValueJacfGpl };
		const _returnValuepDWv3uK = undefined;
		const _findEdgelGJoMQO = () => { return _returnValuepDWv3uK };
		const _graphyeLRd2B = {
			"getAllVertices": _getAllVerticesd6mhAYO,
		"findEdge": _findEdgelGJoMQO
	}
		const _returnValuewPiyAkS = await floydWarshall(_graphyeLRd2B)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuev2OQx4u = undefined;
		const _arrayValuePTpLdVW = -8.599900314656695;
		const _arrayValuemcxQbIq = undefined;
		const _returnValues3QgEqL = [_arrayValuev2OQx4u, _arrayValuePTpLdVW, _arrayValuemcxQbIq]
		const _getAllVerticeswYwztyS = () => { return _returnValues3QgEqL };
		const _returnValueV6piPwR = null;
		const _findEdgewJglEw = () => { return _returnValueV6piPwR };
		const _graphkPran7h = {
			"getAllVertices": _getAllVerticeswYwztyS,
		"findEdge": _findEdgewJglEw
	}
		const _returnValueW4zbcPh = await floydWarshall(_graphkPran7h)
	});
})