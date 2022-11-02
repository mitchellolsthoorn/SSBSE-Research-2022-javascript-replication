export {}
import {max} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/min-max.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('max', () => {
	it('test for max', async () => {
		const _returnValue7Io7DZ = await max()
	});
})