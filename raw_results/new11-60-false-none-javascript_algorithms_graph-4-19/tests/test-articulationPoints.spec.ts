export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _graphYuXIJrE = "StEVEGuLRotvkzY9vatXDwSKdgqWEP7z7QdEhYq7WVBKOahuWiQS77nQjFOh9TDO2pj2Duj44DRGbRImcCse3uXzRzwBaYIjw";
		const _returnValued3FhnT1 = await articulationPoints(_graphYuXIJrE)
	});
})