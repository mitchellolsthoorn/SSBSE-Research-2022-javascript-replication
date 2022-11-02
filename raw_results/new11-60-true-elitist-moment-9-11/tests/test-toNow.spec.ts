export {}
import {toNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toNow', () => {
	it('test for toNow', async () => {
		const _withoutSuffixmw6IR5 = "QtCjVtsqNq5HQzqLhse1sOagUZ9uiKPB7WQpDv0njCVyg85J5yoDJFBg6XXf2WHKI55tdWyVFkmtvWMcuXbH";
		const _returnValueUQjbzl = await toNow(_withoutSuffixmw6IR5)
	});
})