export {}
import {stringGet} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stringGet', () => {
	it('test for stringGet', async () => {
		const _returnValueuqDIffF = "90gXj4YbXJS7WxisO7hsI1o";
		const _unitsN5RaLwn = () => { return _returnValueuqDIffF };
		const _returnValuejByPGhX = await stringGet(_unitsN5RaLwn)
	});
})