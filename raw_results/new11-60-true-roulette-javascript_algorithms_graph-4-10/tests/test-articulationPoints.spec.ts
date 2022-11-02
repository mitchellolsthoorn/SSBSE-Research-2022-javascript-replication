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
		const _returnValueCULQL7k = false;
		const _grapho5bRc0P = () => { return _returnValueCULQL7k };
		const _returnValueRzWUafv = await articulationPoints(_grapho5bRc0P)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedRjqrpCu = true;
		const _graphgS3F1pV = new Graph(_isDirectedRjqrpCu)
		const _valueTC5KxBv = true;
		const _returnValueKDfM7V9 = null;
		const _keyCallbackOFwORc5 = () => { return _returnValueKDfM7V9 };
		const _newVertexX2rsMQD = new DisjointSetItem(_valueTC5KxBv, _keyCallbackOFwORc5)
		const _returnValue5RARKA = await _newVertexX2rsMQD.getKey()
		const _returnValuebz8wzQD = await _graphgS3F1pV.addVertex(_newVertexX2rsMQD)
		const _vertexKeyGv4rbCW = -8.60498365812144;
		const _returnValueHPpdPZw = await _graphgS3F1pV.getVertexByKey(_vertexKeyGv4rbCW)
		const _returnValuekxM76zq = {
		
	}
		const _getKeyyfLDa9t = () => { return _returnValuekxM76zq };
		const _startVertexJQE35G = {
			"getKey": _getKeyyfLDa9t
	}
		const _arrayValuejuSyVQ7 = undefined;
		const _arrayValuehzIzu70 = "5o3k2u7JPGkK3QaSMbbFodulZMla5CK";
		const _arrayValuegr5pQ2 = undefined;
		const _arrayValueSF60GRD = undefined;
		const _arrayValueTu7Oqm6 = [_arrayValueSF60GRD]
		const _arrayValuejdyJEJw = [_arrayValuehzIzu70, _arrayValuegr5pQ2, _arrayValueTu7Oqm6]
		const _endVertexsZ4M7Tg = [_arrayValuejuSyVQ7, _arrayValuejdyJEJw]
		const _returnValueEfpfNxJ = await _graphgS3F1pV.findEdge(_startVertexJQE35G, _endVertexsZ4M7Tg)
		const _returnValueJzkVmFK = await articulationPoints(_graphgS3F1pV)
	});
})