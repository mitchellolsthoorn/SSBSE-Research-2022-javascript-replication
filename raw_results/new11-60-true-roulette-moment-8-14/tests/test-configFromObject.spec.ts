export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _returnValueWCxroRm = -5.39257009397477;
		const _configAcjwWz = () => { return _returnValueWCxroRm };
		const _returnValueBmU2Tns = await configFromObject(_configAcjwWz)
	});
})