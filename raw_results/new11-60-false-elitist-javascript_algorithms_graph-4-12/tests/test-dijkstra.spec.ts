export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueTPuJb3V = 5.4483959131361726;
		const _getAllVerticesAycxL1r = () => { return _returnValueTPuJb3V };
		const _returnValued41D89x = -0.021369733248883804;
		const _findEdgezKrZhRr = () => { return _returnValued41D89x };
		const _graphPmf9Qd = {
			"getAllVertices": _getAllVerticesAycxL1r,
		"findEdge": _findEdgezKrZhRr
	}
		const _returnValueI7HmQfD = null;
		const _getKeyDv041LP = () => { return _returnValueI7HmQfD };
		const _startVertexzYRlsoz = {
			"getKey": _getKeyDv041LP
	}
		const _returnValueKioTET0 = await dijkstra(_graphPmf9Qd, _startVertexzYRlsoz)
	});

	it('test for dijkstra', async () => {
		const _returnValuewJZoEwh = []
		const _getAllVerticesqUaGV5S = () => { return _returnValuewJZoEwh };
		const _arrayValueHnU9ZyZ = undefined;
		const _arrayValueECodta = "9Eo5t4AZHQUSvohQnn2mFwDTqF52IU3zBteqM0PskjI9RSXUtPm6k3MoBrWdWTBE";
		const _findEdgeiVEfub = [_arrayValueHnU9ZyZ, _arrayValueECodta]
		const _graphOLy6Ekg = {
			"getAllVertices": _getAllVerticesqUaGV5S,
		"findEdge": _findEdgeiVEfub
	}
		const _returnValueClsKbHs = "22GjeUoBL5843uOKcekL3qDZUTXQAYi89OCGWi3TOoM";
		const _returnValuejQKbsFT = () => { return _returnValueClsKbHs };
		const _getKeynZCsaAk = () => { return _returnValuejQKbsFT };
		const _startVertexHvC3aq = {
			"getKey": _getKeynZCsaAk
	}
		const _returnValuez3RVdR = await dijkstra(_graphOLy6Ekg, _startVertexHvC3aq)
	});
})