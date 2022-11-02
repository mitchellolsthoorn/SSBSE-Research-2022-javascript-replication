export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _returnValuevTHD3k = -5.617897031224014;
		const _objectfP4ROyU = () => { return _returnValuevTHD3k };
		const _pathLFjXxP2 = {
		
	}
		const _returnValuee9eb5wH = await hasPath(_objectfP4ROyU, _pathLFjXxP2)
	});

	it('test for hasPath', async () => {
		const _objectwNQ4w1u = null;
		const _pathn1757ep = "tl3IMRoeixzizFnWsWFMwCHn2hzNOJ5FHWXzkHYG9jRddQrDUWPb8TC3";
		const _returnValueGpElFCg = await hasPath(_objectwNQ4w1u, _pathn1757ep)
	});

	it('test for hasPath', async () => {
		const _arrayValuepvnGW8 = "63eCCnb6TUFYFlXRTbZ9M3sOz2JF1SlVPGJH2FED3hf7avLgH9JIkoBrCG9txXL";
		const _arrayValuepvA26G3 = 0.8544208432066114;
		const _objectquhObnd = [_arrayValuepvnGW8, _arrayValuepvA26G3]
		const _pathenD2jsm = "a9U4kziM1IVoAfjvAv8tbjFjIUhBzdzyLO2P2FoHnxVpWc7cqwuSQQiorhC4uO637YyDbvn9zIB";
		const _returnValueMxtcE8z = await hasPath(_objectquhObnd, _pathenD2jsm)
	});
})