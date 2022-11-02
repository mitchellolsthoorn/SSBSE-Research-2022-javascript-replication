export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _arrayValuesertwjf = false;
		const _arrayValuempf3A59 = null;
		const _graphjq6dHqw = [_arrayValuesertwjf, _arrayValuempf3A59]
		const _returnValueZwLxjlt = await detectDirectedCycle(_graphjq6dHqw)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedrtFqtl = false;
		const _graphhccHAv = new Graph(_isDirectedrtFqtl)
		const _returnValueV3AMQ5d = await _graphhccHAv.getWeight()
		const _returnValueBaVRmB1 = await _graphhccHAv.getVerticesIndices()
		const _returnValueVvFuULF = await detectDirectedCycle(_graphhccHAv)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedaRtMqHi = true;
		const _graphqOx7Zub = new Graph(_isDirectedaRtMqHi)
		const _returnValueZewdNxx = await _graphqOx7Zub.reverse()
		const _value9eJQ6o = undefined;
		const _returnValueD0PAJ6N = "FV4azN6L6sIO7Tc9oesVPimywy4oP23CQ3PSttQ9i1bsUP1JXOx8oJToOpMQzaKHtlyNWwbeRzIFLDDHu";
		const _keyCallbackcZhWJqI = () => { return _returnValueD0PAJ6N };
		const _newVertexdKV7s9a = new DisjointSetItem(_value9eJQ6o, _keyCallbackcZhWJqI)
		const _returnValuedeeKGqD = await _newVertexdKV7s9a.isRoot()
		const _returnValueY0qnFXy = await _graphqOx7Zub.addVertex(_newVertexdKV7s9a)
		const _returnValueBrkzo9R = await detectDirectedCycle(_graphqOx7Zub)
	});
})