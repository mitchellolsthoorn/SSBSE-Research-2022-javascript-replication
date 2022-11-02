export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValuegNfH3w = -6.471029513652875;
		const _getNeighborsAEAKsqE = () => { return _returnValuegNfH3w };
		const _graphXJCtscx = {
			"getNeighbors": _getNeighborsAEAKsqE
	}
		const _startVertexnTp3lyO = 7.432511578995687;
		const _originalCallbacksOJuuSqt = 1.2086285995619583;
		const _returnValuepIHZR9b = await breadthFirstSearch(_graphXJCtscx, _startVertexnTp3lyO, _originalCallbacksOJuuSqt)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValue1AY10j = 8.496482318247342;
		const _getNeighborsWa4zDDt = () => { return _returnValue1AY10j };
		const _graphZGZoxWa = {
			"getNeighbors": _getNeighborsWa4zDDt
	}
		const _arrayValueZEqYAYW = null;
		const _returnValuexJIdgY5 = [_arrayValueZEqYAYW]
		const _returnValuerZsZGDV = () => { return _returnValuexJIdgY5 };
		const _startVertexSrl4DbY = () => { return _returnValuerZsZGDV };
		const _originalCallbacksNBt6H0 = undefined;
		const _returnValueP8m462c = await breadthFirstSearch(_graphZGZoxWa, _startVertexSrl4DbY, _originalCallbacksNBt6H0)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuehVMhEKy = []
		const _returnValueuStLiw0 = [_arrayValuehVMhEKy]
		const _getNeighborsqVlOV6h = () => { return _returnValueuStLiw0 };
		const _grapha0m0n6 = {
			"getNeighbors": _getNeighborsqVlOV6h
	}
		const _startVertexbJOzCU2 = true;
		const _returnValueVxruQFo = {
		
	}
		const _originalCallbackshvOFNXl = () => { return _returnValueVxruQFo };
		const _returnValuegPHYyrK = await breadthFirstSearch(_grapha0m0n6, _startVertexbJOzCU2, _originalCallbackshvOFNXl)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValuetWW7N3h = []
		const _getNeighborspevtmo5 = () => { return _returnValuetWW7N3h };
		const _graphVi8g2IZ = {
			"getNeighbors": _getNeighborspevtmo5
	}
		const _startVertexZAd3mYn = 4.360451063997743;
		const _originalCallbacksoKLGXI4 = {
		
	}
		const _returnValueM0ajZpD = await breadthFirstSearch(_graphVi8g2IZ, _startVertexZAd3mYn, _originalCallbacksoKLGXI4)
	});
})