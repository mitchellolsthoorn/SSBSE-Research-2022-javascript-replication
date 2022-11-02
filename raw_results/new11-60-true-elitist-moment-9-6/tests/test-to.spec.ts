export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _arrayValuePhzAn4f = "GC1UNPrjzaUutRgOazhoA";
		const _arrayValueM75PKZR = "hu7FL64pcrzx1rH5ol3xLP";
		const _arrayValuecr0vFvn = false;
		const _returnValuevQP59m = [_arrayValuePhzAn4f, _arrayValueM75PKZR, _arrayValuecr0vFvn]
		const _isValidKZZydkg = () => { return _returnValuevQP59m };
		const _timemGC9bd = {
			"isValid": _isValidKZZydkg
	}
		const _withoutSuffixbOPi6NP = "w4vHuCmKD4bCAtd10M4eamIQSon1DBkkZkwin86pf1NjIMynjsOVNiBB3kqF8ivA9CtFKNRsM0VbNMzU25r55";
		const _returnValueCociTm7 = await to(_timemGC9bd, _withoutSuffixbOPi6NP)
	});
})