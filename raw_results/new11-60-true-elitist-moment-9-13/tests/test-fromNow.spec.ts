export {}
import {fromNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('fromNow', () => {
	it('test for fromNow', async () => {
		const _arrayValuei0OlULK = "iYuydezeCILA8UjYAWsoimXGDBD0OpF1ydFuacwseOdFWUaGO9Tsr3l8JsmlX1rKl0ViGekIFT4VYnGa3cw9k3KSibr9F";
		const _arrayValueiBqazU = undefined;
		const _withoutSuffixoz0F4df = [_arrayValuei0OlULK, _arrayValueiBqazU]
		const _returnValueHU4fzNp = await fromNow(_withoutSuffixoz0F4df)
	});
})