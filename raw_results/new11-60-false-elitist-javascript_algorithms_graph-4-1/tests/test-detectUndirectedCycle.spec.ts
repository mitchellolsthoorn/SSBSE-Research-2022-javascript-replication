export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValuelI2QEph = "KXXBBhgn9cKAqtkd2mvLyl9pqvkknyp2nmuWvTn4Wg6nQjr54vSn4TFmFLOXY3T6saTUEnH95X";
		const _getAllVerticesQsssvD = () => { return _returnValuelI2QEph };
		const _graphkqLaj5 = {
			"getAllVertices": _getAllVerticesQsssvD
	}
		const _returnValueDJVZole = await detectUndirectedCycle(_graphkqLaj5)
	});
})