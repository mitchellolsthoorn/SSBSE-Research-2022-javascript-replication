export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _returnValueFHx6Rs = undefined;
		const _lengthGIrNBPs = () => { return _returnValueFHx6Rs };
		const _objectsgKjFRW = {
			"length": _lengthGIrNBPs
	}
		const _pathdwaBBHe = {
		
	}
		const _returnValueK9L8Ca0 = await hasPath(_objectsgKjFRW, _pathdwaBBHe)
	});

	it('test for hasPath', async () => {
		const _lengthHPQC1W = "InsUqXHb";
		const _objectPnC1SsC = {
			"length": _lengthHPQC1W
	}
		const _patholMI4yM = "L5XocU6wzPpR8SkK9T6po2OrdT9RxqJ5DuPhSSVSv3o4h3W";
		const _returnValueXGmjGXV = await hasPath(_objectPnC1SsC, _patholMI4yM)
	});

	it('test for hasPath', async () => {
		const _objectLyuMtph = null;
		const _pathUXJghdn = null;
		const _returnValuewVtLU9T = await hasPath(_objectLyuMtph, _pathUXJghdn)
	});
})