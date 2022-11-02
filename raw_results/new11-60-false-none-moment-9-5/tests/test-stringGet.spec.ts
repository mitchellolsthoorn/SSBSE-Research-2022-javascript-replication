export {}
import {stringGet} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stringGet', () => {
	it('test for stringGet', async () => {
		const _unitsHef7CDh = "FeWHVsxCR5kL6LqlKA";
		const _returnValuehFtXYwN = await stringGet(_unitsHef7CDh)
	});
})