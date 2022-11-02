export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValuev6lWEjC = null;
		const _arrayValueJH8EBy = () => { return _returnValuev6lWEjC };
		const _arrayValueMRBam4E = true;
		const _arrayValue8yU7Hy = undefined;
		const _returnValueCayImkm = [_arrayValueJH8EBy, _arrayValueMRBam4E, _arrayValue8yU7Hy]
		const _graphoQxlEpB = () => { return _returnValueCayImkm };
		const _returnValuePZKmCOf = await articulationPoints(_graphoQxlEpB)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedwELQSkC = false;
		const _graphUPbacTM = new Graph(_isDirectedwELQSkC)
		const _returnValueJn8SiK9 = await _graphUPbacTM.getVerticesIndices()
		const _returnValueILzmiFA = await _graphUPbacTM.getVerticesIndices()
		const _returnValueCWJxzrf = await _graphUPbacTM.getAllEdges()
		const _returnValuehOMQ05O = await _graphUPbacTM.reverse()
		const _returnValueO5Q7VSK = null;
		const _getKeyXtXDqvM = () => { return _returnValueO5Q7VSK };
		const _newVertexaaEya6m = {
			"getKey": _getKeyXtXDqvM
	}
		const _returnValueQTqkcRI = await _graphUPbacTM.addVertex(_newVertexaaEya6m)
		const _returnValue1VcsRa = await articulationPoints(_graphUPbacTM)
	});
})