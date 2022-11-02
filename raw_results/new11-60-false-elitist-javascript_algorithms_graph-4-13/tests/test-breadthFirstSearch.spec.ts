export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _arrayValuepnYSRI = -8.513367562823658;
		const _arrayValuec3wSlxM = null;
		const _returnValueQ6SEh8F = [_arrayValuepnYSRI, _arrayValuec3wSlxM]
		const _returnValueOEDI5Lo = () => { return _returnValueQ6SEh8F };
		const _getNeighborsH57wDB = () => { return _returnValueOEDI5Lo };
		const _graphtjG8O0i = {
			"getNeighbors": _getNeighborsH57wDB
	}
		const _startVertexaJWKhp = undefined;
		const _originalCallbacksFQabBgf = {
		
	}
		const _returnValueEwqxlfx = await breadthFirstSearch(_graphtjG8O0i, _startVertexaJWKhp, _originalCallbacksFQabBgf)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueyOUncwu = 3.2340818758241756;
		const _returnValueeEXV8wl = [_arrayValueyOUncwu]
		const _getNeighborsBIL3sSM = () => { return _returnValueeEXV8wl };
		const _graphKx0FgOi = {
			"getNeighbors": _getNeighborsBIL3sSM
	}
		const _startVertexGpXsM8t = "oBbxvO1KaMTjbrVDluBd4aGcczwYZn";
		const _originalCallbacksGrEff7v = {
		
	}
		const _returnValueM2eKZXA = await breadthFirstSearch(_graphKx0FgOi, _startVertexGpXsM8t, _originalCallbacksGrEff7v)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValuefVawGhQ = []
		const _getNeighborsaOikNo2 = () => { return _returnValuefVawGhQ };
		const _graphdvLuJ2m = {
			"getNeighbors": _getNeighborsaOikNo2
	}
		const _startVertexNNdQYZb = null;
		const _originalCallbacksy49YQi1 = undefined;
		const _returnValueRu0kz7s = await breadthFirstSearch(_graphdvLuJ2m, _startVertexNNdQYZb, _originalCallbacksy49YQi1)
	});
})