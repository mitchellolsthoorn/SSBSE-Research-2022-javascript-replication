export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueDN8pqUo = -4.167735245394635;
		const _getAllVerticesRpTPYDW = () => { return _returnValueDN8pqUo };
		const _graphMM6ufU0 = {
			"getAllVertices": _getAllVerticesRpTPYDW
	}
		const _returnValueLSnE6sx = await articulationPoints(_graphMM6ufU0)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedVbDTsAc = false;
		const _graphroaZSp = new Graph(_isDirectedVbDTsAc)
		const _vertexKeykrzJA9P = "dBrecLXC75Y68iv9JQxyGdgrstgYHd";
		const _returnValueI82W7xX = await _graphroaZSp.getVertexByKey(_vertexKeykrzJA9P)
		const _returnValueh8hOmXc = null;
		const _getKeyTJmpBQa = () => { return _returnValueh8hOmXc };
		const _newVertexof3YTif = {
			"getKey": _getKeyTJmpBQa
	}
		const _returnValuekaNeHYA = await _graphroaZSp.addVertex(_newVertexof3YTif)
		const _returnValuePSrME3e = await articulationPoints(_graphroaZSp)
	});
})