export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValuexFhdJYz = 3.5418353989629896;
		const _getNeighborshlubrbw = () => { return _returnValuexFhdJYz };
		const _graphHF8xQME = {
			"getNeighbors": _getNeighborshlubrbw
	}
		const _startVertexhg1FbNA = undefined;
		const _originalCallbacksfoZA0L = "A11j4AGwGaAq0fXhiQcxiJH3EmEkWtj1tER5fFSUUS8Qa2JdtExOk5VtfG1aqZhXsHzENRu2ZL";
		const _returnValuejBl8wD = await breadthFirstSearch(_graphHF8xQME, _startVertexhg1FbNA, _originalCallbacksfoZA0L)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueeXQ2jyR = "o7Bd6kQr57VhvRlOiXJKABqULVVMNpptuJUzOp";
		const _getNeighborsCsmStcj = () => { return _returnValueeXQ2jyR };
		const _graphgzXFyxU = {
			"getNeighbors": _getNeighborsCsmStcj
	}
		const _startVertexg6b1mLl = "e32mSvjjvoUb7w1O9ued2sEl4omjspb2D7CQ9WPaDVIzRTIz84THU9TH3QMvSv5xNBi1z1WeTBrXx";
		const _arrayValueGHvdWPB = 0.6752839845267751;
		const _arrayValueGFFm7LL = undefined;
		const _arrayValuejgw48AX = [_arrayValueGFFm7LL]
		const _arrayValueULpnD3K = {
		
	}
		const _arrayValueE6BIfr5 = [_arrayValuejgw48AX, _arrayValueULpnD3K]
		const _originalCallbacksCmuaLy8 = [_arrayValueGHvdWPB, _arrayValueE6BIfr5]
		const _returnValueDkCs0sN = await breadthFirstSearch(_graphgzXFyxU, _startVertexg6b1mLl, _originalCallbacksCmuaLy8)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueCjbiaUI = 7.460644194139512;
		const _arrayValueaV2F7dB = () => { return _returnValueCjbiaUI };
		const _arrayValuegtOCe3 = null;
		const _arrayValue7HLK50 = [_arrayValuegtOCe3]
		const _returnValueFZLOZwb = [_arrayValueaV2F7dB, _arrayValue7HLK50]
		const _getNeighborsuu0eEU = () => { return _returnValueFZLOZwb };
		const _graphAHuqeqM = {
			"getNeighbors": _getNeighborsuu0eEU
	}
		const _startVertexEPTioH = null;
		const _originalCallbackspcN3Phl = {
		
	}
		const _returnValueUliCT8t = await breadthFirstSearch(_graphAHuqeqM, _startVertexEPTioH, _originalCallbackspcN3Phl)
	});

	it('test for breadthFirstSearch', async () => {
		const _valuejKEW4fY = true;
		const _graphEiJvCcA = new GraphVertex(_valuejKEW4fY)
		const _vertexCJi8tvp = null;
		const _returnValueySXxfsa = await _graphEiJvCcA.findEdge(_vertexCJi8tvp)
		const _returnValuekjP32BJ = await _graphEiJvCcA.getEdges()
		const _edgedOvvdlE = "Df1IMkeXkbOcXPi3oQuPD7NswKzy";
		const _returnValuex40lDBD = await _graphEiJvCcA.deleteEdge(_edgedOvvdlE)
		const _startVertexGU8p9EG = true;
		const _returnValueC9w3k6v = undefined;
		const _originalCallbacksARGAUAw = () => { return _returnValueC9w3k6v };
		const _returnValueQf8bxvB = await breadthFirstSearch(_graphEiJvCcA, _startVertexGU8p9EG, _originalCallbacksARGAUAw)
	});
})