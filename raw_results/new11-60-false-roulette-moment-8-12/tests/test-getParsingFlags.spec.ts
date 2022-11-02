export {}
import getParsingFlags from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/parsing-flags.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getParsingFlags', () => {
	it('test for getParsingFlags', async () => {
		const _mD9Pcd5f = "Q1RGhAQKKGzqvcsH18YA7CErueqnEsdrG3oerUvYEhxjScq";
		const _returnValuexb34FV = await getParsingFlags(_mD9Pcd5f)
	});
})