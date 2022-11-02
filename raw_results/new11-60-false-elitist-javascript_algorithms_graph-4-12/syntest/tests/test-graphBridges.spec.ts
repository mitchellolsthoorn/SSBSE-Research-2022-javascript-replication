export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueNG3J44o = 9.824291046836894;
		const _getAllVerticesjgytaPy = () => { return _returnValueNG3J44o };
		const _returnValuek9QQut = true;
		const _findEdge4GFxma = () => { return _returnValuek9QQut };
		const _grapholA4Mye = {
			"getAllVertices": _getAllVerticesjgytaPy,
		"findEdge": _findEdge4GFxma
	}
		const _returnValueskrJRrG = await graphBridges(_grapholA4Mye)
	});
})