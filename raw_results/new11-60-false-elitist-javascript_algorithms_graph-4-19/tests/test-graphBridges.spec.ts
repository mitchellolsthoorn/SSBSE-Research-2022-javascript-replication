export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValuePyuIYBT = -9.543856626114746;
		const _getAllVerticesku61cKM = () => { return _returnValuePyuIYBT };
		const _returnValueF7QrEkw = undefined;
		const _returnValueuqPZGgo = () => { return _returnValueF7QrEkw };
		const _returnValuelzk2PhE = () => { return _returnValueuqPZGgo };
		const _findEdgeW8Ufn2V = () => { return _returnValuelzk2PhE };
		const _graphsZdRs46 = {
			"getAllVertices": _getAllVerticesku61cKM,
		"findEdge": _findEdgeW8Ufn2V
	}
		const _returnValuecHE4wqm = await graphBridges(_graphsZdRs46)
	});
})