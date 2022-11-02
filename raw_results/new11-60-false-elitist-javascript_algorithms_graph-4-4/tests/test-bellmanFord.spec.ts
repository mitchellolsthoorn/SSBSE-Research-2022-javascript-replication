export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _arrayValuetYBMSVn = false;
		const _arrayValuepeedDJA = "zhKGcORP2uFe3K8gDLI2X9x5EM0mMCHdHpmsVJoXQLGhs5YYvAsRllcfGKsrVujNdo";
		const _returnValueDA2lCjH = [_arrayValuetYBMSVn, _arrayValuepeedDJA]
		const _getAllVerticesxjX7qCH = () => { return _returnValueDA2lCjH };
		const _returnValueaQRkGR = undefined;
		const _getVertexByKeyLDGWjOa = () => { return _returnValueaQRkGR };
		const _returnValuexAKXVB = {
		
	}
		const _getNeighborsfrLhnHd = () => { return _returnValuexAKXVB };
		const _returnValue8XNOeZ = undefined;
		const _findEdgewraiRjE = () => { return _returnValue8XNOeZ };
		const _graphlFK0u45 = {
			"getAllVertices": _getAllVerticesxjX7qCH,
		"getVertexByKey": _getVertexByKeyLDGWjOa,
		"getNeighbors": _getNeighborsfrLhnHd,
		"findEdge": _findEdgewraiRjE
	}
		const _returnValueTf8MCK9 = undefined;
		const _getKeymbKJnVD = () => { return _returnValueTf8MCK9 };
		const _startVertexTuHEwgU = {
			"getKey": _getKeymbKJnVD
	}
		const _returnValuea0VtzRk = await bellmanFord(_graphlFK0u45, _startVertexTuHEwgU)
	});

	it('test for bellmanFord', async () => {
		const _returnValuex4BiUuS = []
		const _getAllVerticesi7sSgm = () => { return _returnValuex4BiUuS };
		const _returnValueFZKR36g = null;
		const _getVertexByKeyGavz1Cg = () => { return _returnValueFZKR36g };
		const _returnValueCpOeTRs = []
		const _getNeighborsy6unSzG = () => { return _returnValueCpOeTRs };
		const _returnValueOK1ffKx = "axPN09L6Iid0Go3hjx49ezQoEKykelrXqR8KQPwNgHzPVliIjuUL9z";
		const _findEdgeooSStha = () => { return _returnValueOK1ffKx };
		const _graphUK2rCd = {
			"getAllVertices": _getAllVerticesi7sSgm,
		"getVertexByKey": _getVertexByKeyGavz1Cg,
		"getNeighbors": _getNeighborsy6unSzG,
		"findEdge": _findEdgeooSStha
	}
		const _returnValuelKhjGJF = 2.658943358689408;
		const _getKeyNVvuaSw = () => { return _returnValuelKhjGJF };
		const _startVertexKDWKdb = {
			"getKey": _getKeyNVvuaSw
	}
		const _returnValuePrGUwy9 = await bellmanFord(_graphUK2rCd, _startVertexKDWKdb)
	});
})