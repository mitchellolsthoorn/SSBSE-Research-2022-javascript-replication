export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValuesjd3c71 = "iAVTbucP5zHJeB5";
		const _getAllVerticesAbI0gx = () => { return _returnValuesjd3c71 };
		const _grapheJB3HY = {
			"getAllVertices": _getAllVerticesAbI0gx
	}
		const _returnValueecSaF1P = await articulationPoints(_grapheJB3HY)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedUM71ede = undefined;
		const _graphJDmb6Uv = new Graph(_isDirectedUM71ede)
		const _returnValueaRILX65 = await _graphJDmb6Uv.reverse()
		const _returnValueuomY6r = null;
		const _getKeyIxtL5Xf = () => { return _returnValueuomY6r };
		const _newVertex1k4Xqb = {
			"getKey": _getKeyIxtL5Xf
	}
		const _returnValuestrk5H = await _graphJDmb6Uv.addVertex(_newVertex1k4Xqb)
		const _returnValueZw6Qjtq = await _graphJDmb6Uv.getAllVertices()
		const _returnValuenSjpp9C = await articulationPoints(_graphJDmb6Uv)
	});
})