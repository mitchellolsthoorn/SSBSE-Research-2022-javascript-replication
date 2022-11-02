export {}
import {createInvalid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('createInvalid', () => {
	it('test for createInvalid', async () => {
		const _flagsRmo01WV = "3VDq1nRPuDdlh37vhEJU0Idv8KgTP8Z0Qek0hLqJFNNUmwSKuGgBOmRuJ7AE25fkn";
		const _returnValueUb976Bc = await createInvalid(_flagsRmo01WV)
	});
})