export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputEdbCsV7 = {
		
	}
		const _unitsL9IpFQ9 = "8ewKvk6p6MQ9iTsenmHlw8Hgsrc7zDoobJs0rTy5KKjkGhQD78mcdlyOo3";
		const _returnValueqbodl6O = await isSameOrAfter(_inputEdbCsV7, _unitsL9IpFQ9)
	});
})