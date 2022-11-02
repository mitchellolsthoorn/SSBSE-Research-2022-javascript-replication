export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedesIW1SS = null;
		const _returnValuet618RP3 = true;
		const _getAllVerticesQoyakF9 = () => { return _returnValuet618RP3 };
		const _graphBulnglR = {
			"isDirected": _isDirectedesIW1SS,
		"getAllVertices": _getAllVerticesQoyakF9
	}
		const _returnValue7SwmoO = await prim(_graphBulnglR)
	});

	it('test for prim', async () => {
		const _isDirectedw4e0Nwr = 1.5280842669585937;
		const _returnValueiPYe7lr = false;
		const _getAllVerticestBpV20 = () => { return _returnValueiPYe7lr };
		const _graphgnD3guI = {
			"isDirected": _isDirectedw4e0Nwr,
		"getAllVertices": _getAllVerticestBpV20
	}
		const _returnValueh25DIVk = await prim(_graphgnD3guI)
	});

	it('test for prim', async () => {
		const _isDirectedmEpqC5F = false;
		const _graphv05y4Ts = new Graph(_isDirectedmEpqC5F)
		const _returnValueEFDWoeD = {
		
	}
		const _getKeyraXXoRN = () => { return _returnValueEFDWoeD };
		const _newVertexRwwXSJk = {
			"getKey": _getKeyraXXoRN
	}
		const _returnValue9evyI4 = await _graphv05y4Ts.addVertex(_newVertexRwwXSJk)
		const _returnValueRRwcwb5 = await _graphv05y4Ts.getAllVertices()
		const _returnValue0o81Cz = await _graphv05y4Ts.getWeight()
		const _returnValuefV6lhTK = await _graphv05y4Ts.reverse()
		const _returnValuevcHPrsH = await prim(_graphv05y4Ts)
	});
})