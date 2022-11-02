export {}
import {configFromArray} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-array.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromArray', () => {
	it('test for configFromArray', async () => {
		const __dV5a45of = {
		
	}
		const __offsetdex2YnT = "wflIHgRI1B8UCaZLWu7ne4hw2SVS5fJlSAWR6fIICALny8lVYFsSDDM7is5EyRNkL4";
		const _configRrMMi4l = {
			"_d": __dV5a45of,
		"_offset": __offsetdex2YnT
	}
		const _returnValue0HpPLd = await configFromArray(_configRrMMi4l)
	});

	it('test for configFromArray', async () => {
		const _returnValuee15J6f = 7.188536194012308;
		const _configrjXX0BH = () => { return _returnValuee15J6f };
		const _returnValueePnpqLp = await configFromArray(_configrjXX0BH)
	});
})