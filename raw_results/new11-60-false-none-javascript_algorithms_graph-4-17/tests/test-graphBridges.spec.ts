export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _graphHJ7i53D = "9KVJGfkpmEgnoi9Qd2gofpo8xMGy26Hr2T6oSTNb7RpvsWgSIr9FyVsjwzNUI";
		const _returnValueJKBnm6w = await graphBridges(_graphHJ7i53D)
	});
})