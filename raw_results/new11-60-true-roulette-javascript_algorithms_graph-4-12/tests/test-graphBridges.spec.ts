export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _arrayValueZhSUnrs = []
		const _arrayValuesu1myBL = true;
		const _arrayValueDHN7265 = null;
		const _arrayValuex6bDKwY = false;
		const _arrayValueW1qZXj = [_arrayValuesu1myBL, _arrayValueDHN7265, _arrayValuex6bDKwY]
		const _arrayValueB4rvT8w = null;
		const _returnValueQGHoqju = [_arrayValueB4rvT8w]
		const _arrayValuejE7Xvlx = () => { return _returnValueQGHoqju };
		const _arrayValuek7DFJD = null;
		const _arrayValueAbKuQV = 7.302357929141369;
		const _arrayValueL9rzvOR = [_arrayValueW1qZXj, _arrayValuejE7Xvlx, _arrayValuek7DFJD, _arrayValueAbKuQV]
		const _graphKNi4Pam = [_arrayValueZhSUnrs, _arrayValueL9rzvOR]
		const _returnValuecrqsjjF = await graphBridges(_graphKNi4Pam)
	});

	it('test for graphBridges', async () => {
		const _isDirectedryIDuUF = true;
		const _graphgOPvQ4L = new Graph(_isDirectedryIDuUF)
		const _returnValueKtHaCkY = await _graphgOPvQ4L.getAllEdges()
		const _returnValueo28CVLu = false;
		const _getKeySejfcvx = () => { return _returnValueo28CVLu };
		const _newVertexmHxnckx = {
			"getKey": _getKeySejfcvx
	}
		const _returnValuerjFsrIE = await _graphgOPvQ4L.addVertex(_newVertexmHxnckx)
		const _returnValuemZ7XTnW = await graphBridges(_graphgOPvQ4L)
	});
})