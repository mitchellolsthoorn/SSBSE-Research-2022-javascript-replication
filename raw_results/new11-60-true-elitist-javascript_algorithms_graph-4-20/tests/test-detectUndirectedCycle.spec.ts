export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _getAllVerticesOI66xtJ = "o3hIcwLvVrfWFijThVsQVxTG44KNqOcRDOBbRt50t28brRkdFV4s2RXJrqfE36N";
		const _graphFdT9AnA = {
			"getAllVertices": _getAllVerticesOI66xtJ
	}
		const _returnValuedd6r1Ue = await detectUndirectedCycle(_graphFdT9AnA)
	});
})