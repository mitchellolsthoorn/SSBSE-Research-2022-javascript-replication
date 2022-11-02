export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _arrayValuezqJGzU = 0.29738394318141914;
		const _graphii4GBZj = [_arrayValuezqJGzU]
		const _returnValuePdKEgP = await prim(_graphii4GBZj)
	});

	it('test for prim', async () => {
		const _isDirectedp1Jle6 = true;
		const _arrayValueRNgs9pH = undefined;
		const _arrayValuexVqgtNf = "p9c2MTjgO90dQl8MyTkJYXLISKdF4834zNPILJttalHXUZZpYbKT4ujCP1";
		const _arrayValuef89416 = true;
		const _arrayValueaEXjBWv = {
		
	}
		const _arrayValueGLPJY0K = [_arrayValuef89416, _arrayValueaEXjBWv]
		const _returnValueHFuq9FV = [_arrayValueRNgs9pH, _arrayValuexVqgtNf, _arrayValueGLPJY0K]
		const _getAllVerticesvVuFbVq = () => { return _returnValueHFuq9FV };
		const _graphkdkDBop = {
			"isDirected": _isDirectedp1Jle6,
		"getAllVertices": _getAllVerticesvVuFbVq
	}
		const _returnValuelPmH9fN = await prim(_graphkdkDBop)
	});

	it('test for prim', async () => {
		const _isDirectedAQlv8kG = false;
		const _graphLkbv9Is = new Graph(_isDirectedAQlv8kG)
		const _returnValueRHwiCWN = await _graphLkbv9Is.toString()
		const _returnValueG5wQfBl = await _graphLkbv9Is.getAllEdges()
		const _returnValueFCjc4mq = {
		
	}
		const _getKeyrDgkxHn = () => { return _returnValueFCjc4mq };
		const _newVertexEYJBzol = {
			"getKey": _getKeyrDgkxHn
	}
		const _returnValueobGCzJN = await _graphLkbv9Is.addVertex(_newVertexEYJBzol)
		const _vertexKeyJ8G5Kax = true;
		const _returnValueIPGo4IS = await _graphLkbv9Is.getVertexByKey(_vertexKeyJ8G5Kax)
		const _returnValuedNgqe8v = await prim(_graphLkbv9Is)
	});
})