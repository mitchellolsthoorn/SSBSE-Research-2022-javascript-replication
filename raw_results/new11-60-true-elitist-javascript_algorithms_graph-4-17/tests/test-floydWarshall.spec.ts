export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueSN8hTr3 = {
		
	}
		const _getAllVerticesxtXCIw = () => { return _returnValueSN8hTr3 };
		const _returnValueTwv4unA = {
		
	}
		const _returnValuetOpKKHn = () => { return _returnValueTwv4unA };
		const _findEdgeJB1HS0 = () => { return _returnValuetOpKKHn };
		const _graphrEZgaUb = {
			"getAllVertices": _getAllVerticesxtXCIw,
		"findEdge": _findEdgeJB1HS0
	}
		const _returnValueF5EiiDD = await floydWarshall(_graphrEZgaUb)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueQXFbIBN = null;
		const _returnValueYJtkT2X = [_arrayValueQXFbIBN]
		const _getAllVerticesL5hujDG = () => { return _returnValueYJtkT2X };
		const _returnValueQpl1s8K = null;
		const _findEdgesuL2WX3 = () => { return _returnValueQpl1s8K };
		const _graphCZ2eW5G = {
			"getAllVertices": _getAllVerticesL5hujDG,
		"findEdge": _findEdgesuL2WX3
	}
		const _returnValue6eS8V3 = await floydWarshall(_graphCZ2eW5G)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueFQPnLtb = null;
		const _arrayValuezBUsWp = false;
		const _arrayValueerhHPVz = null;
		const _arrayValueiGaQBD9 = [_arrayValuezBUsWp, _arrayValueerhHPVz]
		const _returnValueS3yMch = [_arrayValueFQPnLtb, _arrayValueiGaQBD9]
		const _getAllVerticesrccrEM4 = () => { return _returnValueS3yMch };
		const _returnValueRfGHIR1 = "5OfUpRx9oKGFuuta";
		const _findEdgedLji4Ej = () => { return _returnValueRfGHIR1 };
		const _graphlZzUgcU = {
			"getAllVertices": _getAllVerticesrccrEM4,
		"findEdge": _findEdgedLji4Ej
	}
		const _returnValueOEXoFpS = await floydWarshall(_graphlZzUgcU)
	});
})