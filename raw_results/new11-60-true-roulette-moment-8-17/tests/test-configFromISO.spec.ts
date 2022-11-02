export {}
import {configFromISO} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromISO', () => {
	it('test for configFromISO', async () => {
		const _configOxkR8Kl = "zwLa3rTum18SdcunrpARJ2OuGjCai17ANg9VaveGtWYfwMGCJC2sGo";
		const _returnValueLOY6Oc = await configFromISO(_configOxkR8Kl)
	});
})