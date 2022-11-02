export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueoNEUM0I = null;
		const _getAllVerticesFZ0JWG = () => { return _returnValueoNEUM0I };
		const _returnValuegmhLh01 = false;
		const _getAllEdgesLV7EvMs = () => { return _returnValuegmhLh01 };
		const _graphEg5xM5i = {
			"getAllVertices": _getAllVerticesFZ0JWG,
		"getAllEdges": _getAllEdgesLV7EvMs
	}
		const _returnValuee38xv3u = await detectUndirectedCycleUsingDisjointSet(_graphEg5xM5i)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueZ1A25TE = []
		const _getAllVerticesY3HBQQ = () => { return _returnValueZ1A25TE };
		const _returnValuewpl69J1 = undefined;
		const _getAllEdgesi2qsuV3 = () => { return _returnValuewpl69J1 };
		const _graphTbyPGtd = {
			"getAllVertices": _getAllVerticesY3HBQQ,
		"getAllEdges": _getAllEdgesi2qsuV3
	}
		const _returnValueqypQZut = await detectUndirectedCycleUsingDisjointSet(_graphTbyPGtd)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueNj7LH5X = []
		const _getAllVertices2DQj6n = () => { return _returnValueNj7LH5X };
		const _arrayValuepKP3u35 = "RI7uwxPBX9l4Q6qVouFSC1FwRVhJSPA0fwclTikmJqGtVvDLr4m6EdLaf7ptswJblfIJi8AcSQlSUe3JMd4Xawp6iy";
		const _arrayValueK8cV4GC = true;
		const _arrayValueN6d0kwe = undefined;
		const _arrayValuebmcKBnY = -6.989728643121849;
		const _arrayValueJmP726W = [_arrayValuebmcKBnY]
		const _returnValueEX19ZHo = [_arrayValuepKP3u35, _arrayValueK8cV4GC, _arrayValueN6d0kwe, _arrayValueJmP726W]
		const _getAllEdgesAZDChS5 = () => { return _returnValueEX19ZHo };
		const _graphpEFccN = {
			"getAllVertices": _getAllVertices2DQj6n,
		"getAllEdges": _getAllEdgesAZDChS5
	}
		const _returnValueDfnt47G = await detectUndirectedCycleUsingDisjointSet(_graphpEFccN)
	});
})