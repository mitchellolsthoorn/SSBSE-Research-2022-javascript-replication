export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graph9Pjnvn = "tAx6ss4PnIHVToifTU2ky4LLlVwcNo7HriBVnGdvAcWbetRHjgmFZ1rTYshsItc3y2Wa";
		const _startVertexArPua0s = false;
		const _originalCallbacksUejAtcz = "9hIqGECjFz5";
		const _returnValuegOR9mrC = await breadthFirstSearch(_graph9Pjnvn, _startVertexArPua0s, _originalCallbacksUejAtcz)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueaTSbJf = 1.0775184455029052;
		const _arrayValuevMEXZyb = undefined;
		const _graphdP6oGVg = [_arrayValueaTSbJf, _arrayValuevMEXZyb]
		const _startVertexuQFc1ok = "h0nPHx9d";
		const _arrayValuefTDlFTO = {
		
	}
		const _originalCallbacksskV4Emz = [_arrayValuefTDlFTO]
		const _returnValuewGrTjNZ = await breadthFirstSearch(_graphdP6oGVg, _startVertexuQFc1ok, _originalCallbacksskV4Emz)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueFIZ4tcW = undefined;
		const _arrayValueTzWBoyZ = null;
		const _arrayValuewOFWpVG = -5.3802429624550445;
		const _valueRV9T8Zz = [_arrayValueFIZ4tcW, _arrayValueTzWBoyZ, _arrayValuewOFWpVG]
		const _graphz3yQrYN = new GraphVertex(_valueRV9T8Zz)
		const _returnValuegocjdZI = await _graphz3yQrYN.deleteAllEdges()
		const _arrayValueckyigtU = "YJJSvuzD";
		const _arrayValueYlmldWf = true;
		const _requiredEdgeqIOnVkp = [_arrayValueckyigtU, _arrayValueYlmldWf]
		const _returnValuejBTJ2PQ = await _graphz3yQrYN.hasEdge(_requiredEdgeqIOnVkp)
		const _returnValueAANownY = "CVL";
		const _callbackHAilPTa = () => { return _returnValueAANownY };
		const _returnValuefbSS5Lx = await _graphz3yQrYN.toString(_callbackHAilPTa)
		const _callbackEhtVMgg = null;
		const _returnValuec6ywebj = await _graphz3yQrYN.toString(_callbackEhtVMgg)
		const _startVertexEBTtIm7 = false;
		const _arrayValueASfrUp = null;
		const _arrayValuebZqf6Yq = true;
		const _arrayValueqZXzea0 = "G1GLBP3KXHgo2GGsxj7VmLEgWhc11eKLUFDgpY74iscY4xmeNtUpb6E9TyCM2IZAjalZHg";
		const _arrayValueY6Xrs3H = null;
		const _arrayValuekVEYVga = true;
		const _arrayValueZJEW2XU = {
		
	}
		const _arrayValuem4o1dEK = [_arrayValueY6Xrs3H, _arrayValuekVEYVga, _arrayValueZJEW2XU]
		const _arrayValueZcoo1rI = null;
		const _originalCallbacksSHawx6r = [_arrayValueASfrUp, _arrayValuebZqf6Yq, _arrayValueqZXzea0, _arrayValuem4o1dEK, _arrayValueZcoo1rI]
		const _returnValueWo9fgvA = await breadthFirstSearch(_graphz3yQrYN, _startVertexEBTtIm7, _originalCallbacksSHawx6r)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueZWWfnqq = true;
		const _returnValueiWjshOH = [_arrayValueZWWfnqq]
		const _getNeighborsn5JEoc0 = () => { return _returnValueiWjshOH };
		const _graphygkplI = {
			"getNeighbors": _getNeighborsn5JEoc0
	}
		const _startVertexISFqYIE = true;
		const _originalCallbacksUHYIntx = undefined;
		const _returnValueEESkRvl = await breadthFirstSearch(_graphygkplI, _startVertexISFqYIE, _originalCallbacksUHYIntx)
	});
})