export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _getAllEdgesXu2u2B = {
		
	}
		const _getAllVerticesmN31J4R = null;
		const _returnValueOK9qIbu = 2.3571581488196873;
		const _deleteEdgeyPRhLO7 = () => { return _returnValueOK9qIbu };
		const _graphffPtfG = {
			"getAllEdges": _getAllEdgesXu2u2B,
		"getAllVertices": _getAllVerticesmN31J4R,
		"deleteEdge": _deleteEdgeyPRhLO7
	}
		const _returnValuemNAxo2L = await eulerianPath(_graphffPtfG)
	});

	it('test for eulerianPath', async () => {
		const _returnValueRno5RW6 = []
		const _getAllEdgeszaGj8Mh = () => { return _returnValueRno5RW6 };
		const _arrayValuerReMice = undefined;
		const _returnValueLojA2qo = [_arrayValuerReMice]
		const _getAllVerticesEYAmD1Q = () => { return _returnValueLojA2qo };
		const _returnValuexkOBUbZ = -2.8009717613619847;
		const _deleteEdgezMcUa9 = () => { return _returnValuexkOBUbZ };
		const _graphUtvUnyz = {
			"getAllEdges": _getAllEdgeszaGj8Mh,
		"getAllVertices": _getAllVerticesEYAmD1Q,
		"deleteEdge": _deleteEdgezMcUa9
	}
		const _returnValueM0Nppn4 = await eulerianPath(_graphUtvUnyz)
	});
})