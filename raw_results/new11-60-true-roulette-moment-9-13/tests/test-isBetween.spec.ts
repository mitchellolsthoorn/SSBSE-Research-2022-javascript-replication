export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromCGdObLG = "BcUIcgNdTwMiUaMXlNLuE4EcIHlcklEE9jkzXy833pxW2PldDZAgKIcHtqhwTiXvstipoXNRYIIrv5qXJN6q8fimVEPz";
		const _arrayValuei0Xfoj = undefined;
		const _arrayValueIlHBDM = 7.0302828226686955;
		const _returnValueFaTo5dT = [_arrayValuei0Xfoj, _arrayValueIlHBDM]
		const _arrayValueDZYeGuq = () => { return _returnValueFaTo5dT };
		const _tot7yueGZ = [_arrayValueDZYeGuq]
		const _unitsX0vnTN3 = "pV8XdgS3AGcL8OzH";
		const _inclusivityDr96KqN = -4.914301580258755;
		const _returnValuefDYyEJe = await isBetween(_fromCGdObLG, _tot7yueGZ, _unitsX0vnTN3, _inclusivityDr96KqN)
	});
})