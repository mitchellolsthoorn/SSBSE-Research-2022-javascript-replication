export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _returnValuee7ed8LA = true;
		const _configsJ74dpH = () => { return _returnValuee7ed8LA };
		const _returnValueVUudrP = await configFromObject(_configsJ74dpH)
	});
})