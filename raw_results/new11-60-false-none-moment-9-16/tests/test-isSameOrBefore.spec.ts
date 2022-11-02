export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputSC5EJqI = "5asgDBuWRGzQxL57Uw74gqtpqCDOlC34JoE4ME1tYOYLej9APFQS84ELDqBv5urzOULIK85Oi7lyRE6f";
		const _unitsNMjCQ3v = false;
		const _returnValuex84sTN = await isSameOrBefore(_inputSC5EJqI, _unitsNMjCQ3v)
	});
})