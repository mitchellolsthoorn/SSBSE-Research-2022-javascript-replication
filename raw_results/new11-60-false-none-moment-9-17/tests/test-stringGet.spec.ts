export {}
import {stringGet} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stringGet', () => {
	it('test for stringGet', async () => {
		const _unitsjLzekX = "rTFvvtzpm4QiAl7B6KIpqS4pGWEmaHoJDY5qqNS3t8woMOlf88";
		const _returnValueMKZgy0N = await stringGet(_unitsjLzekX)
	});
})