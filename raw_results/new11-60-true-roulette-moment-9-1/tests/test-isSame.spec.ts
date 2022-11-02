export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputyGCtRg2 = undefined;
		const _unitsqH0oxeZ = "E8rG0oAAxlqaon3FAqdw6Lf0JmNE5va9SyIT6nQWHL8csdaHsLv9MrZuycQ9V2FaeioIwsV31sLWIdQdqG";
		const _returnValueV60DKFK = await isSame(_inputyGCtRg2, _unitsqH0oxeZ)
	});

	it('test for isSame', async () => {
		const _returnValueSrVFyd = false;
		const _inputR32Ht07 = () => { return _returnValueSrVFyd };
		const _unitsf9UMAR = "HALMAPMLDpukVXNnsz1SzDLv7c4C2Fvcq6YLnns7VQoAoWE9wZmrKn2oGiTgtVC9uIgHyDUMrrplmPUGxst";
		const _returnValueajXIIxX = await isSame(_inputR32Ht07, _unitsf9UMAR)
	});
})