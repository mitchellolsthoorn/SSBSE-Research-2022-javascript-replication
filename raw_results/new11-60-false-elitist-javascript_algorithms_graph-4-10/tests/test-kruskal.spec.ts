export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedpwZ3qT3 = -3.3309489811803994;
		const _returnValuepuz6JpY = true;
		const _getAllEdgesr2g791A = () => { return _returnValuepuz6JpY };
		const _returnValueG95mb6v = 9.177983119276178;
		const _getAllVerticesbl3Ego = () => { return _returnValueG95mb6v };
		const _graph0digMc = {
			"isDirected": _isDirectedpwZ3qT3,
		"getAllEdges": _getAllEdgesr2g791A,
		"getAllVertices": _getAllVerticesbl3Ego
	}
		const _returnValueFMe3eAs = await kruskal(_graph0digMc)
	});

	it('test for kruskal', async () => {
		const _isDirectedx7pCEnV = undefined;
		const _arrayValuepiNrY0E = "LbtPNOaPhuM95";
		const _arrayValueYJaZCc = -8.5835721889805;
		const _arrayValuesR4G7St = false;
		const _returnValuehgGNEWS = [_arrayValuepiNrY0E, _arrayValueYJaZCc, _arrayValuesR4G7St]
		const _getAllEdgesQkjRXvk = () => { return _returnValuehgGNEWS };
		const _returnValuefHKnt96 = false;
		const _getAllVerticesrC0BL4y = () => { return _returnValuefHKnt96 };
		const _graphcV3cpwF = {
			"isDirected": _isDirectedx7pCEnV,
		"getAllEdges": _getAllEdgesQkjRXvk,
		"getAllVertices": _getAllVerticesrC0BL4y
	}
		const _returnValuehEdVLA = await kruskal(_graphcV3cpwF)
	});
})