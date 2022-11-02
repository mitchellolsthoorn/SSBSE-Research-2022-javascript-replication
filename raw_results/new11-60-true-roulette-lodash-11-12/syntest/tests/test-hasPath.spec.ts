export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _returnValuexer0j9q = "40qfSYx1TqqVTQUAnIsEJ1RzhP0dUS1tpttfHFzIiISamVD6";
		const _objectCr42Hnl = () => { return _returnValuexer0j9q };
		const _pathw58Lqtj = {
		
	}
		const _returnValuexUqhba8 = await hasPath(_objectCr42Hnl, _pathw58Lqtj)
	});

	it('test for hasPath', async () => {
		const _objectQjats0R = "k11dIGm9hHsxWLKiQT6fhDBafUYR29tIkrc9KV5qOt2AWzxysOrK341Vg4TYP";
		const _pathvY4JUu = "2pOq5gHj8UObvmD";
		const _returnValuehd5mrO = await hasPath(_objectQjats0R, _pathvY4JUu)
	});

	it('test for hasPath', async () => {
		const _objectTrm3Me = null;
		const _returnValueNzx6QpG = false;
		const _arrayValueoSR70p9 = () => { return _returnValueNzx6QpG };
		const _pathZnLHZLA = [_arrayValueoSR70p9]
		const _returnValuefE3CEL = await hasPath(_objectTrm3Me, _pathZnLHZLA)
	});
})