export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueJxL7fHl = {
		
	}
		const _getAllVertices7Lgchq = () => { return _returnValueJxL7fHl };
		const _graphc5Gs59W = {
			"getAllVertices": _getAllVertices7Lgchq
	}
		const _returnValuebziRMKf = await detectDirectedCycle(_graphc5Gs59W)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValueAvx6LaP = []
		const _getAllVerticesNwLB23n = () => { return _returnValueAvx6LaP };
		const _graphSgqdAMe = {
			"getAllVertices": _getAllVerticesNwLB23n
	}
		const _returnValueJjTbPL9 = await detectDirectedCycle(_graphSgqdAMe)
	});
})