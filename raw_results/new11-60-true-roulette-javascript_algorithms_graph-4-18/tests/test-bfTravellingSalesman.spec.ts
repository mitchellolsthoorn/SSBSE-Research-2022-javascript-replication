export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _isDirectedUEbi0g = true;
		const _graphXV2lTwy = new Graph(_isDirectedUEbi0g)
		const _returnValuelRdkEdF = await _graphXV2lTwy.reverse()
		const _returnValuekh5kSr5 = await _graphXV2lTwy.toString()
		const _returnValueXLUUose = await bfTravellingSalesman(_graphXV2lTwy)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedVbB21RC = true;
		const _graphH7v3oGr = new Graph(_isDirectedVbB21RC)
		const _arrayValuenjozcMp = true;
		const _arrayValueRbbErwd = "nUNIrFgVJLyrCMifpp9KNRPV2fiK6ghBAgZgNetum7C8A2WG2Pj4zQ0pn2l4TvzCIHaV1RC41";
		const _arrayValuefrBg0Ri = [_arrayValueRbbErwd]
		const _returnValuegblyElq = [_arrayValuenjozcMp, _arrayValuefrBg0Ri]
		const _vertexKeyaZvPJy = () => { return _returnValuegblyElq };
		const _returnValueyeC5vOQ = await _graphH7v3oGr.getVertexByKey(_vertexKeyaZvPJy)
		const _returnValuepil6gx3 = await _graphH7v3oGr.getAllEdges()
		const _valueVxlzjTA = null;
		const _keyCallbackybodtU4 = null;
		const _newVertexeqUDYlM = new DisjointSetItem(_valueVxlzjTA, _keyCallbackybodtU4)
		const _returnValuepYTHT5v = await _newVertexeqUDYlM.getChildren()
		const _returnValuecfs37IC = await _graphH7v3oGr.addVertex(_newVertexeqUDYlM)
		const _returnValuetLwDhs8 = await bfTravellingSalesman(_graphH7v3oGr)
	});
})