export {}
import Comparator from "../../benchmark/large_projects/javascript-algorithms/src/utils/comparator/Comparator.js";
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _compareFunctionmTjeBs9 = false;
		const _graphBJcVLKm = new Comparator(_compareFunctionmTjeBs9)
		const _aWPkhtsy = true;
		const _bPfpcWMu = {
		
	}
		const _returnValueFDr4wF6 = await _graphBJcVLKm.lessThanOrEqual(_aWPkhtsy, _bPfpcWMu)
		const _returnValuexFHqmPl = "3";
		const _amZhKhgs = () => { return _returnValuexFHqmPl };
		const _bhQxVMym = "utc1z6tizpNcEyVonDN64aMfKgTfb6I7b7VnG";
		const _returnValuedLKbGSt = await _graphBJcVLKm.lessThan(_amZhKhgs, _bhQxVMym)
		const _agKtn0N = null;
		const _bKX7IF4M = 2.811538985518876;
		const _returnValueBiQlzaM = await _graphBJcVLKm.greaterThan(_agKtn0N, _bKX7IF4M)
		const _returnValueBiFvAJR = await stronglyConnectedComponents(_graphBJcVLKm)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedpP7iXd = true;
		const _graph0HeEUf = new Graph(_isDirectedpP7iXd)
		const _returnValueyJLJ6j = await _graph0HeEUf.toString()
		const _returnValueVR7u6zh = await _graph0HeEUf.getVerticesIndices()
		const _returnValueuXiZ5Kq = await _graph0HeEUf.getAdjacencyMatrix()
		const _returnValueS2EqZEw = await stronglyConnectedComponents(_graph0HeEUf)
	});
})