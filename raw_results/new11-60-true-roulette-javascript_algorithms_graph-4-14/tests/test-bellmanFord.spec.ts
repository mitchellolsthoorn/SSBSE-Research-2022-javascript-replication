export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphVsIROjJ = "xhygQ8JzYcjc2S799xWFA";
		const _arrayValuedsW5Zyd = -4.6464371585606425;
		const _arrayValuePq4KxZ9 = undefined;
		const _arrayValueP2cyHsN = true;
		const _startVertexr96sjG = [_arrayValuedsW5Zyd, _arrayValuePq4KxZ9, _arrayValueP2cyHsN]
		const _returnValuexJWC76 = await bellmanFord(_graphVsIROjJ, _startVertexr96sjG)
	});

	it('test for bellmanFord', async () => {
		const _graphbkvcwG2 = "hCnc6TkDpTozWJ45MgAiytYVQrE2T9Ec2o7gN4XMKB0w7xQI1NsETrzZyzagnAlZMVjGBMeqc5KBHz2EhAbn";
		const _valuem6j1lY9 = undefined;
		const _returnValueQ4GLs9u = null;
		const _keyCallbackhivuCm = () => { return _returnValueQ4GLs9u };
		const _startVertexxDXNmJ = new DisjointSetItem(_valuem6j1lY9, _keyCallbackhivuCm)
		const _returnValueem8Ishv = await _startVertexxDXNmJ.getChildren()
		const _returnValueIv801Vg = await _startVertexxDXNmJ.getChildren()
		const _returnValueeijTTe = await _startVertexxDXNmJ.getRoot()
		const _returnValueG7jsHKp = await bellmanFord(_graphbkvcwG2, _startVertexxDXNmJ)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedA2zxJO = true;
		const _graphs4V5yA = new Graph(_isDirectedA2zxJO)
		const _returnValuecYYKgll = await _graphs4V5yA.toString()
		const _returnValueHBlp4lq = await _graphs4V5yA.getAllEdges()
		const _valuec4z1lNb = "2Ir53lDoQ36GcTopxZvYUnU4pGkRyHsMFzfKVtaxJRazskY3s4FW0wv3QPNwMtCxGN";
		const _returnValueR6pB2gx = -6.38774160980217;
		const _keyCallbackMjcot5T = () => { return _returnValueR6pB2gx };
		const _startVertexaSIr57 = new DisjointSetItem(_valuec4z1lNb, _keyCallbackMjcot5T)
		const _returnValueNG2KEFe = await _startVertexaSIr57.getRank()
		const _returnValue0PhOe2 = await _startVertexaSIr57.getKey()
		const _returnValuehuKXoJw = await bellmanFord(_graphs4V5yA, _startVertexaSIr57)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedLSpoCI = true;
		const _graphWpHw33L = new Graph(_isDirectedLSpoCI)
		const _returnValue64pLc3 = await _graphWpHw33L.getVerticesIndices()
		const _returnValueppYmCR0 = "z5crOXIRNuuVrt6iG5CkBaJAlkq6XWftjr8Tgtp6up1NA26bAeAtEI4Cbc8giUJoaaeVH";
		const _getKeyiRvdbod = () => { return _returnValueppYmCR0 };
		const _newVertexEbcXDO4 = {
			"getKey": _getKeyiRvdbod
	}
		const _returnValueFbGsXOv = await _graphWpHw33L.addVertex(_newVertexEbcXDO4)
		const _valueVg9RzBr = undefined;
		const _returnValueErx9u2s = null;
		const _keyCallbackV0ycKdx = () => { return _returnValueErx9u2s };
		const _startVertexWP6D86 = new DisjointSetItem(_valueVg9RzBr, _keyCallbackV0ycKdx)
		const _returnValueErSY6k4 = await _startVertexWP6D86.getRank()
		const _returnValueZrQZ4l = await _startVertexWP6D86.getChildren()
		const _returnValuejeNYOVx = await bellmanFord(_graphWpHw33L, _startVertexWP6D86)
	});
})