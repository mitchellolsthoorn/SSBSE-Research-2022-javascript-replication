export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValuesHxtfj7 = 3.099462742180158;
		const _getAllVerticeseRu2YZ = () => { return _returnValuesHxtfj7 };
		const _returnValueItNLarf = undefined;
		const _findEdgerD0I9Mt = () => { return _returnValueItNLarf };
		const _graphzXCr2R = {
			"getAllVertices": _getAllVerticeseRu2YZ,
		"findEdge": _findEdgerD0I9Mt
	}
		const _returnValuee5kO5j5 = await floydWarshall(_graphzXCr2R)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuePuLZW9 = undefined;
		const _returnValuevNFEYyz = [_arrayValuePuLZW9]
		const _getAllVerticesLMD4wL6 = () => { return _returnValuevNFEYyz };
		const _returnValueg3DpsBb = null;
		const _findEdgeJfSJ0a2 = () => { return _returnValueg3DpsBb };
		const _graphZCAg8QK = {
			"getAllVertices": _getAllVerticesLMD4wL6,
		"findEdge": _findEdgeJfSJ0a2
	}
		const _returnValueDmc5VT = await floydWarshall(_graphZCAg8QK)
	});

	it('test for floydWarshall', async () => {
		const _arrayValueMBPDT2G = {
		
	}
		const _arrayValueWb4ccY9 = "dYCNvRi5Ky589";
		const _returnValuefqfRxT = [_arrayValueMBPDT2G, _arrayValueWb4ccY9]
		const _getAllVerticescj99VJr = () => { return _returnValuefqfRxT };
		const _findEdgerD0R0Sb = "5kGlCSPL96C6hkbypr6l6fMWM39AgOTHuIueotdHWJmooeCxNtnUOJ";
		const _graphosyJTrU = {
			"getAllVertices": _getAllVerticescj99VJr,
		"findEdge": _findEdgerD0R0Sb
	}
		const _returnValuefnFirBs = await floydWarshall(_graphosyJTrU)
	});

	it('test for floydWarshall', async () => {
		const _arrayValuewB5YVfF = "5vhPF7";
		const _arrayValueutS0W4f = "MQHb9R7xGi0yOLlEeJZ";
		const _arrayValuek2YX8m2 = {
		
	}
		const _arrayValueHWnRf1 = 6.733890924189751;
		const _returnValuePhl5IA = [_arrayValuewB5YVfF, _arrayValueutS0W4f, _arrayValuek2YX8m2, _arrayValueHWnRf1]
		const _getAllVerticeshc1XIXl = () => { return _returnValuePhl5IA };
		const _returnValueMUVcafd = 1.1856200610399128;
		const _findEdgeB4cZOuO = () => { return _returnValueMUVcafd };
		const _graphcO05Lzv = {
			"getAllVertices": _getAllVerticeshc1XIXl,
		"findEdge": _findEdgeB4cZOuO
	}
		const _returnValueZ7Xermq = await floydWarshall(_graphcO05Lzv)
	});
})