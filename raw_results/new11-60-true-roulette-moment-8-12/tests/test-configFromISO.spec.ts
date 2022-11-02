export {}
import {configFromISO} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromISO', () => {
	it('test for configFromISO', async () => {
		const _config3ptA06 = "go9Ybnhrqbf0XgOywX9yogGzi3U3UTQFzsvcG3fjJXTBb6dVCbKppoGsfLVIzZ3vjsnsjciMjDCMotZFGzQiznD";
		const _returnValueYyCJ1Xm = await configFromISO(_config3ptA06)
	});
})