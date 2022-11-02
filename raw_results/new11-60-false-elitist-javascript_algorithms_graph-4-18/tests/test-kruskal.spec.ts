export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedhpZ0ofS = true;
		const _returnValueBhNQqwy = {
		
	}
		const _getAllEdgesre0Iw8d = () => { return _returnValueBhNQqwy };
		const _returnValueapAEMh6 = undefined;
		const _getAllVerticesEmswCFd = () => { return _returnValueapAEMh6 };
		const _graphthOyThi = {
			"isDirected": _isDirectedhpZ0ofS,
		"getAllEdges": _getAllEdgesre0Iw8d,
		"getAllVertices": _getAllVerticesEmswCFd
	}
		const _returnValueZe6Oo6H = await kruskal(_graphthOyThi)
	});

	it('test for kruskal', async () => {
		const _isDirectedHOr6Fle = undefined;
		const _returnValueJB48wvV = "hwfhFTfZ4dVXgj0mJXjPUzbVrfFaP";
		const _getAllEdgestwZVXX3 = () => { return _returnValueJB48wvV };
		const _arrayValuezLopieK = undefined;
		const _arrayValuexjKLDG = undefined;
		const _arrayValueYTQQyBc = undefined;
		const _returnValue3WYLLr = [_arrayValuezLopieK, _arrayValuexjKLDG, _arrayValueYTQQyBc]
		const _getAllVerticesID9PBRN = () => { return _returnValue3WYLLr };
		const _graphpQliKLu = {
			"isDirected": _isDirectedHOr6Fle,
		"getAllEdges": _getAllEdgestwZVXX3,
		"getAllVertices": _getAllVerticesID9PBRN
	}
		const _returnValuevD3jkh3 = await kruskal(_graphpQliKLu)
	});
})