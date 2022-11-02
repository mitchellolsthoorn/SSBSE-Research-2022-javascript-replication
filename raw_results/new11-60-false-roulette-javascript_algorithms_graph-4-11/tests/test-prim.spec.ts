export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedtJgbjC9 = false;
		const _graphBhycJN7 = new Graph(_isDirectedtJgbjC9)
		const _returnValueDFkVm3N = await _graphBhycJN7.reverse()
		const _vertexKeymf1gnk0 = -6.701537645817441;
		const _returnValueY6nro9F = await _graphBhycJN7.getVertexByKey(_vertexKeymf1gnk0)
		const _returnValueMu9wPFT = await _graphBhycJN7.getVerticesIndices()
		const _returnValueTeW6ott = await prim(_graphBhycJN7)
	});

	it('test for prim', async () => {
		const _arrayValueGYY8sZ = 1.6242862193904664;
		const _arrayValueuZWuFM2 = 4.780936762647254;
		const _arrayValueUDyYrSn = []
		const _arrayValueYpbLaSa = "flB4L39OTp1AZ94ZyhWIRFUP2jKi0e6eRBKrEaiz0";
		const _isDirectedazdL8q9 = [_arrayValueGYY8sZ, _arrayValueuZWuFM2, _arrayValueUDyYrSn, _arrayValueYpbLaSa]
		const _returnValueqOkdiQ = null;
		const _getAllVerticeswzSiUAy = () => { return _returnValueqOkdiQ };
		const _graphvOwmmd = {
			"isDirected": _isDirectedazdL8q9,
		"getAllVertices": _getAllVerticeswzSiUAy
	}
		const _returnValuebIYIoYU = await prim(_graphvOwmmd)
	});

	it('test for prim', async () => {
		const _isDirectednd2BWOB = false;
		const _graphpc5mRpB = new Graph(_isDirectednd2BWOB)
		const _returnValueDoiVybE = await _graphpc5mRpB.getAllVertices()
		const _returnValuewXeaSOf = await _graphpc5mRpB.reverse()
		const _returnValueigP66Fb = await _graphpc5mRpB.getVerticesIndices()
		const _returnValueQA6Z9u2 = undefined;
		const _getKeyKTRqlV3 = () => { return _returnValueQA6Z9u2 };
		const _newVertexc59pSDj = {
			"getKey": _getKeyKTRqlV3
	}
		const _returnValueyJcaSNm = await _graphpc5mRpB.addVertex(_newVertexc59pSDj)
		const _returnValue3CG5Cf = await prim(_graphpc5mRpB)
	});
})