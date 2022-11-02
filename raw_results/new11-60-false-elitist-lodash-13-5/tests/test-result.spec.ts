export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectlft75os = undefined;
		const _lengthguczc6D = -9.668196115206099;
		const _pathCiYp3O2 = {
			"length": _lengthguczc6D
	}
		const _defaultValuerQcg85R = {
		
	}
		const _returnValueH5HUSRL = await result(_objectlft75os, _pathCiYp3O2, _defaultValuerQcg85R)
	});

	it('test for result', async () => {
		const _objectYGH8i6 = undefined;
		const _path92QYdS = false;
		const _defaultValuecAAdecQ = {
		
	}
		const _returnValueaakvC6W = await result(_objectYGH8i6, _path92QYdS, _defaultValuecAAdecQ)
	});

	it('test for result', async () => {
		const _objectOgDcU64 = undefined;
		const _pathbDdMQSe = []
		const _defaultValuek1lgARw = {
		
	}
		const _returnValueigUx1Wx = await result(_objectOgDcU64, _pathbDdMQSe, _defaultValuek1lgARw)
	});

	it('test for result', async () => {
		const _objecth5XEAjy = undefined;
		const _pathQTFSXK = true;
		const _returnValuev2AxXna = false;
		const _defaultValuejg1iPi = () => { return _returnValuev2AxXna };
		const _returnValueGGdPKQ = await result(_objecth5XEAjy, _pathQTFSXK, _defaultValuejg1iPi)
	});
})