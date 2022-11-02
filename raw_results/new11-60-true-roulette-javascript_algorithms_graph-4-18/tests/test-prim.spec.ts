export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _graphI87xldg = "1E8iSr5KNMact3QyFhWw3M5eZgP77nxQXEgi6lMzKHcCD5ctUFeu5";
		const _returnValueaqFVnWP = await prim(_graphI87xldg)
	});

	it('test for prim', async () => {
		const _isDirectedvNfIXFG = true;
		const _graphT5irske = new Graph(_isDirectedvNfIXFG)
		const _returnValuenExwHiw = await _graphT5irske.getAdjacencyMatrix()
		const _returnValueID7m8Jr = await _graphT5irske.getAllVertices()
		const _returnValueOSwYJNE = await prim(_graphT5irske)
	});

	it('test for prim', async () => {
		const _isDirectedHBLAkcf = false;
		const _graphuBUmiym = new Graph(_isDirectedHBLAkcf)
		const _returnValueegMMzfb = await _graphuBUmiym.getAllVertices()
		const _returnValueX6mBT5g = "HwK2W73creuF8tVy4xXtaG3wFyRXKRLjSvzoB48OtnOSiogjYkQURXiXYFuuQLtwkw4xwYtdsRmxroIktHCPOkICuERsK";
		const _getKeyY42D7QT = () => { return _returnValueX6mBT5g };
		const _newVertexyaBodu4 = {
			"getKey": _getKeyY42D7QT
	}
		const _returnValueuFzl3FN = await _graphuBUmiym.addVertex(_newVertexyaBodu4)
		const _returnValue0ZMVCb = await _graphuBUmiym.reverse()
		const _returnValuee2CoBYl = await prim(_graphuBUmiym)
	});

	it('test for prim', async () => {
		const _isDirectedlZkKVum = false;
		const _graphuMl4wja = new Graph(_isDirectedlZkKVum)
		const _valuevHZNi0a = {
		
	}
		const _newVertexKpnShFi = new GraphVertex(_valuevHZNi0a)
		const _arrayValueTlpAyG5 = undefined;
		const _arrayValuemOPs3Q = 6.689317598077853;
		const _arrayValueu5RFJW8 = undefined;
		const _edgeKyHehbI = [_arrayValueTlpAyG5, _arrayValuemOPs3Q, _arrayValueu5RFJW8]
		const _returnValuexCsi4RP = await _newVertexKpnShFi.deleteEdge(_edgeKyHehbI)
		const _edgerF3kZam = true;
		const _returnValueqTCGwpo = await _newVertexKpnShFi.deleteEdge(_edgerF3kZam)
		const _returnValuet57NYZq = await _newVertexKpnShFi.getNeighbors()
		const _edgeY2S3nXw = 4.712224359602985;
		const _returnValuei7ggpu1 = await _newVertexKpnShFi.deleteEdge(_edgeY2S3nXw)
		const _returnValuegPa3WTS = await _graphuMl4wja.addVertex(_newVertexKpnShFi)
		const _returnValueiQicvWf = await _graphuMl4wja.getAllEdges()
		const _returnValuepv4miaZ = await _graphuMl4wja.reverse()
		const _returnValueHM1hwPK = await prim(_graphuMl4wja)
	});
})