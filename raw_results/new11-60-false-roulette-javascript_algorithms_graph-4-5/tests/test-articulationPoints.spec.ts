export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _arrayValuekYljrDZ = -2.0091881301959704;
		const _arrayValueJGOp4P = "FdgaUggPAir3VUmiOipnSsmmtJjzddsIx";
		const _returnValueBaxdOSR = [_arrayValuekYljrDZ, _arrayValueJGOp4P]
		const _getAllVerticesnWhC5QO = () => { return _returnValueBaxdOSR };
		const _graphWJBug3K = {
			"getAllVertices": _getAllVerticesnWhC5QO
	}
		const _returnValueBHOA7VN = await articulationPoints(_graphWJBug3K)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedVuKtwMp = true;
		const _graphyA7VKaE = new Graph(_isDirectedVuKtwMp)
		const _returnValuer5B1GGN = await _graphyA7VKaE.getAllVertices()
		const _valueoIHOlM = "srJfBYOqw6lG2x6TnYYVP1FQDg0DKiTXktbeH4bVCYaFDPadElzggnw9dX2eqCL3RtWXxh8ilzdNphMAP";
		const _returnValueB1i1Y5N = true;
		const _keyCallbackEjUdbvk = () => { return _returnValueB1i1Y5N };
		const _newVertexBbyU0B1 = new DisjointSetItem(_valueoIHOlM, _keyCallbackEjUdbvk)
		const _returnValueNIend4 = await _newVertexBbyU0B1.getRoot()
		const _returnValueHVacE4A = await _graphyA7VKaE.addVertex(_newVertexBbyU0B1)
		const _returnValuenE1UDvd = await _graphyA7VKaE.reverse()
		const _returnValuewlNz0qp = await _graphyA7VKaE.reverse()
		const _returnValueI6RHyFv = await articulationPoints(_graphyA7VKaE)
	});
})