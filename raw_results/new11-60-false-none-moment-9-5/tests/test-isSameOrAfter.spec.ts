export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputz8nUZVy = -9.992324299866688;
		const _unitsV8A635Q = "S4SBhw7TUpELGv5m9FWksNPoERF2DX1JK9kyBcmzyb8XJNSZbOYkQVJ2ktwuRjcPnelRILInQMG";
		const _returnValueFzibDog = await isSameOrAfter(_inputz8nUZVy, _unitsV8A635Q)
	});
})