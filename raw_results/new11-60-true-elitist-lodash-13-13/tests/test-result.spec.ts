export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectOgxttz5 = undefined;
		const _lengthgOdOlhY = 3.7636648435902664;
		const _pathQz8wnOf = {
			"length": _lengthgOdOlhY
	}
		const _defaultValueD5GxDeX = {
		
	}
		const _returnValueX0tk2Tx = await result(_objectOgxttz5, _pathQz8wnOf, _defaultValueD5GxDeX)
	});

	it('test for result', async () => {
		const _objectVqybbuP = undefined;
		const _pathVGGh9A7 = -4.613197543752933;
		const _defaultValueKg6o5Wp = "xsxKPSFNT8Qxm0FdV3yRw9SYkbfLA2sr4UtcCBYEyn7X49UdR7Hs4xWaL8TPuCzoVWgM2oqb858gUQr9MbUXO4nSr1FFoaMu";
		const _returnValuePMuRgw = await result(_objectVqybbuP, _pathVGGh9A7, _defaultValueKg6o5Wp)
	});

	it('test for result', async () => {
		const _objectnQQWaJ = undefined;
		const _pathg7e7qNC = []
		const _defaultValueCyVQOvr = {
		
	}
		const _returnValueKHtbfvp = await result(_objectnQQWaJ, _pathg7e7qNC, _defaultValueCyVQOvr)
	});

	it('test for result', async () => {
		const _objectN70Rs4K = undefined;
		const _pathsKT4EIN = null;
		const _returnValueXWmf2gJ = false;
		const _defaultValuebbw6wcS = () => { return _returnValueXWmf2gJ };
		const _returnValuegsU6dAw = await result(_objectN70Rs4K, _pathsKT4EIN, _defaultValuebbw6wcS)
	});
})