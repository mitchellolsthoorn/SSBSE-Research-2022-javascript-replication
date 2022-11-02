export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graphAo8hm7S = []
		const _startVertexhugWwZt = {
		
	}
		const _originalCallbacksZWKfTaw = null;
		const _returnValueef3qaBd = await breadthFirstSearch(_graphAo8hm7S, _startVertexhugWwZt, _originalCallbacksZWKfTaw)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuew2Wyumd = "CQB7nrFCE8BSpmdvIJXyLRAL4lbiiD75W";
		const _arrayValuesCiCneM = {
		
	}
		const _grapho4Ap1CS = [_arrayValuew2Wyumd, _arrayValuesCiCneM]
		const _startVertexLzW4wut = "1e7hkdG2l8GTvsc34j7RXlvvUbFISt6tdpIIV";
		const _originalCallbacksaR1SHRv = undefined;
		const _returnValueNzsvAZg = await breadthFirstSearch(_grapho4Ap1CS, _startVertexLzW4wut, _originalCallbacksaR1SHRv)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueNRqwZFW = false;
		const _graphvlFlOW3 = new GraphVertex(_valueNRqwZFW)
		const _returnValueE3babQA = await _graphvlFlOW3.getDegree()
		const _returnValueJZj0x7B = await _graphvlFlOW3.getEdges()
		const _vertexBisFHEN = []
		const _returnValuewO0CNg = await _graphvlFlOW3.hasNeighbor(_vertexBisFHEN)
		const _returnValueb8pw5cf = await _graphvlFlOW3.getDegree()
		const _startVertexTfuMqYN = undefined;
		const _originalCallbacksQvyFs8R = undefined;
		const _returnValuevACLmIf = await breadthFirstSearch(_graphvlFlOW3, _startVertexTfuMqYN, _originalCallbacksQvyFs8R)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuesV2tN16 = null;
		const _arrayValueeoBTk5r = false;
		const _arrayValueFXEMz3k = "RHrJXmA6qUXWwPALbFA5jBXM6sJeQ1F64blHhkbcmRqwGuhjN";
		const _returnValuecorABSO = [_arrayValuesV2tN16, _arrayValueeoBTk5r, _arrayValueFXEMz3k]
		const _getNeighborsFHSdm5e = () => { return _returnValuecorABSO };
		const _graphCqwVaUb = {
			"getNeighbors": _getNeighborsFHSdm5e
	}
		const _startVertexn9ank3w = {
		
	}
		const _originalCallbacksyZ2531U = undefined;
		const _returnValuemMV5zxW = await breadthFirstSearch(_graphCqwVaUb, _startVertexn9ank3w, _originalCallbacksyZ2531U)
	});
})