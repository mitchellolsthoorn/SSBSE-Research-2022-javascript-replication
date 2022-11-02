export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _getAllVerticeszRW7wIz = false;
		const _returnValueOq3xJnR = null;
		const _findEdgeMTbQyaU = () => { return _returnValueOq3xJnR };
		const _graphYv778H = {
			"getAllVertices": _getAllVerticeszRW7wIz,
		"findEdge": _findEdgeMTbQyaU
	}
		const _returnValuevMUBD7T = await floydWarshall(_graphYv778H)
	});

	it('test for floydWarshall', async () => {
		const _returnValuelWRHw0p = "ixW";
		const _getAllVerticesU0t6fwq = () => { return _returnValuelWRHw0p };
		const _returnValueOzDcn2G = null;
		const _findEdgenBa3BSs = () => { return _returnValueOzDcn2G };
		const _graphDFg68ZK = {
			"getAllVertices": _getAllVerticesU0t6fwq,
		"findEdge": _findEdgenBa3BSs
	}
		const _returnValueIRtkf4B = await floydWarshall(_graphDFg68ZK)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueTiTWrCy = "zJfHeM9zcm14qW5A3hwXslMFlT6ud3UUmueX6f6VCJZojn6mIct2UzJS7xGmtInkNgrSrZrhLQA";
		const _arrayValueTk3ZRSM = 9.015725285328383;
		const _returnValueeviQ7J3 = [_arrayValueTiTWrCy, _arrayValueTk3ZRSM]
		const _getAllVerticesitgKJn = () => { return _returnValueeviQ7J3 };
		const _findEdgeDCJPprT = "Sbex";
		const _graphhidZb3L = {
			"getAllVertices": _getAllVerticesitgKJn,
		"findEdge": _findEdgeDCJPprT
	}
		const _returnValuexRDFul = await floydWarshall(_graphhidZb3L)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueTpjkPui = -1.0166582568949405;
		const _returnValuejKPP2Fu = -3.513635411870216;
		const _arrayValueU0fEppQ = () => { return _returnValuejKPP2Fu };
		const _returnValuel2hmHuP = [_arrayValueTpjkPui, _arrayValueU0fEppQ]
		const _getAllVerticesrUtIVcl = () => { return _returnValuel2hmHuP };
		const _returnValueq0eAS6k = "reNWkJRVlNFLTYDOnePvg13v02M18NwfBiOpR5vVLMnfs02dnrJeYh9xDCSmCLMnPRniQZb7Dbzfo9fPe1KjIkS";
		const _findEdgeYoV2QB0 = () => { return _returnValueq0eAS6k };
		const _graphHyLcnc = {
			"getAllVertices": _getAllVerticesrUtIVcl,
		"findEdge": _findEdgeYoV2QB0
	}
		const _returnValueMT8exRx = await floydWarshall(_graphHyLcnc)
	});
})