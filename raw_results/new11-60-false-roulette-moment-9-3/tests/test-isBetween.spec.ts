export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromSZo4L6t = 8.955407563444876;
		const _toSOZnCP3 = "6Yo5vqdMvSAUcm5xaWbvIWH2SyxTAybfnO9OJDlM6YaA482nItOxLvLqeNcfA6Nwd58Cuch";
		const _unitsxoHMNea = false;
		const _inclusivityDDKuuMU = "hQ81j2l9reYkTroOTg";
		const _returnValueoIid5t5 = await isBetween(_fromSZo4L6t, _toSOZnCP3, _unitsxoHMNea, _inclusivityDDKuuMU)
	});
})