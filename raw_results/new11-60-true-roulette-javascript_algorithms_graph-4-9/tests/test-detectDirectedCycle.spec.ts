export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueMSTxp8y = "byd12Xbas7ie8zeP3lCFWEXxrBTln6";
		const _getAllVerticesI2WaeLU = () => { return _returnValueMSTxp8y };
		const _graphG7ip8Hc = {
			"getAllVertices": _getAllVerticesI2WaeLU
	}
		const _returnValuesnOHEE = await detectDirectedCycle(_graphG7ip8Hc)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedsiTiAEg = "IFtq9Cmkqf68QGzHatZnSVsOdYIXGgRPYu74XssKTuSGq1zUQRs9BXkzw21w2AAtibraE9OKShiCmPu2Rz";
		const _graphGOn8HtC = new Graph(_isDirectedsiTiAEg)
		const _returnValueBYXH192 = await _graphGOn8HtC.getWeight()
		const _returnValueidaH1Ku = await _graphGOn8HtC.getAdjacencyMatrix()
		const _returnValueWrqbpdC = await _graphGOn8HtC.getVerticesIndices()
		const _returnValueXqN5pcC = await _graphGOn8HtC.getAllEdges()
		const _returnValueQ1faSrk = await _graphGOn8HtC.getAdjacencyMatrix()
		const _returnValueN3fyL0K = await detectDirectedCycle(_graphGOn8HtC)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedOX1oebl = true;
		const _graphXxDq2Q = new Graph(_isDirectedOX1oebl)
		const _valuekXzDO5H = null;
		const _returnValuehEagqM9 = true;
		const _keyCallbackww2R7yP = () => { return _returnValuehEagqM9 };
		const _newVertexyNfRlET = new DisjointSetItem(_valuekXzDO5H, _keyCallbackww2R7yP)
		const _returnValuefSHlF9D = await _newVertexyNfRlET.getRank()
		const _returnValueBpmsff6 = await _newVertexyNfRlET.getKey()
		const _returnValueebRrXe = await _graphXxDq2Q.addVertex(_newVertexyNfRlET)
		const _returnValuePnl9PWN = await detectDirectedCycle(_graphXxDq2Q)
	});
})