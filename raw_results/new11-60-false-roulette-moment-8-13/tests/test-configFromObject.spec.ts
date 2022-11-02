export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _returnValueD2E3djp = 4.2656019865078125;
		const _configQwMLLF5 = () => { return _returnValueD2E3djp };
		const _returnValueHBreMwd = await configFromObject(_configQwMLLF5)
	});
})