export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValuegw9DXhH = "VEfGegp4VmA9i";
		const _getAllEdgesvazw3Ps = () => { return _returnValuegw9DXhH };
		const _returnValueqeZXxy = -6.292147410639564;
		const _getAllVerticesVobcAbA = () => { return _returnValueqeZXxy };
		const _returnValueFYlGCxE = undefined;
		const _deleteEdgeGB2hK5w = () => { return _returnValueFYlGCxE };
		const _graphjWzcCq0 = {
			"getAllEdges": _getAllEdgesvazw3Ps,
		"getAllVertices": _getAllVerticesVobcAbA,
		"deleteEdge": _deleteEdgeGB2hK5w
	}
		const _returnValuefxwJTFq = await eulerianPath(_graphjWzcCq0)
	});

	it('test for eulerianPath', async () => {
		const _returnValuex4M5BpS = []
		const _getAllEdgeslgsgpx3 = () => { return _returnValuex4M5BpS };
		const _arrayValuePMNQZQ1 = undefined;
		const _arrayValuevN9J6BY = {
		
	}
		const _arrayValueLRm6rPQ = [_arrayValuePMNQZQ1, _arrayValuevN9J6BY]
		const _arrayValuetfX6sh = "U4kk72";
		const _returnValuefrjkmWm = [_arrayValueLRm6rPQ, _arrayValuetfX6sh]
		const _getAllVerticesgv2eCS0 = () => { return _returnValuefrjkmWm };
		const _returnValueYo4BhOq = -6.0645730071470725;
		const _deleteEdgesNlflMK = () => { return _returnValueYo4BhOq };
		const _graphUGWawq4 = {
			"getAllEdges": _getAllEdgeslgsgpx3,
		"getAllVertices": _getAllVerticesgv2eCS0,
		"deleteEdge": _deleteEdgesNlflMK
	}
		const _returnValuelCuXkuw = await eulerianPath(_graphUGWawq4)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedZCqgEtb = false;
		const _graphQchgDP = new Graph(_isDirectedZCqgEtb)
		const _returnValueDpRpL8x = await _graphQchgDP.getAllVertices()
		const _returnValueRj1YPh1 = await eulerianPath(_graphQchgDP)
	});
})