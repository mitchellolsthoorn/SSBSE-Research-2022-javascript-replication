export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _arrayValueJOL27x = -5.506548094279021;
		const _arrayValueCcbLVLr = null;
		const _arrayValuen2OGOTP = false;
		const _returnValueGIla20o = [_arrayValueJOL27x, _arrayValueCcbLVLr, _arrayValuen2OGOTP]
		const _getAllVerticesFAR2Kgw = () => { return _returnValueGIla20o };
		const _graphmR6oJDY = {
			"getAllVertices": _getAllVerticesFAR2Kgw
	}
		const _returnValueL8zzYyG = await detectDirectedCycle(_graphmR6oJDY)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValueT5PHGn = []
		const _getAllVerticesUnuIg9 = () => { return _returnValueT5PHGn };
		const _graphFRW7bqa = {
			"getAllVertices": _getAllVerticesUnuIg9
	}
		const _returnValuemeYr0YD = await detectDirectedCycle(_graphFRW7bqa)
	});
})