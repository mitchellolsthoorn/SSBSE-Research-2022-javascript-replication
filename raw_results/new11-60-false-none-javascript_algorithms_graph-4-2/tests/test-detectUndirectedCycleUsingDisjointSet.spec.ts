export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _graphaChdpg4 = "UkQEMjOV4jeVHMHNjZQzBGo3pbKNcJQeBOUGNaXsvqX29vVxfH4IVm4IErLuOXQVGBdNgiS3E1WEt33COQ3d8bM2TcY4oZFZa";
		const _returnValueZyCSxg = await detectUndirectedCycleUsingDisjointSet(_graphaChdpg4)
	});
})