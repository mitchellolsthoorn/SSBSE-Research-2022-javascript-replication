export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _arrayValueL4srpW6 = undefined;
		const _arrayValueao3pTf3 = null;
		const _arrayValueHyiFUiy = 6.897063114661908;
		const _arrayValuep0jUanx = [_arrayValueao3pTf3, _arrayValueHyiFUiy]
		const _arrayValueA0tSYfA = "eAQyd0MCuqXRlkjuvzIYFELfUMYXIthNNWXzqgXe3zTBRfSXFlVBqOEyheU5q5p";
		const _arrayValueToXBO7 = null;
		const _arrayValuexj5ziAC = "iuKuKI1qMa6I16Sfd0O8a16Vdrfsc88lXkLZInNiU083L3KhSiVxYlM4xRz6hk52tDSwTbpH3sBJ";
		const _returnValuekvYmfZ0 = [_arrayValueL4srpW6, _arrayValuep0jUanx, _arrayValueA0tSYfA, _arrayValueToXBO7, _arrayValuexj5ziAC]
		const _getAllEdgeswf0TJmD = () => { return _returnValuekvYmfZ0 };
		const _getAllVerticeshokT16y = null;
		const _arrayValueXHiK2Z4 = null;
		const _returnValuegBBTF5S = [_arrayValueXHiK2Z4]
		const _deleteEdgewCgzbf9 = () => { return _returnValuegBBTF5S };
		const _graphSxq0YCr = {
			"getAllEdges": _getAllEdgeswf0TJmD,
		"getAllVertices": _getAllVerticeshokT16y,
		"deleteEdge": _deleteEdgewCgzbf9
	}
		const _returnValueciGtm31 = await eulerianPath(_graphSxq0YCr)
	});

	it('test for eulerianPath', async () => {
		const _returnValue4qbQPv = []
		const _getAllEdgesutICHQY = () => { return _returnValue4qbQPv };
		const _returnValueb20QQja = 3.446962110088613;
		const _getAllVerticespyRK0V = () => { return _returnValueb20QQja };
		const _returnValuevN96Hs = {
		
	}
		const _deleteEdgeLojaPfI = () => { return _returnValuevN96Hs };
		const _graphlArWXLB = {
			"getAllEdges": _getAllEdgesutICHQY,
		"getAllVertices": _getAllVerticespyRK0V,
		"deleteEdge": _deleteEdgeLojaPfI
	}
		const _returnValueRzjQ2uu = await eulerianPath(_graphlArWXLB)
	});
})