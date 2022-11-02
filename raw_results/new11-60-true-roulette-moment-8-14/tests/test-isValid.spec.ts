export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _arrayValueQdfbBeW = "cbG9VGAoivxKNTSbixePPT3J6JNllw0ff9hQpBwwWVQeYbFerFGYFKOuQH";
		const _arrayValuettZtRuV = undefined;
		const _arrayValueIZtp13U = false;
		const _arrayValuev4JEqkB = [_arrayValuettZtRuV, _arrayValueIZtp13U]
		const _arrayValuendbhj2 = undefined;
		const _mFr1K6vU = [_arrayValueQdfbBeW, _arrayValuev4JEqkB, _arrayValuendbhj2]
		const _returnValueWa4Rocc = await isValid(_mFr1K6vU)
	});
})