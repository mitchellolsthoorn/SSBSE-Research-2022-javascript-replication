export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _arrayValueu25HZIA = {
		
	}
		const _arrayValuevdKXUhh = "I18EpiYadWMCvxgE7SOyq99wxo6PjjXV5rlm6tfXcTl3";
		const _arrayValueZgs7qQD = undefined;
		const _returnValueI4RlOtm = [_arrayValueu25HZIA, _arrayValuevdKXUhh, _arrayValueZgs7qQD]
		const _reversepITn5oC = () => { return _returnValueI4RlOtm };
		const _graphdhD22ud = {
			"reverse": _reversepITn5oC
	}
		const _returnValueGEwGF5g = await stronglyConnectedComponents(_graphdhD22ud)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedd0U0OcB = false;
		const _graph6KVVjg = new Graph(_isDirectedd0U0OcB)
		const _returnValueLzyMy5S = await _graph6KVVjg.getWeight()
		const _returnValueCxqdQG = 4.988782516864873;
		const _getKeymiFxwgd = () => { return _returnValueCxqdQG };
		const _startVertexKLLCrYj = {
			"getKey": _getKeymiFxwgd
	}
		const _endVertexcbgvm8 = "Zoakcj1OrHra11df9EcaUAJM1aWISwgMvv";
		const _returnValueWgP6QHT = await _graph6KVVjg.findEdge(_startVertexKLLCrYj, _endVertexcbgvm8)
		const _returnValueMOsbR2I = await stronglyConnectedComponents(_graph6KVVjg)
	});
})