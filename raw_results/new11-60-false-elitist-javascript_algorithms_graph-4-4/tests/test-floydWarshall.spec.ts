export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValuevkLWypX = undefined;
		const _getAllVerticesh46JTTL = () => { return _returnValuevkLWypX };
		const _returnValueF4eM0e = 1.3219415979652105;
		const _findEdgemmxiK6r = () => { return _returnValueF4eM0e };
		const _graphmq2AoWI = {
			"getAllVertices": _getAllVerticesh46JTTL,
		"findEdge": _findEdgemmxiK6r
	}
		const _returnValueWZSthV = await floydWarshall(_graphmq2AoWI)
	});

	it('test for floydWarshall', async () => {
		const _returnValuenPPLOzJ = "48s8wQobvWCqg6jeKxMviQCHdR75ChJ0XR3Sm6ToXC7TzUfDFZpJ7pCGLCV";
		const _getAllVerticesoeK5qPC = () => { return _returnValuenPPLOzJ };
		const _returnValuebArvgPe = false;
		const _findEdgebJUKXQ6 = () => { return _returnValuebArvgPe };
		const _graphfIuG9be = {
			"getAllVertices": _getAllVerticesoeK5qPC,
		"findEdge": _findEdgebJUKXQ6
	}
		const _returnValueQm0mts = await floydWarshall(_graphfIuG9be)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuel7nC8ka = 5.244291110380967;
		const _arrayValuexLehNI8 = "IWb8e6eq0kOLIMioWCKQsmH0faTRy3PSgq93lFdSFw7lVK2LIdJNrTYLlgTRzWD";
		const _arrayValueVpKJBw = [_arrayValuexLehNI8]
		const _arrayValuebp9Yk5W = 1.7433350323039392;
		const _arrayValueHFevcXx = "IbIAFRtWcVMCCBMaqnpt70mcGhvoRsDLpQOGTywOBSTOJBARgnaZInzunSm";
		const _arrayValueFWVSkzK = [_arrayValueVpKJBw, _arrayValuebp9Yk5W, _arrayValueHFevcXx]
		const _arrayValueUdI4tSx = null;
		const _returnValuedelF2j8 = [_arrayValuel7nC8ka, _arrayValueFWVSkzK, _arrayValueUdI4tSx]
		const _getAllVerticesRKU3TL = () => { return _returnValuedelF2j8 };
		const _returnValuev7DAJnS = "iNwC9obwblV5tNpGt9JWt0pUrRKK4ksAoDlsBD3gpP2j1kZCjMraTP9vBtzPnaPMFqCA1XGVKiWuavcU46psizEk";
		const _findEdgeypbsFgI = () => { return _returnValuev7DAJnS };
		const _graphhkO1Hx = {
			"getAllVertices": _getAllVerticesRKU3TL,
		"findEdge": _findEdgeypbsFgI
	}
		const _returnValuerBniNrM = await floydWarshall(_graphhkO1Hx)
	});
})