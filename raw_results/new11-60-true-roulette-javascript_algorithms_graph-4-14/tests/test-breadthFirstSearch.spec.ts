export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValuewAbVips = 8.919178201835052;
		const _getNeighborsvCOxP3O = () => { return _returnValuewAbVips };
		const _graphkrYhFPU = {
			"getNeighbors": _getNeighborsvCOxP3O
	}
		const _startVertex3L30MP = -7.890246687854464;
		const _originalCallbacksoIjbrPc = null;
		const _returnValueJjqvsi5 = await breadthFirstSearch(_graphkrYhFPU, _startVertex3L30MP, _originalCallbacksoIjbrPc)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuesuJqBn = null;
		const _graphSbgI02 = [_arrayValuesuJqBn]
		const _arrayValueRfRk42 = null;
		const _arrayValueyZSidjL = false;
		const _arrayValuewpAmm83 = {
		
	}
		const _arrayValueXr2fHFP = [_arrayValueyZSidjL, _arrayValuewpAmm83]
		const _arrayValuenq5qwLs = 2.4415690699878994;
		const _arrayValueRYmE8YZ = null;
		const _arrayValueExZ4cWa = false;
		const _arrayValueWyxKLa1 = [_arrayValueXr2fHFP, _arrayValuenq5qwLs, _arrayValueRYmE8YZ, _arrayValueExZ4cWa]
		const _returnValuepXp7a1p = null;
		const _arrayValueHaEK19p = () => { return _returnValuepXp7a1p };
		const _arrayValueDxE2iNv = true;
		const _arrayValueHSlAX3l = [_arrayValueHaEK19p, _arrayValueDxE2iNv]
		const _startVertexFd6q6Qn = [_arrayValueRfRk42, _arrayValueWyxKLa1, _arrayValueHSlAX3l]
		const _originalCallbackshWffpOD = undefined;
		const _returnValueG3DjQp6 = await breadthFirstSearch(_graphSbgI02, _startVertexFd6q6Qn, _originalCallbackshWffpOD)
	});

	it('test for breadthFirstSearch', async () => {
		const _value9L2tFZ = -4.31618211024432;
		const _graphlMTHkJD = new GraphVertex(_value9L2tFZ)
		const _edgeuNwWcBw = {
		
	}
		const _returnValuekHrEPfP = await _graphlMTHkJD.addEdge(_edgeuNwWcBw)
		const _returnValueDrqjUEu = await _graphlMTHkJD.getKey()
		const _returnValuezXxYqbf = await _graphlMTHkJD.getEdges()
		const _returnValueBq3Jppb = await _graphlMTHkJD.getNeighbors()
		const _startVertexbbXGJwl = true;
		const _returnValueC8n87nb = null;
		const _originalCallbacksADOFMPS = () => { return _returnValueC8n87nb };
		const _returnValuezAU1s8h = await breadthFirstSearch(_graphlMTHkJD, _startVertexbbXGJwl, _originalCallbacksADOFMPS)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueostfGnm = -8.50329219700383;
		const _graphOUZ6IMv = new GraphVertex(_valueostfGnm)
		const _requiredEdgel3i2Zsd = true;
		const _returnValuexJJ3DS = await _graphOUZ6IMv.hasEdge(_requiredEdgel3i2Zsd)
		const _returnValueiXvrtbL = "hUhOk3gw16oF8Ifhl2VSgLpXrZVq4wi32Ze1S6U";
		const _requiredEdgeJdYNFY7 = () => { return _returnValueiXvrtbL };
		const _returnValueR14Rij4 = await _graphOUZ6IMv.hasEdge(_requiredEdgeJdYNFY7)
		const _vertexIVdxrxA = "z";
		const _returnValueiLsFqbG = await _graphOUZ6IMv.findEdge(_vertexIVdxrxA)
		const _startVertexYY9FDcw = null;
		const _originalCallbacksEhE4FS = undefined;
		const _returnValueUKFr3sJ = await breadthFirstSearch(_graphOUZ6IMv, _startVertexYY9FDcw, _originalCallbacksEhE4FS)
	});
})