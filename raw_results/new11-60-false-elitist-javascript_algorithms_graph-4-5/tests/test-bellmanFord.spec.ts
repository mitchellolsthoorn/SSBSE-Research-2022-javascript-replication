export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValuewY0EvFn = true;
		const _getAllVerticesCCFnbNZ = () => { return _returnValuewY0EvFn };
		const _getVertexByKeyypXmFYg = null;
		const _returnValueSUymb0 = undefined;
		const _getNeighborsu5xTfwu = () => { return _returnValueSUymb0 };
		const _returnValuezbhhBgi = {
		
	}
		const _findEdgelzVroyW = () => { return _returnValuezbhhBgi };
		const _graph8qjNau = {
			"getAllVertices": _getAllVerticesCCFnbNZ,
		"getVertexByKey": _getVertexByKeyypXmFYg,
		"getNeighbors": _getNeighborsu5xTfwu,
		"findEdge": _findEdgelzVroyW
	}
		const _getKeyCaSDSqi = true;
		const _startVertexfs1Rz6e = {
			"getKey": _getKeyCaSDSqi
	}
		const _returnValueLLi9vx3 = await bellmanFord(_graph8qjNau, _startVertexfs1Rz6e)
	});

	it('test for bellmanFord', async () => {
		const _arrayValue5MJtfv = undefined;
		const _returnValueiwCcpPe = [_arrayValue5MJtfv]
		const _getAllVerticesgfFibe5 = () => { return _returnValueiwCcpPe };
		const _arrayValueIlOC3fd = "zKPeMi6Z1Oczs3p8mDXw1xv4F8v18I7eFSmWg5s63sZhl9c0b3IXPKlznRFfZhboxjbMExm4aFR7piXs1ULLP3X9AgswsYYGUt";
		const _returnValueHI6JNG = [_arrayValueIlOC3fd]
		const _getVertexByKeyoXKt6kI = () => { return _returnValueHI6JNG };
		const _returnValue8BGkdC = -3.166285425479477;
		const _returnValueb7EfiSt = () => { return _returnValue8BGkdC };
		const _getNeighborsMStPcSW = () => { return _returnValueb7EfiSt };
		const _returnValueQxiRlD6 = {
		
	}
		const _findEdgeyz77oyo = () => { return _returnValueQxiRlD6 };
		const _graphXxZkiNR = {
			"getAllVertices": _getAllVerticesgfFibe5,
		"getVertexByKey": _getVertexByKeyoXKt6kI,
		"getNeighbors": _getNeighborsMStPcSW,
		"findEdge": _findEdgeyz77oyo
	}
		const _returnValueheuddiB = true;
		const _returnValueo3fcpVj = () => { return _returnValueheuddiB };
		const _getKeyj6zc92 = () => { return _returnValueo3fcpVj };
		const _startVertexZwsxzVd = {
			"getKey": _getKeyj6zc92
	}
		const _returnValueHPBqWWZ = await bellmanFord(_graphXxZkiNR, _startVertexZwsxzVd)
	});

	it('test for bellmanFord', async () => {
		const _returnValueiBMubCR = []
		const _getAllVerticesdARK8eZ = () => { return _returnValueiBMubCR };
		const _returnValuesyNMh20 = 9.990406446912889;
		const _returnValueG5Enn9 = () => { return _returnValuesyNMh20 };
		const _getVertexByKeygqpdtrQ = () => { return _returnValueG5Enn9 };
		const _arrayValuek0iekpg = undefined;
		const _arrayValueoxNDFwK = null;
		const _arrayValueFyXXMEK = null;
		const _returnValueHsAFM5S = [_arrayValuek0iekpg, _arrayValueoxNDFwK, _arrayValueFyXXMEK]
		const _getNeighborsHzwcb3U = () => { return _returnValueHsAFM5S };
		const _returnValuexw6n5iJ = 5.509191524362013;
		const _returnValuemJXHSj0 = () => { return _returnValuexw6n5iJ };
		const _findEdgeMaygVS = () => { return _returnValuemJXHSj0 };
		const _graphF6ygW93 = {
			"getAllVertices": _getAllVerticesdARK8eZ,
		"getVertexByKey": _getVertexByKeygqpdtrQ,
		"getNeighbors": _getNeighborsHzwcb3U,
		"findEdge": _findEdgeMaygVS
	}
		const _arrayValueNn5i6uM = undefined;
		const _arrayValuev4s3wT = "F9xlY4oEDqwJ3a32DNAlUYLrEl48H9KLp320PGdqvtE1FBO";
		const _returnValueYzaMONq = [_arrayValueNn5i6uM, _arrayValuev4s3wT]
		const _getKeyT3JSevp = () => { return _returnValueYzaMONq };
		const _startVertexoqGfrNL = {
			"getKey": _getKeyT3JSevp
	}
		const _returnValuegoH3IQc = await bellmanFord(_graphF6ygW93, _startVertexoqGfrNL)
	});
})