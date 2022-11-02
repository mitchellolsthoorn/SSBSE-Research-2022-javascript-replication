export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueWzDLSKi = true;
		const _reversedElmKIw = () => { return _returnValueWzDLSKi };
		const _graphX9VrEYK = {
			"reverse": _reversedElmKIw
	}
		const _returnValueVxHqNfE = await stronglyConnectedComponents(_graphX9VrEYK)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirecteduaV0Ow8 = -0.4359294147735131;
		const _graphXA2CMRW = new Graph(_isDirecteduaV0Ow8)
		const _arrayValuejaNYD2 = undefined;
		const _returnValue0spYvK = {
		
	}
		const _arrayValueHZyaDgx = () => { return _returnValue0spYvK };
		const _returnValueYS51OZ = [_arrayValuejaNYD2, _arrayValueHZyaDgx]
		const _getNeighborsLgteGSZ = () => { return _returnValueYS51OZ };
		const _vertexWKpMAYE = {
			"getNeighbors": _getNeighborsLgteGSZ
	}
		const _returnValueIbdBRBq = await _graphXA2CMRW.getNeighbors(_vertexWKpMAYE)
		const _returnValuewIEDEbX = await _graphXA2CMRW.getAllVertices()
		const _returnValueod5zLTJ = await _graphXA2CMRW.reverse()
		const _returnValuetQZ0BVk = await stronglyConnectedComponents(_graphXA2CMRW)
	});
})