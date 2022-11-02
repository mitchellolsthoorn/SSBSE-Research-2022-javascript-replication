export {}
import {unix} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to-type.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('unix', () => {
	it('test for unix', async () => {
		const _returnValueQ0eXP16 = await unix()
	});
})