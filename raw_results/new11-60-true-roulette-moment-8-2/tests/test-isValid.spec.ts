export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _arrayValueF6lyy87 = undefined;
		const _arrayValuepm6XB95 = "MepeRjFhV1yDyzd5rGfL4McNuAJcfAMMFVIEFw5BMyisYaUJlIQJ3jzS1NlSuOoShElulAuy3krj2p9gKe2hj3YSH2aEKuf";
		const _mI3Bh7by = [_arrayValueF6lyy87, _arrayValuepm6XB95]
		const _returnValuegsht9Ca = await isValid(_mI3Bh7by)
	});
})