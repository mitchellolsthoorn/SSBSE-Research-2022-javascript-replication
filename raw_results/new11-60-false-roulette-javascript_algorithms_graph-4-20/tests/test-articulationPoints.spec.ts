export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _arrayValuecOFMlZN = undefined;
		const _arrayValueSG3Lhu = "8KrKvFm5qAtOOhIPJ1SFaOL0shO7reONfohtiV5H";
		const _arrayValueC4QeCBV = null;
		const _arrayValueI67ICrn = "vsK78Ug";
		const _arrayValuei6wmEk = [_arrayValueSG3Lhu, _arrayValueC4QeCBV, _arrayValueI67ICrn]
		const _arrayValueS2ZTAlE = 6.187949421450053;
		const _arrayValueHE3e1Fn = null;
		const _arrayValueKVGTggP = undefined;
		const _arrayValueTswgi7 = [_arrayValuei6wmEk, _arrayValueS2ZTAlE, _arrayValueHE3e1Fn, _arrayValueKVGTggP]
		const _arrayValueS05NsWw = {
		
	}
		const _returnValuezAEYHrn = [_arrayValuecOFMlZN, _arrayValueTswgi7, _arrayValueS05NsWw]
		const _graphZ2r1cWn = () => { return _returnValuezAEYHrn };
		const _returnValuexfhsBo = await articulationPoints(_graphZ2r1cWn)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedsLrM7Pl = undefined;
		const _graphy9UlVCx = new Graph(_isDirectedsLrM7Pl)
		const _returnValuejbTBgYi = 9.310166197268106;
		const _getKeyPfg5Kwb = () => { return _returnValuejbTBgYi };
		const _startVertexfihB4L6 = {
			"getKey": _getKeyPfg5Kwb
	}
		const _endVertexK8rvVu0 = {
		
	}
		const _returnValue06W9W1 = await _graphy9UlVCx.findEdge(_startVertexfihB4L6, _endVertexK8rvVu0)
		const _valueZVWUZKX = {
		
	}
		const _returnValueKBAt3n = 6.052286938928685;
		const _keyCallbackdCkg1f5 = () => { return _returnValueKBAt3n };
		const _newVertexgu2PTpW = new DisjointSetItem(_valueZVWUZKX, _keyCallbackdCkg1f5)
		const _returnValueNjYda80 = await _newVertexgu2PTpW.getRank()
		const _returnValueP5Xaq2U = await _newVertexgu2PTpW.getRank()
		const _returnValuemWt3Gck = await _newVertexgu2PTpW.getChildren()
		const _returnValuebumum68 = await _graphy9UlVCx.addVertex(_newVertexgu2PTpW)
		const _returnValuebVx1qiI = await _graphy9UlVCx.getAllEdges()
		const _returnValueySrHs4L = await articulationPoints(_graphy9UlVCx)
	});
})