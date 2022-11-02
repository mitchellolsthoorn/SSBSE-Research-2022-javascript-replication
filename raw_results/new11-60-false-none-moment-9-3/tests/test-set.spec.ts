export {}
import {set} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('set', () => {
	it('test for set', async () => {
		const _momtY2KpfO = "UizmT5fgEN1amELyOdOkSNTB7HQ4WzluEbGLjJPO9t8oAe3SqdADdKWjaj0NCUIY9BSL";
		const _unitHCJS3g1 = "k88z6GV0mMBEa13SW9B8yTqXmc30xefrrkjIYuk1WZrfFv6ljCeHMoZlv2jKr5ekcbu1rPmIGK2WPtVUttrG0XKYq37ebA";
		const _valueFCqSy6F = false;
		const _returnValueMUkrzy1 = await set(_momtY2KpfO, _unitHCJS3g1, _valueFCqSy6F)
	});
})