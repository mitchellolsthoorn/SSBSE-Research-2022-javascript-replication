export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedTbWMivJ = "TNPD7eDNwhbib2ogCIhCh9aRwMywut2PwAt6Qj5nRl6RP9nk3XhoNLlPn9m1hwuOx2ttQeJl0MdKpDsGskDvPaj75RpB";
		const _arrayValueGr7nBkT = null;
		const _arrayValuemmlGXso = null;
		const _arrayValuelsHbspT = null;
		const _returnValuecNS5bgc = [_arrayValueGr7nBkT, _arrayValuemmlGXso, _arrayValuelsHbspT]
		const _getAllEdgesMzFGfhJ = () => { return _returnValuecNS5bgc };
		const _arrayValueKoEa2jV = 8.863683407991164;
		const _arrayValuedP10QZS = -6.645886696756975;
		const _returnValuekRrnltZ = [_arrayValueKoEa2jV, _arrayValuedP10QZS]
		const _getAllVerticesXxeakwt = () => { return _returnValuekRrnltZ };
		const _graphDIuYfOI = {
			"isDirected": _isDirectedTbWMivJ,
		"getAllEdges": _getAllEdgesMzFGfhJ,
		"getAllVertices": _getAllVerticesXxeakwt
	}
		const _returnValued5kM88m = await kruskal(_graphDIuYfOI)
	});

	it('test for kruskal', async () => {
		const _isDirectedblW06pK = null;
		const _arrayValuebRh4X5a = "GUTsezV5g7IDN";
		const _arrayValueBL50Xrh = null;
		const _arrayValueoprgqhT = "6FBEdT2TpzgR6eUcPrAzFLXdfqR6aOBDEP5zzXymcKlG";
		const _arrayValueqGk8T5e = [_arrayValueBL50Xrh, _arrayValueoprgqhT]
		const _arrayValueDnqGBo = undefined;
		const _arrayValueLfl62og = 9.58193974703606;
		const _arrayValueF0lXHX = [_arrayValueqGk8T5e, _arrayValueDnqGBo, _arrayValueLfl62og]
		const _returnValuehEs1Mf = [_arrayValuebRh4X5a, _arrayValueF0lXHX]
		const _getAllEdgesDfd80H9 = () => { return _returnValuehEs1Mf };
		const _returnValue9LGRF8 = -9.321368822515378;
		const _getAllVerticesC5lJVQ = () => { return _returnValue9LGRF8 };
		const _graphsaxNT6G = {
			"isDirected": _isDirectedblW06pK,
		"getAllEdges": _getAllEdgesDfd80H9,
		"getAllVertices": _getAllVerticesC5lJVQ
	}
		const _returnValuetUMsni0 = await kruskal(_graphsaxNT6G)
	});
})