export {}
import {createInvalid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('createInvalid', () => {
	it('test for createInvalid', async () => {
		const _arrayValueKUj4MYM = "sSOq38SScrwzdeajCIcnBdjUG1wg6q8vZtNREZTtTaqJl3mZR5TbaImFtH21K1xuzzAdfTE1";
		const _flagstFUvWQX = [_arrayValueKUj4MYM]
		const _returnValueNrCebGE = await createInvalid(_flagstFUvWQX)
	});
})