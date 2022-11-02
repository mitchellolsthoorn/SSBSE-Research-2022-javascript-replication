export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _arrayValuebZycXqE = undefined;
		const _arrayValueeUWT06R = undefined;
		const _arrayValuebkLoQpL = {
		
	}
		const _arrayValuelzsyBsN = {
		
	}
		const _arrayValueBpJSY2h = [_arrayValuebZycXqE, _arrayValueeUWT06R, _arrayValuebkLoQpL, _arrayValuelzsyBsN]
		const _arrayValueDmXggh = null;
		const _arrayValueVf1SXfK = "iuM9Lol5vwSMKe76gM2ymePKDVjoloSJZSnYKzGbA39KeFeXWfkREtbdzk2G2GRtnCruaqOK0s5IHEpN57Lh2ZkNvWfefBLi";
		const _graphSF2H041 = [_arrayValueBpJSY2h, _arrayValueDmXggh, _arrayValueVf1SXfK]
		const _returnValueZfFDTxc = await kruskal(_graphSF2H041)
	});

	it('test for kruskal', async () => {
		const _isDirectedwoLwUWR = true;
		const _returnValueuoiN8qH = 6.93935200692659;
		const _getAllEdgesr7qRlxL = () => { return _returnValueuoiN8qH };
		const _arrayValueBOaan0c = undefined;
		const _arrayValueVZIA5pF = 7.16431336429644;
		const _getAllVerticesRqnTOOD = [_arrayValueBOaan0c, _arrayValueVZIA5pF]
		const _graphhDXXBR9 = {
			"isDirected": _isDirectedwoLwUWR,
		"getAllEdges": _getAllEdgesr7qRlxL,
		"getAllVertices": _getAllVerticesRqnTOOD
	}
		const _returnValueRkgQ7re = await kruskal(_graphhDXXBR9)
	});

	it('test for kruskal', async () => {
		const _isDirectedjqkMokT = undefined;
		const _returnValuerro1LI3 = "oGkvyDL29RNhCJF8QyHlytaDUgLFxNUVk2X";
		const _getAllEdgescHqAhAu = () => { return _returnValuerro1LI3 };
		const _returnValueUG3Meck = undefined;
		const _getAllVerticesBsTaFf = () => { return _returnValueUG3Meck };
		const _graphGcBuE3h = {
			"isDirected": _isDirectedjqkMokT,
		"getAllEdges": _getAllEdgescHqAhAu,
		"getAllVertices": _getAllVerticesBsTaFf
	}
		const _returnValueKA0yqEy = await kruskal(_graphGcBuE3h)
	});
})