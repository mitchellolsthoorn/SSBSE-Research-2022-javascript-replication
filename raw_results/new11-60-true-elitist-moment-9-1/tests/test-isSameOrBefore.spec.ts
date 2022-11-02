export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputgT2CbSf = undefined;
		const _arrayValueinR6sAw = true;
		const _arrayValueLr7neT = "3rF1FwcBID6ysx2pxBxlIU1qevwWGGWY2gBgrwsaG6VBCf2OzBsjwXDbGmcj6Z";
		const _arrayValueNUnFexg = true;
		const _unitsyG0LAXa = [_arrayValueinR6sAw, _arrayValueLr7neT, _arrayValueNUnFexg]
		const _returnValueqbX088 = await isSameOrBefore(_inputgT2CbSf, _unitsyG0LAXa)
	});
})