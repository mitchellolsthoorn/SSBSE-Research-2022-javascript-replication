export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _arrayValueHEFmbJo = undefined;
		const _arrayValueA6DegbE = "w6W6";
		const _returnValueWvUBoSQ = [_arrayValueHEFmbJo, _arrayValueA6DegbE]
		const _graphRGYbFVl = () => { return _returnValueWvUBoSQ };
		const _returnValueWE094mM = await graphBridges(_graphRGYbFVl)
	});

	it('test for graphBridges', async () => {
		const _returnValueAK1hOM = "KoQuyQ4qMWLCjLRBjXyLIY3GVQ";
		const _returnValueLEO1Vhb = () => { return _returnValueAK1hOM };
		const _isDirectedJrSmNqp = () => { return _returnValueLEO1Vhb };
		const _graph8CaZyM = new Graph(_isDirectedJrSmNqp)
		const _arrayValueTCadp20 = -4.835028539300601;
		const _arrayValueYovteM7 = null;
		const _arrayValuejrlD3sq = undefined;
		const _arrayValueYrJgrWw = [_arrayValueYovteM7, _arrayValuejrlD3sq]
		const _arrayValuedadvII = {
		
	}
		const _arrayValueDMQcV5O = [_arrayValueYrJgrWw, _arrayValuedadvII]
		const _returnValueKzDB9nT = [_arrayValueTCadp20, _arrayValueDMQcV5O]
		const _getNeighborslH3iDFn = () => { return _returnValueKzDB9nT };
		const _vertexzqd0RnA = {
			"getNeighbors": _getNeighborslH3iDFn
	}
		const _returnValuesjl1w2C = await _graph8CaZyM.getNeighbors(_vertexzqd0RnA)
		const _arrayValuesSClIqs = "yVJwELFOg3SuAYYa4XzQ7xm7b";
		const _arrayValueU107a1Z = null;
		const _arrayValuesVamYyG = null;
		const _returnValuenbmTZ3E = [_arrayValuesSClIqs, _arrayValueU107a1Z, _arrayValuesVamYyG]
		const _getKeyfZX04Y = () => { return _returnValuenbmTZ3E };
		const _newVertexK2FfFX4 = {
			"getKey": _getKeyfZX04Y
	}
		const _returnValueLY7TJIv = await _graph8CaZyM.addVertex(_newVertexK2FfFX4)
		const _returnValueisFhArF = await graphBridges(_graph8CaZyM)
	});
})