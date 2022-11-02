export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValue8keTPo = {
		
	}
		const _getAllVerticesfUNxskR = () => { return _returnValue8keTPo };
		const _graphHgSPRaC = {
			"getAllVertices": _getAllVerticesfUNxskR
	}
		const _returnValuehwclLjV = await articulationPoints(_graphHgSPRaC)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedRTluYLK = false;
		const _graphlFNFDv1 = new Graph(_isDirectedRTluYLK)
		const _returnValueO5iiMXK = await _graphlFNFDv1.toString()
		const _returnValueqKm5JBF = undefined;
		const _getKeyT9UZ1Ly = () => { return _returnValueqKm5JBF };
		const _newVertexBfYvIxv = {
			"getKey": _getKeyT9UZ1Ly
	}
		const _returnValueTRA9cte = await _graphlFNFDv1.addVertex(_newVertexBfYvIxv)
		const _returnValueULueE3f = await articulationPoints(_graphlFNFDv1)
	});
})