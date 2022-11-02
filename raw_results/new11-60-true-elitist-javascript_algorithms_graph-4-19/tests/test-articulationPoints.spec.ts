export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _arrayValuemTjcfMv = false;
		const _arrayValueqlMU6dF = "2veNCVHkM";
		const _arrayValuesRWpjw9 = true;
		const _getAllVerticesG9BEEiL = [_arrayValuemTjcfMv, _arrayValueqlMU6dF, _arrayValuesRWpjw9]
		const _graphz7jURa8 = {
			"getAllVertices": _getAllVerticesG9BEEiL
	}
		const _returnValuenMO1fT = await articulationPoints(_graphz7jURa8)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedQ2rlwa = false;
		const _graphHqW79uh = new Graph(_isDirectedQ2rlwa)
		const _arrayValueExxrHlL = undefined;
		const _returnValueuJek33m = [_arrayValueExxrHlL]
		const _getKeytLtzHZJ = () => { return _returnValueuJek33m };
		const _newVertexq1oDsjW = {
			"getKey": _getKeytLtzHZJ
	}
		const _returnValuerBwXte0 = await _graphHqW79uh.addVertex(_newVertexq1oDsjW)
		const _returnValuePGb38S9 = null;
		const _getKeyIV8R3oz = () => { return _returnValuePGb38S9 };
		const _newVertexZiCA5SW = {
			"getKey": _getKeyIV8R3oz
	}
		const _returnValueGp6xed = await _graphHqW79uh.addVertex(_newVertexZiCA5SW)
		const _returnValuemD41f9i = await articulationPoints(_graphHqW79uh)
	});
})