export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValuevFY8NYh = -7.9657021073116585;
		const _returnValue3Q2uBR = () => { return _returnValuevFY8NYh };
		const _getAllEdgesWuTZ0Qt = () => { return _returnValue3Q2uBR };
		const _returnValue9zycu3 = null;
		const _getAllVerticesE291t2 = () => { return _returnValue9zycu3 };
		const _returnValueDyjmTgZ = false;
		const _deleteEdgekWxWmi = () => { return _returnValueDyjmTgZ };
		const _graphzrR4maz = {
			"getAllEdges": _getAllEdgesWuTZ0Qt,
		"getAllVertices": _getAllVerticesE291t2,
		"deleteEdge": _deleteEdgekWxWmi
	}
		const _returnValued3Z1ZUE = await eulerianPath(_graphzrR4maz)
	});

	it('test for eulerianPath', async () => {
		const _returnValuePdQEvTm = []
		const _getAllEdgesIfkCX4l = () => { return _returnValuePdQEvTm };
		const _arrayValuexx7aQzE = {
		
	}
		const _arrayValuevinzF0x = null;
		const _arrayValueeTzuL4p = null;
		const _returnValueYOmZq6 = [_arrayValuexx7aQzE, _arrayValuevinzF0x, _arrayValueeTzuL4p]
		const _getAllVerticesCaV8Nzc = () => { return _returnValueYOmZq6 };
		const _arrayValueuZb8gX = {
		
	}
		const _arrayValueFGD42O9 = [_arrayValueuZb8gX]
		const _returnValue22pd1K = [_arrayValueFGD42O9]
		const _deleteEdgeT694iC = () => { return _returnValue22pd1K };
		const _graphAzULgkj = {
			"getAllEdges": _getAllEdgesIfkCX4l,
		"getAllVertices": _getAllVerticesCaV8Nzc,
		"deleteEdge": _deleteEdgeT694iC
	}
		const _returnValuemM9bGhV = await eulerianPath(_graphAzULgkj)
	});
})