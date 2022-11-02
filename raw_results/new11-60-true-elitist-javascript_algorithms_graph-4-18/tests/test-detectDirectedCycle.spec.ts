export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValuelAD8rTO = true;
		const _getAllVerticesMtW6MCr = () => { return _returnValuelAD8rTO };
		const _graphkp1kR0F = {
			"getAllVertices": _getAllVerticesMtW6MCr
	}
		const _returnValueAQYCvYe = await detectDirectedCycle(_graphkp1kR0F)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedO87A6mB = true;
		const _graphfvJoEzH = new Graph(_isDirectedO87A6mB)
		const _returnValueqa81Ivb = undefined;
		const _getKeyOtPLks2 = () => { return _returnValueqa81Ivb };
		const _newVertexQpBh9uZ = {
			"getKey": _getKeyOtPLks2
	}
		const _returnValueE4m4B3W = await _graphfvJoEzH.addVertex(_newVertexQpBh9uZ)
		const _returnValueDopD8Jd = await _graphfvJoEzH.getWeight()
		const _returnValueVRD3nQ = true;
		const _getNeighbors4MXRDK = () => { return _returnValueVRD3nQ };
		const _vertexL9QzaYd = {
			"getNeighbors": _getNeighbors4MXRDK
	}
		const _returnValueTKte3nT = await _graphfvJoEzH.getNeighbors(_vertexL9QzaYd)
		const _returnValueKEBTRRA = await detectDirectedCycle(_graphfvJoEzH)
	});
})