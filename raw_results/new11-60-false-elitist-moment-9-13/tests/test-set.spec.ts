export {}
import {set} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('set', () => {
	it('test for set', async () => {
		const _returnValueBkTSyJ3 = undefined;
		const _returnValueydDZhTY = () => { return _returnValueBkTSyJ3 };
		const _yearmNeFcz = () => { return _returnValueydDZhTY };
		const _momLE9z8Pi = {
			"year": _yearmNeFcz
	}
		const _unithkH4RGM = "vNf9gQipRW3kjfvGwHrK9OYh8CewqlKyl4jFvgKd5SvHqLclojbbldIdZvO1GA3pD";
		const _arrayValuezmuVXyL = "q39ywk9YN1GQ";
		const _arrayValueR8JtYSh = "TKU3zL74DNF175ppkvbQqLGbpysLdYY";
		const _arrayValuefdDQpNv = "rs2AZnrQ6rqjOKx7bm";
		const _valuekBLllk = [_arrayValuezmuVXyL, _arrayValueR8JtYSh, _arrayValuefdDQpNv]
		const _returnValuezqehQe = await set(_momLE9z8Pi, _unithkH4RGM, _valuekBLllk)
	});
})