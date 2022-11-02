export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValuevH2q2nf = undefined;
		const _getAllVerticesB4LYKVb = () => { return _returnValuevH2q2nf };
		const _arrayValueyHezo5O = true;
		const _arrayValueXsfAmCq = false;
		const _returnValuehJDjhiC = [_arrayValueyHezo5O, _arrayValueXsfAmCq]
		const _getVertexByKey3JWhFS = () => { return _returnValuehJDjhiC };
		const _returnValueVw3us2C = 6.248191152840331;
		const _getNeighborsMg6F0Jg = () => { return _returnValueVw3us2C };
		const _returnValuecyPQ4FY = true;
		const _findEdgezbNHCBp = () => { return _returnValuecyPQ4FY };
		const _graph3UF2Xm = {
			"getAllVertices": _getAllVerticesB4LYKVb,
		"getVertexByKey": _getVertexByKey3JWhFS,
		"getNeighbors": _getNeighborsMg6F0Jg,
		"findEdge": _findEdgezbNHCBp
	}
		const _returnValueR8rXppE = 4.542258531202165;
		const _getKeyHhLOjMm = () => { return _returnValueR8rXppE };
		const _startVertexAK0Sd0I = {
			"getKey": _getKeyHhLOjMm
	}
		const _returnValueeMGQlHu = await bellmanFord(_graph3UF2Xm, _startVertexAK0Sd0I)
	});

	it('test for bellmanFord', async () => {
		const _returnValuepmy1Clf = []
		const _getAllVerticesFUOpFer = () => { return _returnValuepmy1Clf };
		const _returnValuec9qiutJ = -1.0777984810639971;
		const _getVertexByKeyubJagxh = () => { return _returnValuec9qiutJ };
		const _arrayValueSg1CbbF = undefined;
		const _arrayValuexlzjSo3 = "lHxqHxeCPVtUnQExfYaP5x8f7W1VB6crtrGMopdpXVWzDtczR9SoIUedgypaB3PGotUYXhHNtB1wOD46IMe7OEDp";
		const _arrayValuePQSfvWZ = undefined;
		const _arrayValuexzvSnZM = [_arrayValuePQSfvWZ]
		const _arrayValueMQhvdb3 = false;
		const _returnValuek3WceGc = [_arrayValueSg1CbbF, _arrayValuexlzjSo3, _arrayValuexzvSnZM, _arrayValueMQhvdb3]
		const _returnValueCOGxof1 = () => { return _returnValuek3WceGc };
		const _getNeighborsGFX6Gnt = () => { return _returnValueCOGxof1 };
		const _findEdgeQdFAz9X = "8RqTaW5iloDFv24v1HzF2PhrPC";
		const _graphbDOYSwK = {
			"getAllVertices": _getAllVerticesFUOpFer,
		"getVertexByKey": _getVertexByKeyubJagxh,
		"getNeighbors": _getNeighborsGFX6Gnt,
		"findEdge": _findEdgeQdFAz9X
	}
		const _returnValuelIBySbt = undefined;
		const _returnValuezMSU28Y = () => { return _returnValuelIBySbt };
		const _getKeyo82ZXDd = () => { return _returnValuezMSU28Y };
		const _startVertexmLxcL6X = {
			"getKey": _getKeyo82ZXDd
	}
		const _returnValuehw4ihuz = await bellmanFord(_graphbDOYSwK, _startVertexmLxcL6X)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedVTEv1s = true;
		const _graphmXHlxMH = new Graph(_isDirectedVTEv1s)
		const _returnValueCCV1s4q = 5.681478966190257;
		const _getKeyhCxuLKF = () => { return _returnValueCCV1s4q };
		const _newVertexTrZVbQW = {
			"getKey": _getKeyhCxuLKF
	}
		const _returnValueBqN9h5F = await _graphmXHlxMH.addVertex(_newVertexTrZVbQW)
		const _returnValuescmN9zH = null;
		const _getKeyEANk5Ma = () => { return _returnValuescmN9zH };
		const _startVertexuPIBhn = {
			"getKey": _getKeyEANk5Ma
	}
		const _returnValueMW2ABLb = await bellmanFord(_graphmXHlxMH, _startVertexuPIBhn)
	});
})