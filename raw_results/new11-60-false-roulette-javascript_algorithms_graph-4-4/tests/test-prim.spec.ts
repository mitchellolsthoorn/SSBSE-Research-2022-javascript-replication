export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _graphZ9AEToO = "OstiOpLU2tktWow7xtzVkafYbXS2qzXjtL4yCiX3gAncQR";
		const _returnValueLp2Hlr3 = await prim(_graphZ9AEToO)
	});

	it('test for prim', async () => {
		const _isDirectedPma60GW = true;
		const _arrayValuePRuka7e = undefined;
		const _returnValueCopvbcw = false;
		const _arrayValueINAXl4L = () => { return _returnValueCopvbcw };
		const _arrayValueqSHvSdN = null;
		const _returnValueURrHll5 = false;
		const _arrayValueB9WiCUx = () => { return _returnValueURrHll5 };
		const _arrayValuevmAFAFG = [_arrayValueqSHvSdN, _arrayValueB9WiCUx]
		const _getAllVerticessRIjedb = [_arrayValuePRuka7e, _arrayValueINAXl4L, _arrayValuevmAFAFG]
		const _graphpvS0leV = {
			"isDirected": _isDirectedPma60GW,
		"getAllVertices": _getAllVerticessRIjedb
	}
		const _returnValueXUlez6H = await prim(_graphpvS0leV)
	});

	it('test for prim', async () => {
		const _isDirectedbJbJFhx = false;
		const _graphkTlHada = new Graph(_isDirectedbJbJFhx)
		const _vertexKeypgwjld = null;
		const _returnValueUADfxOy = await _graphkTlHada.getVertexByKey(_vertexKeypgwjld)
		const _returnValueuBCn50T = await _graphkTlHada.getAllVertices()
		const _returnValueQ6K94Al = await _graphkTlHada.getAllVertices()
		const _arrayValueptu3eYZ = -3.6657729252780813;
		const _arrayValueRPMRZeP = true;
		const _arrayValuedrlW5VR = undefined;
		const _returnValuefIWELFA = [_arrayValueptu3eYZ, _arrayValueRPMRZeP, _arrayValuedrlW5VR]
		const _getKeyJasq07 = () => { return _returnValuefIWELFA };
		const _newVertexrhvNFYp = {
			"getKey": _getKeyJasq07
	}
		const _returnValuecPI7uNN = await _graphkTlHada.addVertex(_newVertexrhvNFYp)
		const _vertexKeysvY89Gp = {
		
	}
		const _returnValuez5oNTA = await _graphkTlHada.getVertexByKey(_vertexKeysvY89Gp)
		const _returnValueB4FT4WR = await prim(_graphkTlHada)
	});
})