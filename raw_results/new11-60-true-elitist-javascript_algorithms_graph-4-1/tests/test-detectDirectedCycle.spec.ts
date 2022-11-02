export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _arrayValuekGY5hqJ = "05mx7QDGxF70dhGt2f5Fa6xu4dnAXVSmkjgztc2fOoTT";
		const _arrayValueh73YVZ = null;
		const _arrayValueNKaEnf7 = [_arrayValuekGY5hqJ, _arrayValueh73YVZ]
		const _arrayValuev1b2kk8 = "M6dsl9EOEumJuu4pVocdE7Hi261cEwX1l";
		const _arrayValuemuDT4Ci = -4.060547779047335;
		const _returnValueslnfCd9 = [_arrayValueNKaEnf7, _arrayValuev1b2kk8, _arrayValuemuDT4Ci]
		const _getAllVerticesSPBvUhm = () => { return _returnValueslnfCd9 };
		const _graphxmrRseO = {
			"getAllVertices": _getAllVerticesSPBvUhm
	}
		const _returnValuemA5mHbi = await detectDirectedCycle(_graphxmrRseO)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedrCh8qRp = true;
		const _graphtEaiJPK = new Graph(_isDirectedrCh8qRp)
		const _returnValueWagWQrU = await _graphtEaiJPK.getVerticesIndices()
		const _valueniqytRd = -4.9398349116302605;
		const _arrayValued1rN6r6 = true;
		const _returnValueRUDcXZE = [_arrayValued1rN6r6]
		const _keyCallbackTIQUEya = () => { return _returnValueRUDcXZE };
		const _startVertexbq0CiB1 = new DisjointSetItem(_valueniqytRd, _keyCallbackTIQUEya)
		const _returnValueSOzmiqc = await _startVertexbq0CiB1.getChildren()
		const _arrayValueUU3D1Pb = undefined;
		const _returnValuexmFjwgQ = [_arrayValueUU3D1Pb]
		const _getKeytXyvzre = () => { return _returnValuexmFjwgQ };
		const _returnValuejRiQ9fZ = 9.53916352107679;
		const _setParentujHXY5Z = () => { return _returnValuejRiQ9fZ };
		const _childItemK9hNJhz = {
			"getKey": _getKeytXyvzre,
		"setParent": _setParentujHXY5Z
	}
		const _returnValueFxJwzNs = await _startVertexbq0CiB1.addChild(_childItemK9hNJhz)
		const _arrayValuecPM4O11 = undefined;
		const _arrayValueVAHTE2O = {
		
	}
		const _arrayValue9AOpNx = false;
		const _arrayValueMEAs8zs = {
		
	}
		const _returnValueEbJMBPs = [_arrayValueVAHTE2O, _arrayValue9AOpNx, _arrayValueMEAs8zs]
		const _arrayValueVUwvsY4 = () => { return _returnValueEbJMBPs };
		const _arrayValue2j7niy = true;
		const _arrayValueWF1Qmag = [_arrayValueVUwvsY4, _arrayValue2j7niy]
		const _arrayValuek3ILtBP = [_arrayValuecPM4O11, _arrayValueWF1Qmag]
		const _arrayValueYCmTKa1 = true;
		const _arrayValueQSLhYVZ = true;
		const _arrayValueCjXkNmi = {
		
	}
		const _returnValueqVoOsEj = [_arrayValuek3ILtBP, _arrayValueYCmTKa1, _arrayValueQSLhYVZ, _arrayValueCjXkNmi]
		const _addChildUoSPI4m = () => { return _returnValueqVoOsEj };
		const _parentItem8MaSCM = {
			"addChild": _addChildUoSPI4m
	}
		const _forceSettingParentChildGJ9Rh24 = false;
		const _returnValuew6IvT8y = await _startVertexbq0CiB1.setParent(_parentItem8MaSCM, _forceSettingParentChildGJ9Rh24)
		const _returnValuepf3Effj = false;
		const _addChilddJm3A0z = () => { return _returnValuepf3Effj };
		const _parentItemrJl7Pgj = {
			"addChild": _addChilddJm3A0z
	}
		const _forceSettingParentChildsnCeb2h = true;
		const _returnValueptoPV9 = await _startVertexbq0CiB1.setParent(_parentItemrJl7Pgj, _forceSettingParentChildsnCeb2h)
		const _endVertexZGbKnTn = -9.400339476509131;
		const _returnValueQqhMMh = await _graphtEaiJPK.findEdge(_startVertexbq0CiB1, _endVertexZGbKnTn)
		const _returnValuehNdeGn = await detectDirectedCycle(_graphtEaiJPK)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedccAaoVO = false;
		const _grapheQOce5 = new Graph(_isDirectedccAaoVO)
		const _returnValuen5yN4h = await _grapheQOce5.getWeight()
		const _returnValueVisY4Rv = await _grapheQOce5.getWeight()
		const _returnValuebmBuWht = await _grapheQOce5.reverse()
		const _arrayValueyyUchrM = null;
		const _valueJXPsDCU = [_arrayValueyyUchrM]
		const _newVertexDjLZs74 = new GraphVertex(_valueJXPsDCU)
		const _vertexVOAMzxR = "hYTFHXESI9TpGcPvXVBQOp2T5PJqFCCEndqnRHD6RPJSXNAJx1M2D62mQuH97iqejW0TKqRr3";
		const _returnValuehohpgiV = await _newVertexDjLZs74.findEdge(_vertexVOAMzxR)
		const _arrayValueulxu8d = null;
		const _edgeq513yvR = [_arrayValueulxu8d]
		const _returnValues7rfwYr = await _newVertexDjLZs74.deleteEdge(_edgeq513yvR)
		const _returnValueJjjSWKM = null;
		const _vertexpQ9Hev = () => { return _returnValueJjjSWKM };
		const _returnValueMVLd4Hq = await _newVertexDjLZs74.hasNeighbor(_vertexpQ9Hev)
		const _returnValueb8467cc = await _grapheQOce5.addVertex(_newVertexDjLZs74)
		const _returnValueLdq17r8 = await detectDirectedCycle(_grapheQOce5)
	});
})