export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedaEZgEx4 = true;
		const _arrayValuetkz0L8R = undefined;
		const _arrayValueAFIJGDr = undefined;
		const _arrayValueqYKmL78 = {
		
	}
		const _returnValueZKn4LdR = [_arrayValuetkz0L8R, _arrayValueAFIJGDr, _arrayValueqYKmL78]
		const _getAllEdgesNFaylhR = () => { return _returnValueZKn4LdR };
		const _arrayValuemFryBbw = 6.997311234169111;
		const _arrayValueaQh9sH = null;
		const _arrayValuejMJ85ug = undefined;
		const _arrayValueBfQtScM = {
		
	}
		const _returnValueocJ3P7w = [_arrayValuemFryBbw, _arrayValueaQh9sH, _arrayValuejMJ85ug, _arrayValueBfQtScM]
		const _getAllVerticesqMVGNyd = () => { return _returnValueocJ3P7w };
		const _graphHkRziKr = {
			"isDirected": _isDirectedaEZgEx4,
		"getAllEdges": _getAllEdgesNFaylhR,
		"getAllVertices": _getAllVerticesqMVGNyd
	}
		const _returnValuehWuxTY3 = await kruskal(_graphHkRziKr)
	});

	it('test for kruskal', async () => {
		const _isDirectedMgaVlvD = undefined;
		const _arrayValueJRmLKv4 = []
		const _arrayValueegVUCqa = false;
		const _returnValueF3J3mUI = [_arrayValueJRmLKv4, _arrayValueegVUCqa]
		const _getAllEdgesYuSieIq = () => { return _returnValueF3J3mUI };
		const _returnValueJB9NB8s = "FjcAsEwnH1kNyGctJg8Cwd42Cu88Z8uyJVcPeUgjSNYMuDovfEIT9vuy7uCdzzS1I4HugU4qly";
		const _getAllVerticesYBd1jPu = () => { return _returnValueJB9NB8s };
		const _graphbBuGM0v = {
			"isDirected": _isDirectedMgaVlvD,
		"getAllEdges": _getAllEdgesYuSieIq,
		"getAllVertices": _getAllVerticesYBd1jPu
	}
		const _returnValueOLC5EL7 = await kruskal(_graphbBuGM0v)
	});
})