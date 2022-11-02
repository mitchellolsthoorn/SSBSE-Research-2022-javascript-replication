export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedkDNTDIH = null;
		const _returnValuePoIEjj2 = "BrBBl1g19z7WuwCqYmyEsXQhHehCwlXhNc2xctbWIGkOrNAlnRIaE9VUFMluU2dEqQQ";
		const _returnValue155d9a = () => { return _returnValuePoIEjj2 };
		const _getAllEdgesjzlQlcB = () => { return _returnValue155d9a };
		const _returnValueLbd9evQ = "zxmPMU0uh7LkK05fXZLzKLi493u6iORVlCCGKel1CCgiFPy7vG2c5mV0XeF6v";
		const _getAllVerticeslwEFkhq = () => { return _returnValueLbd9evQ };
		const _graphl405r6 = {
			"isDirected": _isDirectedkDNTDIH,
		"getAllEdges": _getAllEdgesjzlQlcB,
		"getAllVertices": _getAllVerticeslwEFkhq
	}
		const _returnValueB7kMW99 = await kruskal(_graphl405r6)
	});

	it('test for kruskal', async () => {
		const _arrayValueICWHskP = null;
		const _arrayValuexr8tZi0 = "wgcLIJLbkTGypjfIDsxeowVYM1V9DfRdUh2Cvy4R7IivQOqq";
		const _arrayValueJqDEUkz = [_arrayValuexr8tZi0]
		const _isDirected4JOAFl = [_arrayValueICWHskP, _arrayValueJqDEUkz]
		const _returnValuesKB9S05 = -2.407876681640432;
		const _getAllEdgesheHPBYR = () => { return _returnValuesKB9S05 };
		const _returnValuedIZmZ6G = undefined;
		const _getAllVerticesG7Zn9nv = () => { return _returnValuedIZmZ6G };
		const _graphSSw6h6 = {
			"isDirected": _isDirected4JOAFl,
		"getAllEdges": _getAllEdgesheHPBYR,
		"getAllVertices": _getAllVerticesG7Zn9nv
	}
		const _returnValueYi6P9Vi = await kruskal(_graphSSw6h6)
	});

	it('test for kruskal', async () => {
		const _isDirectedQEtTJtT = null;
		const _returnValueu7kLJ0A = "XabyM5UoL1SUEFr1";
		const _getAllEdgesxmuCFEV = () => { return _returnValueu7kLJ0A };
		const _returnValueCsMHV8I = 5.0307141078851245;
		const _returnValueoYgZyqM = () => { return _returnValueCsMHV8I };
		const _getAllVerticesf9zMfth = () => { return _returnValueoYgZyqM };
		const _graphenxOHye = {
			"isDirected": _isDirectedQEtTJtT,
		"getAllEdges": _getAllEdgesxmuCFEV,
		"getAllVertices": _getAllVerticesf9zMfth
	}
		const _returnValueNByXEpe = await kruskal(_graphenxOHye)
	});
})