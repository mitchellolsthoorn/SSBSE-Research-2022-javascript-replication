export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _arrayValueSfUvS0R = null;
		const _arrayValuenlkv0U1 = true;
		const _arrayValueecELXOn = null;
		const _arrayValuepdfHtZR = -4.67737602906975;
		const _arrayValuelwoEMGU = [_arrayValuenlkv0U1, _arrayValueecELXOn, _arrayValuepdfHtZR]
		const _arrayValueQNK1OL2 = "XTfBUv9eTgjJszTP8ToDidYwUKvzPf99MQTBvfkOpFSGDA7nBxErTd6PJ2";
		const _arrayValuezmeTIww = undefined;
		const _arrayValueBpCuk0t = -8.744293645564241;
		const _arrayValueEl348T0 = [_arrayValuezmeTIww, _arrayValueBpCuk0t]
		const _arrayValuehRoOfVQ = true;
		const _arrayValuetyjrzQ6 = [_arrayValuelwoEMGU, _arrayValueQNK1OL2, _arrayValueEl348T0, _arrayValuehRoOfVQ]
		const _arrayValueok7jLS2 = [_arrayValueSfUvS0R, _arrayValuetyjrzQ6]
		const _arrayValueX0RO0B = undefined;
		const _arrayValueZo2PcKs = undefined;
		const _inputSdRdlCy = [_arrayValueok7jLS2, _arrayValueX0RO0B, _arrayValueZo2PcKs]
		const _unitsD4VlIXn = false;
		const _returnValuexj5dPaP = await isSame(_inputSdRdlCy, _unitsD4VlIXn)
	});

	it('test for isSame', async () => {
		const _inputQk8IH9c = false;
		const _unitsR5i2PB = null;
		const _returnValueqWGIg3S = await isSame(_inputQk8IH9c, _unitsR5i2PB)
	});
})