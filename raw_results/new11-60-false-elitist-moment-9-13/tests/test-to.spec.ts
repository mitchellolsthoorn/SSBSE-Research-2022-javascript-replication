export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValueBphVfC3 = "PIq3CPkzUkSH4iyHyDqL8TWhzrnQJtl8xbD0O54aRDXAbLPrcU2GUbeUtP";
		const _returnValuersGPC5p = () => { return _returnValueBphVfC3 };
		const _isValidSZpd1IL = () => { return _returnValuersGPC5p };
		const _time4EE26I = {
			"isValid": _isValidSZpd1IL
	}
		const _withoutSuffixZJslhlX = -5.400280502898086;
		const _returnValueA1YgKqw = await to(_time4EE26I, _withoutSuffixZJslhlX)
	});
})