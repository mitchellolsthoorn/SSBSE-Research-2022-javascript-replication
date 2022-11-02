export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueB5UqDqv = undefined;
		const _getAllVerticesH6Bhhz1 = () => { return _returnValueB5UqDqv };
		const _arrayValueKscYjDS = null;
		const _arrayValueSdHdPBd = undefined;
		const _returnValueF7zcoSR = undefined;
		const _arrayValuezUq3AF = () => { return _returnValueF7zcoSR };
		const _returnValuepX7ZCI9 = [_arrayValueKscYjDS, _arrayValueSdHdPBd, _arrayValuezUq3AF]
		const _findEdgeYgdN0Jt = () => { return _returnValuepX7ZCI9 };
		const _graphC7jh1rO = {
			"getAllVertices": _getAllVerticesH6Bhhz1,
		"findEdge": _findEdgeYgdN0Jt
	}
		const _returnValueFkzaaZS = await graphBridges(_graphC7jh1rO)
	});

	it('test for graphBridges', async () => {
		const _isDirectedA4eXCPJ = true;
		const _graphkPTFAm = new Graph(_isDirectedA4eXCPJ)
		const _vertexKeyKBBloAZ = true;
		const _returnValueF3A31sw = await _graphkPTFAm.getVertexByKey(_vertexKeyKBBloAZ)
		const _arrayValueMLTzaEE = false;
		const _arrayValueUuvcJRK = -6.734235329253337;
		const _returnValuedzYCUBp = [_arrayValueMLTzaEE, _arrayValueUuvcJRK]
		const _getKeyFY15kJd = () => { return _returnValuedzYCUBp };
		const _newVertexZ2CiCAu = {
			"getKey": _getKeyFY15kJd
	}
		const _returnValueyPFgNdd = await _graphkPTFAm.addVertex(_newVertexZ2CiCAu)
		const _returnValueBjjQZXE = await _graphkPTFAm.reverse()
		const _returnValuexyJ7uc3 = await graphBridges(_graphkPTFAm)
	});
})