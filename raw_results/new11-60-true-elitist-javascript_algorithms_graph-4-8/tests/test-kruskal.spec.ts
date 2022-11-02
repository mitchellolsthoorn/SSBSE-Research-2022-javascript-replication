export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _arrayValueVCivKgf = null;
		const _arrayValueOnOQQC3 = null;
		const _arrayValueJpXbHoM = false;
		const _isDirected6uutWh = [_arrayValueVCivKgf, _arrayValueOnOQQC3, _arrayValueJpXbHoM]
		const _returnValueBHO6lRa = -9.881620281856952;
		const _getAllEdgesFqjylyz = () => { return _returnValueBHO6lRa };
		const _returnValueIIKb72k = null;
		const _getAllVerticesAV6NEn3 = () => { return _returnValueIIKb72k };
		const _graphhHw0qK5 = {
			"isDirected": _isDirected6uutWh,
		"getAllEdges": _getAllEdgesFqjylyz,
		"getAllVertices": _getAllVerticesAV6NEn3
	}
		const _returnValuePkpHoJt = await kruskal(_graphhHw0qK5)
	});

	it('test for kruskal', async () => {
		const _isDirectedo42pqKy = undefined;
		const _returnValueZJT0BZ8 = "xW3nJV9zrqXjS41NSPNYGxFj7KrgkYkgtFZb6";
		const _getAllEdgesrHeFxLy = () => { return _returnValueZJT0BZ8 };
		const _returnValuedsbKm0L = 8.65480407888575;
		const _getAllVerticesZ7JDGXW = () => { return _returnValuedsbKm0L };
		const _graphQIrc8a9 = {
			"isDirected": _isDirectedo42pqKy,
		"getAllEdges": _getAllEdgesrHeFxLy,
		"getAllVertices": _getAllVerticesZ7JDGXW
	}
		const _returnValueblvEgo = await kruskal(_graphQIrc8a9)
	});
})