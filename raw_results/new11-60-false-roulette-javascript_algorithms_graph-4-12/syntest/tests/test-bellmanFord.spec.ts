export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphAPFyfQF = "XN8FR6lmdlT5XfjdQVp4bCfw6UIEkFyZWYzshEawYFqhYXOjypNKWor17nZp3d7uwe9";
		const _arrayValueLSp3rH5 = undefined;
		const _arrayValuedWI36Iy = -2.176426241653929;
		const _arrayValueulf38EP = {
		
	}
		const _arrayValueiZ6KBl = [_arrayValueLSp3rH5, _arrayValuedWI36Iy, _arrayValueulf38EP]
		const _arrayValuekUaJxCo = true;
		const _arrayValueDU5vOnJ = false;
		const _arrayValuei8ITSLb = 3.610993137093141;
		const _arrayValueQ1etZ2x = true;
		const _arrayValueQwIHg7l = true;
		const _returnValueaLW3mdz = [_arrayValuei8ITSLb, _arrayValueQ1etZ2x, _arrayValueQwIHg7l]
		const _arrayValueXvPCPSX = () => { return _returnValueaLW3mdz };
		const _arrayValuem39ffJo = undefined;
		const _arrayValueCv4Rgoy = [_arrayValueXvPCPSX, _arrayValuem39ffJo]
		const _arrayValueXnWCyOw = [_arrayValueDU5vOnJ, _arrayValueCv4Rgoy]
		const _arrayValueO7oluNQ = {
		
	}
		const _arrayValuellJrGxc = [_arrayValueXnWCyOw, _arrayValueO7oluNQ]
		const _arrayValueonq1vAX = -1.2474214214956145;
		const _arrayValueONof3EC = 3.0693154978341735;
		const _arrayValuee0D9UPM = "B2hnbISzxaXs";
		const _arrayValuerNDM1Kq = [_arrayValuellJrGxc, _arrayValueonq1vAX, _arrayValueONof3EC, _arrayValuee0D9UPM]
		const _arrayValuebfrDePz = undefined;
		const _returnValue5kVI45 = "gwWY90cTEj6WeVtNUruO";
		const _arrayValuejpCWwpU = () => { return _returnValue5kVI45 };
		const _arrayValueh3vrKLK = undefined;
		const _arrayValueDrtXxNW = [_arrayValuerNDM1Kq, _arrayValuebfrDePz, _arrayValuejpCWwpU, _arrayValueh3vrKLK]
		const _arrayValueFPSpOA6 = [_arrayValuekUaJxCo, _arrayValueDrtXxNW]
		const _arrayValuex3i9ufO = true;
		const _arrayValueai5ahlq = null;
		const _returnValuejwYxgVE = [_arrayValueFPSpOA6, _arrayValuex3i9ufO, _arrayValueai5ahlq]
		const _arrayValueaNeqQe = () => { return _returnValuejwYxgVE };
		const _startVertexUK2c2f = [_arrayValueiZ6KBl, _arrayValueaNeqQe]
		const _returnValueBa33zp = await bellmanFord(_graphAPFyfQF, _startVertexUK2c2f)
	});

	it('test for bellmanFord', async () => {
		const _returnValueEI7Nptd = -8.006159721971276;
		const _graphBf1GFcK = () => { return _returnValueEI7Nptd };
		const _returnValueQ4Of408 = true;
		const _getKeyoZGmTes = () => { return _returnValueQ4Of408 };
		const _startVertexBInxiJF = {
			"getKey": _getKeyoZGmTes
	}
		const _returnValueG6yhGI = await bellmanFord(_graphBf1GFcK, _startVertexBInxiJF)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedTAdR08p = false;
		const _graphNxG1bfr = new Graph(_isDirectedTAdR08p)
		const _vertexKeyAzSOy5a = false;
		const _returnValue3HXtzp = await _graphNxG1bfr.getVertexByKey(_vertexKeyAzSOy5a)
		const _returnValueRIY7L1u = await _graphNxG1bfr.getAllEdges()
		const _returnValueQmxQJTO = await _graphNxG1bfr.getWeight()
		const _returnValueYfMXujc = await _graphNxG1bfr.getAllEdges()
		const _arrayValuecJxLc87 = 0.46834000169428514;
		const _arrayValueWD06Qao = 4.703880261656559;
		const _arrayValueo3Ppnv = null;
		const _arrayValueMiAMA1q = null;
		const _arrayValuetYmI1oa = undefined;
		const _arrayValuenOWiWi1 = [_arrayValueWD06Qao, _arrayValueo3Ppnv, _arrayValueMiAMA1q, _arrayValuetYmI1oa]
		const _returnValueWJamW92 = [_arrayValuecJxLc87, _arrayValuenOWiWi1]
		const _getKeyxTm68jX = () => { return _returnValueWJamW92 };
		const _startVertexXXISmV = {
			"getKey": _getKeyxTm68jX
	}
		const _returnValueplrNWrt = await bellmanFord(_graphNxG1bfr, _startVertexXXISmV)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedbFTrkZd = true;
		const _graphoJRkpfO = new Graph(_isDirectedbFTrkZd)
		const _valuedTzVbWw = null;
		const _returnValuepdGkOkL = true;
		const _returnValueG02zW6l = () => { return _returnValuepdGkOkL };
		const _keyCallbackLJW6VHc = () => { return _returnValueG02zW6l };
		const _newVertexpFznp8Q = new DisjointSetItem(_valuedTzVbWw, _keyCallbackLJW6VHc)
		const _returnValuewz3s2NN = await _newVertexpFznp8Q.getKey()
		const _returnValuewu35mY = await _newVertexpFznp8Q.getRank()
		const _returnValueUHQJogC = await _newVertexpFznp8Q.getRoot()
		const _returnValueUm9dYh = await _newVertexpFznp8Q.getRoot()
		const _returnValueDoDGE55 = await _newVertexpFznp8Q.getRank()
		const _returnValuegpz41Pe = await _graphoJRkpfO.addVertex(_newVertexpFznp8Q)
		const _returnValueLFxCiXY = null;
		const _vertexKeywSjc2ty = () => { return _returnValueLFxCiXY };
		const _returnValueknyg029 = await _graphoJRkpfO.getVertexByKey(_vertexKeywSjc2ty)
		const _returnValueQe6aQc7 = null;
		const _getKeyyOZShjD = () => { return _returnValueQe6aQc7 };
		const _startVertexlS07Vnu = {
			"getKey": _getKeyyOZShjD
	}
		const _returnValueo9OnVm0 = await bellmanFord(_graphoJRkpfO, _startVertexlS07Vnu)
	});
})