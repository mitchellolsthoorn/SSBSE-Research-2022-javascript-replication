export {}
import {configFromISO} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromISO', () => {
	it('test for configFromISO', async () => {
		const _configQNEUSVx = "erODYnKV5uDsB6TSxDWAXIBNI7k2plNhkPtrz3sHyg6Xa9qq8HlxbJxSBxHTql4sSPEtwUVNRGci7ksKymrs";
		const _returnValueqDdaADx = await configFromISO(_configQNEUSVx)
	});
})