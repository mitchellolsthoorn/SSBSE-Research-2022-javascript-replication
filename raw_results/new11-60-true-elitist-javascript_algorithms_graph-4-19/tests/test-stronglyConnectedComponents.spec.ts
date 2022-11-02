export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueMpUGSc = null;
		const _reverseeJjvpPm = () => { return _returnValueMpUGSc };
		const _graphRBqsTq8 = {
			"reverse": _reverseeJjvpPm
	}
		const _returnValueaMA9A4G = await stronglyConnectedComponents(_graphRBqsTq8)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirected1BL2D5 = false;
		const _graphok7NOox = new Graph(_isDirected1BL2D5)
		const _arrayValueMHaVoqJ = 2.7541637670484285;
		const _arrayValue5mgAS8 = {
		
	}
		const _arrayValueOYNRfT8 = {
		
	}
		const _arrayValueIofNdqt = [_arrayValueMHaVoqJ, _arrayValue5mgAS8, _arrayValueOYNRfT8]
		const _arrayValuek84RVht = true;
		const _arrayValuedUkN4xH = null;
		const _vertexKeyxXTvrDc = [_arrayValueIofNdqt, _arrayValuek84RVht, _arrayValuedUkN4xH]
		const _returnValueKkVrdjE = await _graphok7NOox.getVertexByKey(_vertexKeyxXTvrDc)
		const _returnValueyOjabyX = await _graphok7NOox.getAdjacencyMatrix()
		const _returnValuezK28zgg = await _graphok7NOox.reverse()
		const _returnValueOD4rouS = await stronglyConnectedComponents(_graphok7NOox)
	});
})