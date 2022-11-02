export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _momEPqyM6B = "tUwFMLSvQbhcD3lG2uOYhaHgjzrdOFv3ef47zFoaWY58WR7baNPpjt7";
		const _unitXWFak0q = "S13751bWReUZ6erXcEHMgdJzFmahI7es6Vblh8DNzofWekd";
		const _returnValueq6rCTgO = await get(_momEPqyM6B, _unitXWFak0q)
	});
})