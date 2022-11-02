export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedmbtPax = "8g3cXd8yLf0GFB6HPSHe";
		const _arrayValuelQnPqbm = null;
		const _arrayValuei6xd61 = 6.701792190758297;
		const _arrayValueq8r9Z5E = undefined;
		const _returnValueAO3Wla = [_arrayValuelQnPqbm, _arrayValuei6xd61, _arrayValueq8r9Z5E]
		const _getAllEdgesomk0uoW = () => { return _returnValueAO3Wla };
		const _returnValueqKMu6m = "Iqj0zMd664IHlqu4YjP2V7hZnWztqBcRSyMdIA9CYwQk8WVb4FcyJJ4eD1O914N4T9pfUNSe6l";
		const _getAllVerticesrvvEgyQ = () => { return _returnValueqKMu6m };
		const _graph6tHWVO = {
			"isDirected": _isDirectedmbtPax,
		"getAllEdges": _getAllEdgesomk0uoW,
		"getAllVertices": _getAllVerticesrvvEgyQ
	}
		const _returnValueX5vs4vx = await kruskal(_graph6tHWVO)
	});

	it('test for kruskal', async () => {
		const _isDirectedlxpmfO5 = undefined;
		const _arrayValuekqyZPKb = 1.4588876490475755;
		const _arrayValueqo37bj = 6.20893315875405;
		const _returnValueSJIJDRl = [_arrayValuekqyZPKb, _arrayValueqo37bj]
		const _getAllEdgesik0EGk6 = () => { return _returnValueSJIJDRl };
		const _returnValuek1o3Yh1 = -9.655873174583947;
		const _getAllVerticestH4xqsU = () => { return _returnValuek1o3Yh1 };
		const _graphcLU25z = {
			"isDirected": _isDirectedlxpmfO5,
		"getAllEdges": _getAllEdgesik0EGk6,
		"getAllVertices": _getAllVerticestH4xqsU
	}
		const _returnValueRNnIM5F = await kruskal(_graphcLU25z)
	});
})