export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _arrayValuerytcI1 = false;
		const _arrayValueCYlzwj9 = undefined;
		const _returnValuesC7Tnqb = [_arrayValuerytcI1, _arrayValueCYlzwj9]
		const _returnValueqE3q4Tu = () => { return _returnValuesC7Tnqb };
		const _getNeighborso8z9Krm = () => { return _returnValueqE3q4Tu };
		const _graphyi3JXn = {
			"getNeighbors": _getNeighborso8z9Krm
	}
		const _startVertexz9HeCBz = 9.16789522889329;
		const _originalCallbackscEJCj7z = -4.905894243271479;
		const _returnValuey2txNXJ = await breadthFirstSearch(_graphyi3JXn, _startVertexz9HeCBz, _originalCallbackscEJCj7z)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValuepDLcrCr = -5.0902248409235735;
		const _graphbcbcYb0 = () => { return _returnValuepDLcrCr };
		const _startVertexoMQNpK6 = undefined;
		const _arrayValuecYcLf8z = "BAL0";
		const _arrayValueWhn9ze5 = undefined;
		const _returnValueNi4201u = "Av3EWIFdg7n6KXtANrx1PGvxNwp8YFqT7awaJpaX6xjaNJp1uSAsSY8kzNivO4aSO0vPql8wQeOSCWVg5tTNYA";
		const _arrayValuepxcBygD = () => { return _returnValueNi4201u };
		const _arrayValuencSJHDG = undefined;
		const _returnValueVzebrD8 = {
		
	}
		const _arrayValueYP9UrOg = () => { return _returnValueVzebrD8 };
		const _arrayValueWNTvsW = [_arrayValuepxcBygD, _arrayValuencSJHDG, _arrayValueYP9UrOg]
		const _arrayValueTkV2Hla = undefined;
		const _arrayValueTcViXew = null;
		const _originalCallbackspMGYRAr = [_arrayValuecYcLf8z, _arrayValueWhn9ze5, _arrayValueWNTvsW, _arrayValueTkV2Hla, _arrayValueTcViXew]
		const _returnValuepJ8YCX2 = await breadthFirstSearch(_graphbcbcYb0, _startVertexoMQNpK6, _originalCallbackspMGYRAr)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueYPFdvx = false;
		const _returnValuejoz1j1f = [_arrayValueYPFdvx]
		const _getNeighborshihLx6Z = () => { return _returnValuejoz1j1f };
		const _graphzXCCcHH = {
			"getNeighbors": _getNeighborshihLx6Z
	}
		const _startVertexpeVzXQ4 = true;
		const _arrayValuenABcr06 = null;
		const _arrayValuedY9HLnY = null;
		const _returnValuelwXFWI3 = -6.35183498742514;
		const _arrayValuelGgp3CK = () => { return _returnValuelwXFWI3 };
		const _arrayValuebnlXXk6 = null;
		const _originalCallbacksW3RxMwE = [_arrayValuenABcr06, _arrayValuedY9HLnY, _arrayValuelGgp3CK, _arrayValuebnlXXk6]
		const _returnValueyAptvhw = await breadthFirstSearch(_graphzXCCcHH, _startVertexpeVzXQ4, _originalCallbacksW3RxMwE)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueYYTfYze = "tyrz";
		const _valueagqYZhf = [_arrayValueYYTfYze]
		const _graphx8cYSAj = new GraphVertex(_valueagqYZhf)
		const _returnValuewA7zwUG = true;
		const _callbackpuWF0P6 = () => { return _returnValuewA7zwUG };
		const _returnValuezCfzjjI = await _graphx8cYSAj.toString(_callbackpuWF0P6)
		const _vertexyqsNeET = {
		
	}
		const _returnValueC4JPqFg = await _graphx8cYSAj.hasNeighbor(_vertexyqsNeET)
		const _returnValueF54KB8p = await _graphx8cYSAj.getKey()
		const _startVertexW3n7fpT = null;
		const _arrayValuejAa11oQ = -8.679209368722175;
		const _originalCallbacksfHaOuer = [_arrayValuejAa11oQ]
		const _returnValuewa3BIlQ = await breadthFirstSearch(_graphx8cYSAj, _startVertexW3n7fpT, _originalCallbacksfHaOuer)
	});
})