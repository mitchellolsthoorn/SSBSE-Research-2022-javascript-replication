export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueFP7IfdX = {
		
	}
		const _grapht0NRWbo = () => { return _returnValueFP7IfdX };
		const _returnValueNRunWc = await floydWarshall(_grapht0NRWbo)
	});

	it('test for floydWarshall', async () => {
		const _returnValueKpHXuml = "TsVbGxFoA";
		const _getAllVerticesA2t0UpF = () => { return _returnValueKpHXuml };
		const _returnValuebZdivOM = false;
		const _findEdgenRyhB1D = () => { return _returnValuebZdivOM };
		const _graphQYSMsAO = {
			"getAllVertices": _getAllVerticesA2t0UpF,
		"findEdge": _findEdgenRyhB1D
	}
		const _returnValueYg2F9J = await floydWarshall(_graphQYSMsAO)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueQV269V5 = "Eu14sCfr8sSpNdUoEBXMExVkMMV7t6abtmpdMgUI90RR6L1jEhfh7TVhyekACCNH26ew8an";
		const _returnValuen99YHjU = undefined;
		const _arrayValuegvzbQ7J = () => { return _returnValuen99YHjU };
		const _arrayValueepA3ZFK = null;
		const _returnValueDlPqV6g = 6.054621753343696;
		const _arrayValuenWr3DJq = () => { return _returnValueDlPqV6g };
		const _arrayValueE4squj = undefined;
		const _arrayValueIqx9Yb1 = [_arrayValuegvzbQ7J, _arrayValueepA3ZFK, _arrayValuenWr3DJq, _arrayValueE4squj]
		const _returnValuex8nzkxW = [_arrayValueQV269V5, _arrayValueIqx9Yb1]
		const _getAllVerticeshcZOQx3 = () => { return _returnValuex8nzkxW };
		const _findEdgerkLG4Nc = undefined;
		const _graphfkSsr3 = {
			"getAllVertices": _getAllVerticeshcZOQx3,
		"findEdge": _findEdgerkLG4Nc
	}
		const _returnValueHnHZ2qc = await floydWarshall(_graphfkSsr3)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedbITwW5 = false;
		const _graphrzCMbny = new Graph(_isDirectedbITwW5)
		const _returnValueT9bPCVh = await _graphrzCMbny.getAdjacencyMatrix()
		const _returnValuepFtPJle = await floydWarshall(_graphrzCMbny)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueRfydaJY = "fWBahrlrxxCHIHHEyp8ysdu5O6DXp9uhUueAmpp9nqwwTFoJsHanfwip3nutf09kBbzUh0CRnD9wPT";
		const _arrayValueYRoyzxI = null;
		const _arrayValueMDAQ1Or = undefined;
		const _returnValueLhVux20 = [_arrayValueRfydaJY, _arrayValueYRoyzxI, _arrayValueMDAQ1Or]
		const _getAllVerticesCSk3l5R = () => { return _returnValueLhVux20 };
		const _returnValueAf5JEuN = 2.4567527279543064;
		const _findEdgeqDpzMo = () => { return _returnValueAf5JEuN };
		const _graphiJVcukb = {
			"getAllVertices": _getAllVerticesCSk3l5R,
		"findEdge": _findEdgeqDpzMo
	}
		const _returnValueohePOJ = await floydWarshall(_graphiJVcukb)
	});
})