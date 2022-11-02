export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _graphTJnNgpc = "PCnCPbJELRGBW8LogB61NpX8kaSYAz";
		const _returnValuezFh5JFt = await detectDirectedCycle(_graphTJnNgpc)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedr9TUzip = true;
		const _graphm7IsxfF = new Graph(_isDirectedr9TUzip)
		const _returnValuelnTve0L = await _graphm7IsxfF.reverse()
		const _returnValuevXquMr3 = await _graphm7IsxfF.getWeight()
		const _returnValuemKdKbIz = await detectDirectedCycle(_graphm7IsxfF)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedWpLblyq = false;
		const _graphEp99hp0 = new Graph(_isDirectedWpLblyq)
		const _returnValuepKAtDXe = await _graphEp99hp0.reverse()
		const _returnValueFzyLDHk = "JjyX69nok64LJGZhMUovbp72tLOXuM74jHC9WxkDco0XZRni2XGHPkutNuAjyoyJzQlX9G4HXkS5zdg2zvHx6MRQ";
		const _getKeywbAYhUq = () => { return _returnValueFzyLDHk };
		const _newVertexL5dREN5 = {
			"getKey": _getKeywbAYhUq
	}
		const _returnValueuBT3vJm = await _graphEp99hp0.addVertex(_newVertexL5dREN5)
		const _returnValuecHavbgD = await detectDirectedCycle(_graphEp99hp0)
	});
})