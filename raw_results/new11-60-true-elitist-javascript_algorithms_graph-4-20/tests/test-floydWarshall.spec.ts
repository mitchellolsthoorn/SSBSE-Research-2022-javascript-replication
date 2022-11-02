export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValueqP8giiH = undefined;
		const _getAllVerticesw3MVMPw = () => { return _returnValueqP8giiH };
		const _returnValuelanJXlV = null;
		const _findEdgesPhnD2K = () => { return _returnValuelanJXlV };
		const _graph1DZZ8C = {
			"getAllVertices": _getAllVerticesw3MVMPw,
		"findEdge": _findEdgesPhnD2K
	}
		const _returnValuek9UabCk = await floydWarshall(_graph1DZZ8C)
	});

	it('test for floydWarshall', async () => {
		const _returnValuebBWaAc = {
		
	}
		const _getAllVerticesDXHA0Bl = () => { return _returnValuebBWaAc };
		const _findEdgeREzF7sq = true;
		const _graphkg6rD8v = {
			"getAllVertices": _getAllVerticesDXHA0Bl,
		"findEdge": _findEdgeREzF7sq
	}
		const _returnValue9OZDER = await floydWarshall(_graphkg6rD8v)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuetNqgutq = {
		
	}
		const _returnValuexhVmJTn = [_arrayValuetNqgutq]
		const _getAllVerticesXT5Omjt = () => { return _returnValuexhVmJTn };
		const _returnValueV8A08R2 = true;
		const _arrayValueqs8jgRJ = () => { return _returnValueV8A08R2 };
		const _arrayValueS4UWaJs = undefined;
		const _arrayValuejPHSV06 = [_arrayValueS4UWaJs]
		const _arrayValueFHZZLs8 = "VrfLw6plDNrkP49HigIeF";
		const _arrayValueWNKfw1 = null;
		const _findEdgecDyamDQ = [_arrayValueqs8jgRJ, _arrayValuejPHSV06, _arrayValueFHZZLs8, _arrayValueWNKfw1]
		const _graphOcMaWdp = {
			"getAllVertices": _getAllVerticesXT5Omjt,
		"findEdge": _findEdgecDyamDQ
	}
		const _returnValueaEFWkdV = await floydWarshall(_graphOcMaWdp)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuekF5M1b = "7n9Aa2cLHJuuEii4AKXk3bJo41oFlLCGQHMh3qT2Y9rnJueCmkPINPMV0oh7Z2mwrjOFhU9QQOb1db2M28Vu5B1T7";
		const _arrayValueQNaeXED = -8.741359025087581;
		const _arrayValueW4XKSar = false;
		const _arrayValuefEhYsZj = 1.5195124501349575;
		const _arrayValueWhzAPLf = [_arrayValueW4XKSar, _arrayValuefEhYsZj]
		const _returnValueBeZwzLc = [_arrayValuekF5M1b, _arrayValueQNaeXED, _arrayValueWhzAPLf]
		const _getAllVerticesUrTyNJT = () => { return _returnValueBeZwzLc };
		const _returnValueo5uacYn = undefined;
		const _findEdgeTP8omhX = () => { return _returnValueo5uacYn };
		const _graphkq3GOy6 = {
			"getAllVertices": _getAllVerticesUrTyNJT,
		"findEdge": _findEdgeTP8omhX
	}
		const _returnValueuN4ea7S = await floydWarshall(_graphkq3GOy6)
	});
})