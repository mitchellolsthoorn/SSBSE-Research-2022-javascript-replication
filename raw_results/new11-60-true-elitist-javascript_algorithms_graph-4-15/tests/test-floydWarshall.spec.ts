export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueH7u1dxv = "8j4MXpN1xovEhXn5D9zIzH3g3aYH7rM9Pea4pFRfP6qgCbM6znKShDHyYXOvjBkFS";
		const _getAllVerticesMEXli6w = () => { return _returnValueH7u1dxv };
		const _returnValuecbmiCEZ = "vtPmrXNjKpflGObb9RU7LutC3RoCfnJJ3j1FD337IxITN2dOMuBTr86KBnFVh72esCGmDS6JYDOIgL3a4PE";
		const _findEdgePMWRUh2 = () => { return _returnValuecbmiCEZ };
		const _graphxrPNN1h = {
			"getAllVertices": _getAllVerticesMEXli6w,
		"findEdge": _findEdgePMWRUh2
	}
		const _returnValuegXwoVta = await floydWarshall(_graphxrPNN1h)
	});

	it('test for floydWarshall', async () => {
		const _returnValueIRv4YZW = []
		const _getAllVerticespB5Mgk0 = () => { return _returnValueIRv4YZW };
		const _returnValuebTsfJpo = "SecLbGjkXCJm5BS08cofmUXBHn2XMieYwDd";
		const _findEdgeKaURuJn = () => { return _returnValuebTsfJpo };
		const _graphM4ki7l6 = {
			"getAllVertices": _getAllVerticespB5Mgk0,
		"findEdge": _findEdgeKaURuJn
	}
		const _returnValueVjZsz9G = await floydWarshall(_graphM4ki7l6)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueNC2WjVm = true;
		const _arrayValuezdz2Ku = 4.671372658686012;
		const _arrayValueCI2ZQQ = [_arrayValuezdz2Ku]
		const _arrayValueftDiVQ = 3.094954209756029;
		const _returnValueHKeZOYO = [_arrayValueNC2WjVm, _arrayValueCI2ZQQ, _arrayValueftDiVQ]
		const _getAllVerticesUb0Dxs = () => { return _returnValueHKeZOYO };
		const _arrayValueHUBS0I = false;
		const _arrayValueGzpkS4g = {
		
	}
		const _arrayValueyCsQCJt = false;
		const _arrayValueaRhGVpP = [_arrayValueHUBS0I, _arrayValueGzpkS4g, _arrayValueyCsQCJt]
		const _returnValueyapskWg = [_arrayValueaRhGVpP]
		const _findEdgeR5MOyiM = () => { return _returnValueyapskWg };
		const _graphagGDTzG = {
			"getAllVertices": _getAllVerticesUb0Dxs,
		"findEdge": _findEdgeR5MOyiM
	}
		const _returnValueb6nPaTB = await floydWarshall(_graphagGDTzG)
	});
})