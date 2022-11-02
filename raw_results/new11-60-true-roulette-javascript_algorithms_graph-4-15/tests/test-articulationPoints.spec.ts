export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _graph2aVrSB = "yxXBOxVveml3aORkonQEDNfvKKtXSejFk2ICuiZgbLvqAiTlIUpBzFlTUxjlMBqmr";
		const _returnValueUouMUBP = await articulationPoints(_graph2aVrSB)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedejr6SS6 = true;
		const _graphh3DiF0E = new Graph(_isDirectedejr6SS6)
		const _arrayValuen5i3tg = true;
		const _arrayValueftu8JYN = true;
		const _arrayValueJcr4xHU = [_arrayValuen5i3tg, _arrayValueftu8JYN]
		const _returnValueJ2AwQwJ = [_arrayValueJcr4xHU]
		const _getKeyO1c80ub = () => { return _returnValueJ2AwQwJ };
		const _newVertexWeUqZpI = {
			"getKey": _getKeyO1c80ub
	}
		const _returnValuetdD0ycf = await _graphh3DiF0E.addVertex(_newVertexWeUqZpI)
		const _returnValuezPvxTZe = await _graphh3DiF0E.getAllVertices()
		const _returnValueTUhPgXN = await _graphh3DiF0E.getAllEdges()
		const _returnValue7R3FsX = await _graphh3DiF0E.getVerticesIndices()
		const _returnValuejzLDgxV = await articulationPoints(_graphh3DiF0E)
	});
})