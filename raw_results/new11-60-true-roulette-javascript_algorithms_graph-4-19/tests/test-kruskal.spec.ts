export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _graphYf9zO6v = "22gQK";
		const _returnValuejf31odR = await kruskal(_graphYf9zO6v)
	});

	it('test for kruskal', async () => {
		const _isDirectedIvXaaRr = false;
		const _returnValuemOmrdrF = "RtHosaW2OQ55CCGw33e02hcE2oeiV4kQJ7DtD8X1";
		const _getAllEdgesAKFdsnk = () => { return _returnValuemOmrdrF };
		const _arrayValuewoQitpp = "P";
		const _arrayValuem6SSUH8 = -5.182486452579125;
		const _arrayValueOdEB8CD = undefined;
		const _arrayValueLUykylc = true;
		const _returnValuePwwDQjt = [_arrayValuewoQitpp, _arrayValuem6SSUH8, _arrayValueOdEB8CD, _arrayValueLUykylc]
		const _getAllVerticesGXKq9QF = () => { return _returnValuePwwDQjt };
		const _graphiTETyg0 = {
			"isDirected": _isDirectedIvXaaRr,
		"getAllEdges": _getAllEdgesAKFdsnk,
		"getAllVertices": _getAllVerticesGXKq9QF
	}
		const _returnValueLtlSaSw = await kruskal(_graphiTETyg0)
	});

	it('test for kruskal', async () => {
		const _isDirectedxfDGXss = "sM0MdenJyDgebMtvFP6cOLoxIeb94xH1gGKAQUrIDE9wgy6Q62RgeIGzOcMxSFjCJtVzvwJ1JaPdkQKMBuwebjXApdb";
		const _getAllEdgeskGFobFC = undefined;
		const _returnValuezIWnFoO = undefined;
		const _returnValueV5FjAZC = () => { return _returnValuezIWnFoO };
		const _getAllVerticesJyzfBUW = () => { return _returnValueV5FjAZC };
		const _graphJgxNkzS = {
			"isDirected": _isDirectedxfDGXss,
		"getAllEdges": _getAllEdgeskGFobFC,
		"getAllVertices": _getAllVerticesJyzfBUW
	}
		const _returnValueZV2WAwv = await kruskal(_graphJgxNkzS)
	});
})