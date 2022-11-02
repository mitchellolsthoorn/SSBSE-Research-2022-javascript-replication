export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedgztpttK = "P0TaiaOlsypSfj4YJM96P3NdFK718DW3UeVTh6bjOUunr9nxybIwhigNb419OLP4oq4NIUPT1s8R42V4t9S";
		const _returnValueNASSkSS = 6.787746773917981;
		const _getAllEdgesCNu1ztn = () => { return _returnValueNASSkSS };
		const _returnValueSBD7XtW = -5.814763872795532;
		const _getAllVerticeshAlE6TS = () => { return _returnValueSBD7XtW };
		const _graphk6Fo3zO = {
			"isDirected": _isDirectedgztpttK,
		"getAllEdges": _getAllEdgesCNu1ztn,
		"getAllVertices": _getAllVerticeshAlE6TS
	}
		const _returnValueO8Iknxe = await kruskal(_graphk6Fo3zO)
	});

	it('test for kruskal', async () => {
		const _isDirecteddGSze6b = undefined;
		const _returnValueCe2CMC = "brQrzUWZL";
		const _getAllEdgesedjcw0d = () => { return _returnValueCe2CMC };
		const _returnValueUDJKzVn = "B63rWfFroLgouMPpgDDaP4jLgZo71zluk2D6ay3dtoul12oHHePUI2UY5rWvfgkFQ2";
		const _getAllVerticesmodvSw1 = () => { return _returnValueUDJKzVn };
		const _graphAeMQ5Xr = {
			"isDirected": _isDirecteddGSze6b,
		"getAllEdges": _getAllEdgesedjcw0d,
		"getAllVertices": _getAllVerticesmodvSw1
	}
		const _returnValueQz69x9d = await kruskal(_graphAeMQ5Xr)
	});
})