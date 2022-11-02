export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueUDsw9ms = "2OzBp8oKJbOOIRJnrVwO92eYR";
		const _splitowlHGCj = () => { return _returnValueUDsw9ms };
		const _flagsHQvVdOu = {
			"split": _splitowlHGCj
	}
		const _returnValueHkjTeXl = await splitOptionFlags(_flagsHQvVdOu)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsH4OvlRE = "XqryU0MQTQYOcU7z6jsieh6NTpL8kshX9zFENKRqeAinlyuzy8NceIDK1Gdn";
		const _returnValue87UBKT = await splitOptionFlags(_flagsH4OvlRE)
	});
})