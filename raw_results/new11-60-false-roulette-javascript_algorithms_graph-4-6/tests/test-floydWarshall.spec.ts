export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueX7xeTmz = true;
		const _graphMfQ8HIY = () => { return _returnValueX7xeTmz };
		const _returnValuevk2jk0u = await floydWarshall(_graphMfQ8HIY)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueWuCAKzB = false;
		const _arrayValueLcJ2ATN = 7.610271394257783;
		const _returnValueiNZDpuC = [_arrayValueWuCAKzB, _arrayValueLcJ2ATN]
		const _getAllVerticesFUPWC6G = () => { return _returnValueiNZDpuC };
		const _returnValueJwyDJFp = "qoSsROfCfxEBq9KGOTD8ROiX7E7IbLvUp4RsR7OFL";
		const _findEdgeuCgGJpf = () => { return _returnValueJwyDJFp };
		const _graphOlagG8x = {
			"getAllVertices": _getAllVerticesFUPWC6G,
		"findEdge": _findEdgeuCgGJpf
	}
		const _returnValuer4ZsAQ9 = await floydWarshall(_graphOlagG8x)
	});
})