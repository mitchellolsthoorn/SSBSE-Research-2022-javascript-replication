export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _graphMNNywST = "uSw5M8kA6IpPr87YmQio9hVicciIkT";
		const _returnValueGT6FOwp = await eulerianPath(_graphMNNywST)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedRSjUK0A = "Dxv2bmUjuGCO9oa4Y7LXdXRGfMcbL9u7iYONGozeCsqXmGHB8ri";
		const _graphJVPRSLA = new Graph(_isDirectedRSjUK0A)
		const _returnValueq3iUV4q = await _graphJVPRSLA.getVerticesIndices()
		const _returnValueBgbNBpU = await _graphJVPRSLA.reverse()
		const _returnValueJKTRSff = await _graphJVPRSLA.reverse()
		const _returnValueOMdf23 = await eulerianPath(_graphJVPRSLA)
	});
})