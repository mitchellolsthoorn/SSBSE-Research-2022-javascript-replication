export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _graphgYd5i8s = "kuXNS4IMvMUnzVtwASwoJqX24S8Zkj31A0f6BBgAt9U2";
		const _returnValueiXhaYrU = await detectUndirectedCycle(_graphgYd5i8s)
	});
})