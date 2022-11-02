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
		const _returnValuevbXFMOH = null;
		const _getAllVerticesnmYslq = () => { return _returnValuevbXFMOH };
		const _returnValueGFSv2iV = false;
		const _getVertexByKeyNBgJVZt = () => { return _returnValueGFSv2iV };
		const _arrayValuey9iWhnV = "u5zwWC8FwWshn9xdI9c8YoCqwmtWq6";
		const _returnValueQMH0oj9 = [_arrayValuey9iWhnV]
		const _getNeighborsKcg1moi = () => { return _returnValueQMH0oj9 };
		const _returnValueHJwY6HH = "WpYMW33vG2ck2tSML1vyn55VuWLWOrxRTfnziZk3zTloSXiah2Dm3xDlIf7j6NQVOtXXWMDjnjp";
		const _findEdgeNyd0AFK = () => { return _returnValueHJwY6HH };
		const _graphT6mzcuN = {
			"getAllVertices": _getAllVerticesnmYslq,
		"getVertexByKey": _getVertexByKeyNBgJVZt,
		"getNeighbors": _getNeighborsKcg1moi,
		"findEdge": _findEdgeNyd0AFK
	}
		const _returnValuek6p7w1I = undefined;
		const _startVertexEnXTfJl = () => { return _returnValuek6p7w1I };
		const _returnValueO8dmtcY = await bellmanFord(_graphT6mzcuN, _startVertexEnXTfJl)
	});

	it('test for bellmanFord', async () => {
		const _returnValuehfw4hBh = false;
		const _graphSz2PCRl = () => { return _returnValuehfw4hBh };
		const _returnValuePD9qZZK = true;
		const _getKeyFWdogWD = () => { return _returnValuePD9qZZK };
		const _startVertexbEOi4NT = {
			"getKey": _getKeyFWdogWD
	}
		const _returnValuefcoL9cn = await bellmanFord(_graphSz2PCRl, _startVertexbEOi4NT)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedFJ3mHoM = false;
		const _graphQO4pNC1 = new Graph(_isDirectedFJ3mHoM)
		const _returnValueNtEN32b = await _graphQO4pNC1.toString()
		const _valuepLoQXyK = -0.06305182727681213;
		const _returnValueSIE4lCF = "HhilKGBoLUF9aJL9DFGAAGAyYRfE7NBtcgGHRPFWDg5FsSxQUCEXegHYoClsxhlhrDbuK";
		const _keyCallbackvaF702D = () => { return _returnValueSIE4lCF };
		const _startVertexBl0fl4E = new DisjointSetItem(_valuepLoQXyK, _keyCallbackvaF702D)
		const _returnValueMtSZmp8 = await _startVertexBl0fl4E.getRoot()
		const _returnValueezPDVKI = await _startVertexBl0fl4E.isRoot()
		const _endVertexxqoacjG = []
		const _returnValuecYJC3RL = await _graphQO4pNC1.findEdge(_startVertexBl0fl4E, _endVertexxqoacjG)
		const _arrayValuebvVpqBK = undefined;
		const _returnValueIG553RZ = undefined;
		const _arrayValueqvrJSd = () => { return _returnValueIG553RZ };
		const _arrayValuevU21rR4 = [_arrayValueqvrJSd]
		const _arrayValueDIJnzQ4 = true;
		const _arrayValuem9wP6mU = null;
		const _arrayValueanbsmKm = 2.539633779094139;
		const _arrayValues7LAezp = undefined;
		const _arrayValueDX27m3X = [_arrayValuem9wP6mU, _arrayValueanbsmKm, _arrayValues7LAezp]
		const _arrayValueca1sVCk = [_arrayValuevU21rR4, _arrayValueDIJnzQ4, _arrayValueDX27m3X]
		const _arrayValueAJtrfw = [_arrayValuebvVpqBK, _arrayValueca1sVCk]
		const _arrayValuetm1prJX = undefined;
		const _returnValueWIbq9Ag = [_arrayValueAJtrfw, _arrayValuetm1prJX]
		const _valueUbZrROk = () => { return _returnValueWIbq9Ag };
		const _returnValueZfre9vY = null;
		const _keyCallbackYxoz6Y = () => { return _returnValueZfre9vY };
		const _startVertexaLPIrIL = new DisjointSetItem(_valueUbZrROk, _keyCallbackYxoz6Y)
		const _returnValuecHJyuSs = await _startVertexaLPIrIL.getChildren()
		const _valuedDXoc44 = undefined;
		const _returnValueCcBf2m = "jXARvzzcCHHppDo8wsJbpVhHOjOFnzufC0LqEXrnqDBbA0zgRFHeHvpcxuhXjEDhrAw3lNeCmhOOZiT1GPV6gPSdPd4NCynn";
		const _keyCallbackJEdQueH = () => { return _returnValueCcBf2m };
		const _parentItemDxvXzNu = new DisjointSetItem(_valuedDXoc44, _keyCallbackJEdQueH)
		const _returnValueE4a1RSg = await _parentItemDxvXzNu.getRank()
		const _forceSettingParentChild5x6GQL = false;
		const _returnValuedhU0Cj = await _startVertexaLPIrIL.setParent(_parentItemDxvXzNu, _forceSettingParentChild5x6GQL)
		const _returnValue36V8cf = await bellmanFord(_graphQO4pNC1, _startVertexaLPIrIL)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedKQZKm8v = true;
		const _graphRhugRjv = new Graph(_isDirectedKQZKm8v)
		const _returnValueLcVKrlY = await _graphRhugRjv.getAllEdges()
		const _vertexKeyqWc5JOT = -5.596914663624781;
		const _returnValuevqIQJA = await _graphRhugRjv.getVertexByKey(_vertexKeyqWc5JOT)
		const _returnValueJtUqxCA = await _graphRhugRjv.getAllVertices()
		const _valueQRJYXAb = []
		const _returnValuefJpR5xV = "xalPGPJHaXR1QBIV2MdpU211WQgVbois3Hw2yXyMJmrP9vCzHGSPIsD38U11gunxNEbMMo2WVOJShvKGrTkiNv1Bk1dB";
		const _returnValueigmI8Ta = () => { return _returnValuefJpR5xV };
		const _returnValue5crO7H = () => { return _returnValueigmI8Ta };
		const _keyCallbackfahGntH = () => { return _returnValue5crO7H };
		const _newVertexl91lBlA = new DisjointSetItem(_valueQRJYXAb, _keyCallbackfahGntH)
		const _returnValueAOYueG3 = await _newVertexl91lBlA.getRoot()
		const _returnValuemmUBYwA = await _newVertexl91lBlA.getRoot()
		const _returnValueKJl5Zie = await _newVertexl91lBlA.getRank()
		const _returnValueB20YDj8 = await _newVertexl91lBlA.getChildren()
		const _returnValueT2w9c93 = await _newVertexl91lBlA.getChildren()
		const _returnValueMHSBZ7 = await _graphRhugRjv.addVertex(_newVertexl91lBlA)
		const _returnValueDl5OK00 = -1.83636153230092;
		const _getKeyda7QSsZ = () => { return _returnValueDl5OK00 };
		const _startVertexzbZLs91 = {
			"getKey": _getKeyda7QSsZ
	}
		const _returnValuemuRW9V2 = await bellmanFord(_graphRhugRjv, _startVertexzbZLs91)
	});
})