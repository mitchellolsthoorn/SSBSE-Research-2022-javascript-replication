export {}
import {createInvalid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('createInvalid', () => {
	it('test for createInvalid', async () => {
		const _flagsHLTcr0 = false;
		const _returnValueScFz3zE = await createInvalid(_flagsHLTcr0)
	});
})