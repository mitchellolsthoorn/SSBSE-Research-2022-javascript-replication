export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _graphtQJclQE = "jHwLipo9G7RKb122AWDJCohQ1e8reUHorElQckgV5kNmq5i31MC8HLCl6hVilEv6OGNepxJT5rOzoFCb";
		const _returnValuepNID0R = await detectDirectedCycle(_graphtQJclQE)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedKAxJhr = false;
		const _graphDROv7UK = new Graph(_isDirectedKAxJhr)
		const _returnValuewHmvVdS = await _graphDROv7UK.getVerticesIndices()
		const _returnValuelvUhR2V = await detectDirectedCycle(_graphDROv7UK)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedMGv5pT = false;
		const _graphX9UOfN8 = new Graph(_isDirectedMGv5pT)
		const _returnValueNVhhlsq = await _graphX9UOfN8.getAllEdges()
		const _vertexKeyKTOtZ1N = null;
		const _returnValueKXyPkBa = await _graphX9UOfN8.getVertexByKey(_vertexKeyKTOtZ1N)
		const _returnValueQxSbKZQ = await _graphX9UOfN8.reverse()
		const _vertexKeyg2hDzEx = 0.40314119728890496;
		const _returnValuewFbPcCf = await _graphX9UOfN8.getVertexByKey(_vertexKeyg2hDzEx)
		const _arrayValueUiQLEA9 = {
		
	}
		const _arrayValuerEtLPq = undefined;
		const _arrayValueHEvwqZQ = false;
		const _arrayValueq5vz7d3 = false;
		const _returnValueQAhgjoX = [_arrayValueUiQLEA9, _arrayValuerEtLPq, _arrayValueHEvwqZQ, _arrayValueq5vz7d3]
		const _getKeyjZlvXHK = () => { return _returnValueQAhgjoX };
		const _newVertexa3a2ATp = {
			"getKey": _getKeyjZlvXHK
	}
		const _returnValuetWugGxj = await _graphX9UOfN8.addVertex(_newVertexa3a2ATp)
		const _returnValueUA1ooEt = await detectDirectedCycle(_graphX9UOfN8)
	});
})