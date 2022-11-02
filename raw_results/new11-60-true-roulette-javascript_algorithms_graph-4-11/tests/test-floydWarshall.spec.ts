export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _graphpX2jCkF = "qEXGigObb9SM8fRlDtp8k6zpRqia3JyhZnxgWGL1ly4yB0JP";
		const _returnValuebR22J7M = await floydWarshall(_graphpX2jCkF)
	});

	it('test for floydWarshall', async () => {
		const _returnValueY4VfUwt = -4.605979224248769;
		const _getAllVerticesq54PWi1 = () => { return _returnValueY4VfUwt };
		const _returnValueyeJ9dc = "iXdvYvEJlraWlKxEP8JSEJf29K97RxeoLhV3j5A3KLycOWpWC4Ql5UbjV67OPuTWHimEN71zpMU6ymQUC1bOwdkTA";
		const _findEdgeCJ2apn4 = () => { return _returnValueyeJ9dc };
		const _graphtyYjwz = {
			"getAllVertices": _getAllVerticesq54PWi1,
		"findEdge": _findEdgeCJ2apn4
	}
		const _returnValueK4Muiy = await floydWarshall(_graphtyYjwz)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueoQGf17d = null;
		const _arrayValuekPDAQYR = 7.280773483580592;
		const _returnValueLb54A6N = [_arrayValueoQGf17d, _arrayValuekPDAQYR]
		const _getAllVerticesJIvzUWD = () => { return _returnValueLb54A6N };
		const _returnValuefPg2KCi = false;
		const _findEdgeBRLuuPT = () => { return _returnValuefPg2KCi };
		const _graphG9qnnnt = {
			"getAllVertices": _getAllVerticesJIvzUWD,
		"findEdge": _findEdgeBRLuuPT
	}
		const _returnValueKrHRKg = await floydWarshall(_graphG9qnnnt)
	});
})