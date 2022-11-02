export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueOCh3dJR = 4.867035310885196;
		const _getAllVerticesjOFo6Ma = () => { return _returnValueOCh3dJR };
		const _returnValuetmPoahI = {
		
	}
		const _findEdgezCGLLoo = () => { return _returnValuetmPoahI };
		const _graphBw4HT8Q = {
			"getAllVertices": _getAllVerticesjOFo6Ma,
		"findEdge": _findEdgezCGLLoo
	}
		const _returnValueMQpqzDF = await floydWarshall(_graphBw4HT8Q)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueafW0ZZZ = false;
		const _arrayValueL0nu4c = {
		
	}
		const _arrayValueqX2jC53 = -1.9738703183704107;
		const _arrayValueju9DSnc = "EAkdGG2lj3cJr9RKfgIEzEV87W7AMUp0I4YJ";
		const _arrayValueOsAkPJ = -0.9799218186843675;
		const _arrayValueScw4Z4r = null;
		const _arrayValuekQPUeE4 = undefined;
		const _arrayValueNj6NKps = [_arrayValueOsAkPJ, _arrayValueScw4Z4r, _arrayValuekQPUeE4]
		const _arrayValue1t1rqn = null;
		const _arrayValueVijHSGZ = "g3";
		const _arrayValueOEoXBNj = [_arrayValueNj6NKps, _arrayValue1t1rqn, _arrayValueVijHSGZ]
		const _arrayValueOQOof9k = null;
		const _arrayValuegqcBI77 = [_arrayValueqX2jC53, _arrayValueju9DSnc, _arrayValueOEoXBNj, _arrayValueOQOof9k]
		const _arrayValueKjir8aG = [_arrayValuegqcBI77]
		const _arrayValueqSMEHQ6 = [_arrayValueafW0ZZZ, _arrayValueL0nu4c, _arrayValueKjir8aG]
		const _arrayValueXiUCVRu = []
		const _arrayValuevMxGJKQ = undefined;
		const _returnValueAZizYcu = [_arrayValueqSMEHQ6, _arrayValueXiUCVRu, _arrayValuevMxGJKQ]
		const _getAllVerticesAxLGYKW = () => { return _returnValueAZizYcu };
		const _returnValuegDqkH1V = undefined;
		const _findEdgeuf1q5b5 = () => { return _returnValuegDqkH1V };
		const _graphkbH8qf = {
			"getAllVertices": _getAllVerticesAxLGYKW,
		"findEdge": _findEdgeuf1q5b5
	}
		const _returnValuere0EnXj = await floydWarshall(_graphkbH8qf)
	});
})