export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValueN7duKVx = "zYNiNLLRlnqRwAT4y56oRrrqbxBeFsIMsxmBeYUfTdVF8hTHqEftiFLGDEYii1V8Ub5wrR";
		const _isValidyhvj004 = () => { return _returnValueN7duKVx };
		const _returnValueesFGL2q = "4c4hPjswZ7pGVdsgFLFk8zOgHy";
		const _localeDataD7ZdWLm = () => { return _returnValueesFGL2q };
		const _returnValue222Oty = {
		
	}
		const _daynhTLD8M = () => { return _returnValue222Oty };
		const _timeeiHu58S = {
			"isValid": _isValidyhvj004,
		"localeData": _localeDataD7ZdWLm,
		"day": _daynhTLD8M
	}
		const _withoutSuffixcnJ1mw = true;
		const _returnValueIFsciC5 = await to(_timeeiHu58S, _withoutSuffixcnJ1mw)
	});
})