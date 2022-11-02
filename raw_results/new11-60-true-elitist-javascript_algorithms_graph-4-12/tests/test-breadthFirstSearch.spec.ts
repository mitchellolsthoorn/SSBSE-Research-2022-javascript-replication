export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueU0Z7rzV = false;
		const _getNeighborsxBhq49M = () => { return _returnValueU0Z7rzV };
		const _graphvjGpKIc = {
			"getNeighbors": _getNeighborsxBhq49M
	}
		const _startVertexMmapnO2 = false;
		const _originalCallbacksQVUfcZK = "U8iqcEDbkmVhhcXf2hrDymZffO0TtdNElvpavPF";
		const _returnValueZfk2uma = await breadthFirstSearch(_graphvjGpKIc, _startVertexMmapnO2, _originalCallbacksQVUfcZK)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValuelBHzIQ5 = 8.339618169532955;
		const _getNeighborsQqptEdW = () => { return _returnValuelBHzIQ5 };
		const _graphmEC1vRm = {
			"getNeighbors": _getNeighborsQqptEdW
	}
		const _arrayValueumA7JM3 = undefined;
		const _arrayValuer4bPE7 = -3.083756537429978;
		const _arrayValueD2rAGJ = 5.740494263389147;
		const _startVertexNgO5CEO = [_arrayValueumA7JM3, _arrayValuer4bPE7, _arrayValueD2rAGJ]
		const _originalCallbacksds0Ai9m = undefined;
		const _returnValueXK8XLP7 = await breadthFirstSearch(_graphmEC1vRm, _startVertexNgO5CEO, _originalCallbacksds0Ai9m)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueNGMqQg8 = true;
		const _returnValueeu8mGcG = "MQdzvWLRETgdSl2tvW195YncTzP36jK9c9kMh1Eq4BvmicgJ9MN6NywaykNLwgqWyrCk";
		const _arrayValuew6SHpWV = () => { return _returnValueeu8mGcG };
		const _returnValuebAxJxAm = [_arrayValueNGMqQg8, _arrayValuew6SHpWV]
		const _getNeighborsogSNObZ = () => { return _returnValuebAxJxAm };
		const _graphH2mufbX = {
			"getNeighbors": _getNeighborsogSNObZ
	}
		const _startVertexAAclgxX = "rdhCrMCzkHAlN266AvzzRl95SuWNol1FlWIbcstm5bUtnhh4DMk6hN4zQpg1rqtsMbDbO4olSj";
		const _originalCallbacksQKeVaFL = {
		
	}
		const _returnValueHIwKIHG = await breadthFirstSearch(_graphH2mufbX, _startVertexAAclgxX, _originalCallbacksQKeVaFL)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValuejRJnMkP = []
		const _getNeighborsUMbSltP = () => { return _returnValuejRJnMkP };
		const _graphMY2Swgv = {
			"getNeighbors": _getNeighborsUMbSltP
	}
		const _startVertexEWc62JD = undefined;
		const _returnValueYr6q5o5 = 3.003193967146366;
		const _originalCallbackssjFy9ZH = () => { return _returnValueYr6q5o5 };
		const _returnValueVbheMdi = await breadthFirstSearch(_graphMY2Swgv, _startVertexEWc62JD, _originalCallbackssjFy9ZH)
	});
})