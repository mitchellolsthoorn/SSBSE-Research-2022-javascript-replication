export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueSDIAJZS = -6.004854752955979;
		const _getAllVerticesrarcyQ4 = () => { return _returnValueSDIAJZS };
		const _graphftJEFbi = {
			"getAllVertices": _getAllVerticesrarcyQ4
	}
		const _returnValueqiN54U2 = await articulationPoints(_graphftJEFbi)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedwwX1XgH = false;
		const _graphc5Wvyp5 = new Graph(_isDirectedwwX1XgH)
		const _returnValueN9QJ1o = await _graphc5Wvyp5.getAllVertices()
		const _returnValuexCT1IB = "sWtrATedekk12QjD875koQVPJQcDiEg5ARDq6DTqeQWvJvyCvLVOV1S02c2Xz2gMjbBDQOR2kV6MQl9QOHKYSChK";
		const _getKeytWVRbN = () => { return _returnValuexCT1IB };
		const _newVertexDVDbS23 = {
			"getKey": _getKeytWVRbN
	}
		const _returnValueEaIV1lE = await _graphc5Wvyp5.addVertex(_newVertexDVDbS23)
		const _returnValueIuWHnFi = await _graphc5Wvyp5.getAllEdges()
		const _returnValueYHS7Nu = await articulationPoints(_graphc5Wvyp5)
	});
})