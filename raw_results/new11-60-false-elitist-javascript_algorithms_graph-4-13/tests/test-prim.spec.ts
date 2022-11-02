export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _arrayValuePATSwJr = {
		
	}
		const _arrayValuelEzvRzZ = undefined;
		const _arrayValueBsY60db = null;
		const _arrayValueEGEHIWK = [_arrayValuePATSwJr, _arrayValuelEzvRzZ, _arrayValueBsY60db]
		const _arrayValueV0fxlo = undefined;
		const _isDirectedJD9uCCv = [_arrayValueEGEHIWK, _arrayValueV0fxlo]
		const _returnValueqOobARJ = -7.170963646729424;
		const _getAllVerticesKR64Qc7 = () => { return _returnValueqOobARJ };
		const _graphliFIJJT = {
			"isDirected": _isDirectedJD9uCCv,
		"getAllVertices": _getAllVerticesKR64Qc7
	}
		const _returnValueODIEjUk = await prim(_graphliFIJJT)
	});
})