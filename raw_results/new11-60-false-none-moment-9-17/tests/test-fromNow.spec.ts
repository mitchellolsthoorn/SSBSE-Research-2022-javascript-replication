export {}
import {fromNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('fromNow', () => {
	it('test for fromNow', async () => {
		const _arrayValuekCmVLmx = undefined;
		const _returnValueClpDEbT = [_arrayValuekCmVLmx]
		const _returnValueDvwaJu = () => { return _returnValueClpDEbT };
		const _withoutSuffixOv7z6TI = () => { return _returnValueDvwaJu };
		const _returnValueWGDOzY7 = await fromNow(_withoutSuffixOv7z6TI)
	});
})