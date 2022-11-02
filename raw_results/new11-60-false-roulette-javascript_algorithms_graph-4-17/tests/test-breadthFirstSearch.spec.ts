export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueSqADYtK = {
		
	}
		const _getNeighbors32pZHH = () => { return _returnValueSqADYtK };
		const _graphBa9hv5l = {
			"getNeighbors": _getNeighbors32pZHH
	}
		const _startVertexCyvilDc = 7.737701454652218;
		const _originalCallbackswpf9hWO = 8.215886060421198;
		const _returnValuevgFqa7I = await breadthFirstSearch(_graphBa9hv5l, _startVertexCyvilDc, _originalCallbackswpf9hWO)
	});

	it('test for breadthFirstSearch', async () => {
		const _graphfRZuz6S = false;
		const _arrayValuepJ9bSDq = null;
		const _startVertexp759r47 = [_arrayValuepJ9bSDq]
		const _originalCallbacksSMZkxOw = {
		
	}
		const _returnValueb0mD7R3 = await breadthFirstSearch(_graphfRZuz6S, _startVertexp759r47, _originalCallbacksSMZkxOw)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuekJrqyf = undefined;
		const _arrayValuebyQoTR = null;
		const _arrayValuevJbMG2C = null;
		const _returnValuenUD4C4g = [_arrayValuekJrqyf, _arrayValuebyQoTR, _arrayValuevJbMG2C]
		const _getNeighborsCwVYRdm = () => { return _returnValuenUD4C4g };
		const _graphaJfZ4aY = {
			"getNeighbors": _getNeighborsCwVYRdm
	}
		const _startVertexcSklWHY = -4.816436178739616;
		const _originalCallbacksjfyjzQD = {
		
	}
		const _returnValueq1hdxAL = await breadthFirstSearch(_graphaJfZ4aY, _startVertexcSklWHY, _originalCallbacksjfyjzQD)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueaBWejl = 6.85823216209365;
		const _graphaSjxkY = new GraphVertex(_valueaBWejl)
		const _returnValueedUDH1c = await _graphaSjxkY.getKey()
		const _returnValuepylgpQ1 = await _graphaSjxkY.deleteAllEdges()
		const _returnValueCpVGAfh = await _graphaSjxkY.getKey()
		const _startVertexW2GqfQ = null;
		const _originalCallbacks71BaYu = undefined;
		const _returnValues80BnWp = await breadthFirstSearch(_graphaSjxkY, _startVertexW2GqfQ, _originalCallbacks71BaYu)
	});
})