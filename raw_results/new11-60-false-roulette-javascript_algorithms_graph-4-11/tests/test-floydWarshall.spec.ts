export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueRHppZFR = "QnPk5Ky1ckcRTvHfTiXsCOROurYBohIjkYYqFNw123LBjjaW568n3YeafDqI71f1eUPFSKZAfEJNQaNmmUmRWanRn4L";
		const _graph1nHKH0 = () => { return _returnValueRHppZFR };
		const _returnValueFDMxbWK = await floydWarshall(_graph1nHKH0)
	});

	it('test for floydWarshall', async () => {
		const _returnValueSoE86WC = -6.3506482569472915;
		const _getAllVerticessFax5tO = () => { return _returnValueSoE86WC };
		const _returnValuevC2tpn = "lqoSPeaeA3uUsQUa";
		const _findEdgeQvfiE2 = () => { return _returnValuevC2tpn };
		const _graphNyLN6rn = {
			"getAllVertices": _getAllVerticessFax5tO,
		"findEdge": _findEdgeQvfiE2
	}
		const _returnValueQDhxpS3 = await floydWarshall(_graphNyLN6rn)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueI2DYaJ = null;
		const _returnValueRg1wmze = {
		
	}
		const _arrayValuexmTgMvC = () => { return _returnValueRg1wmze };
		const _arrayValueeQ8fxnL = null;
		const _arrayValueMyvRgNW = [_arrayValuexmTgMvC, _arrayValueeQ8fxnL]
		const _returnValueVEILyZ5 = [_arrayValueI2DYaJ, _arrayValueMyvRgNW]
		const _getAllVerticesz1kPeiW = () => { return _returnValueVEILyZ5 };
		const _returnValuertO3HAD = true;
		const _findEdgeECdcXWw = () => { return _returnValuertO3HAD };
		const _graphg9F7Bgg = {
			"getAllVertices": _getAllVerticesz1kPeiW,
		"findEdge": _findEdgeECdcXWw
	}
		const _returnValue5u69WR = await floydWarshall(_graphg9F7Bgg)
	});
})