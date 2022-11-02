export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueYqM0ky = undefined;
		const _getNeighborsVb3jn8j = () => { return _returnValueYqM0ky };
		const _graphus3S6ch = {
			"getNeighbors": _getNeighborsVb3jn8j
	}
		const _startVertexAhuJUM9 = false;
		const _returnValuerQaamD7 = null;
		const _originalCallbacksQ58BxpY = () => { return _returnValuerQaamD7 };
		const _returnValueEP1k40H = await breadthFirstSearch(_graphus3S6ch, _startVertexAhuJUM9, _originalCallbacksQ58BxpY)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueVD0Qcrk = undefined;
		const _arrayValueMLJnPy = "Izyv8Bi38o82vuCnP3LBRhI2E78BWFHChnOcaUrercAsMFSNqXYiUdDVoGViFpAAGYPTVnoJGFfccPP7RU8pYXqgcl";
		const _arrayValueSiUp7il = "BMbUWnfb7IMkAQxDmRye0GNthRRrg9r6miWDNmpf9Mtvg2zq";
		const _arrayValuetcYkxcO = undefined;
		const _arrayValueUXDjWhO = 7.21089412384568;
		const _arrayValuex2s22ma = -5.728014168124751;
		const _arrayValueL8hpSln = [_arrayValueUXDjWhO, _arrayValuex2s22ma]
		const _arrayValue2Ytm65 = [_arrayValueSiUp7il, _arrayValuetcYkxcO, _arrayValueL8hpSln]
		const _returnValuehDDYzlu = [_arrayValueVD0Qcrk, _arrayValueMLJnPy, _arrayValue2Ytm65]
		const _getNeighborsukKAP3A = () => { return _returnValuehDDYzlu };
		const _graphSqrP7zB = {
			"getNeighbors": _getNeighborsukKAP3A
	}
		const _startVertexn9pBl01 = "KRJLHtHgLK8GFEUpHw79wh9IthybRs9Kvw4JvSkd7adAnhAzuYH1mGo6ePtpVYqWbnHPOZVQNC9qhAJLOUPIxQw8vgza";
		const _originalCallbackswAhdCFB = {
		
	}
		const _returnValueJ9XLK7t = await breadthFirstSearch(_graphSqrP7zB, _startVertexn9pBl01, _originalCallbackswAhdCFB)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValuelcvudGJ = []
		const _getNeighborsS0RV1ZF = () => { return _returnValuelcvudGJ };
		const _graphVPVY8gt = {
			"getNeighbors": _getNeighborsS0RV1ZF
	}
		const _startVertexqvHsshe = false;
		const _returnValuexU25jB3 = true;
		const _originalCallbacksKnFPcUp = () => { return _returnValuexU25jB3 };
		const _returnValuen8emCfW = await breadthFirstSearch(_graphVPVY8gt, _startVertexqvHsshe, _originalCallbacksKnFPcUp)
	});
})