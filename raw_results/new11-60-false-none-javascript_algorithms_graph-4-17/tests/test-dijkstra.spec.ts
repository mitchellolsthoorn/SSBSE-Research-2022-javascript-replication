export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _graphkSklBx = undefined;
		const _startVertexG44MU8x = "J48CeeOLr3p0bm2BJ4S3kcBod56MbU1ThQ7b9lQTlTS4s69gKWHs9BR7aIEhhvh4H55bGaSDM8PNjdzqYXo5UqQqSvycs";
		const _returnValuel3RbhSS = await dijkstra(_graphkSklBx, _startVertexG44MU8x)
	});
})