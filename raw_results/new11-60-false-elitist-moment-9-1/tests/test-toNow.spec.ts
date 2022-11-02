export {}
import {toNow} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toNow', () => {
	it('test for toNow', async () => {
		const _withoutSuffixy86UMTn = "AZHL7oVKFT5GY9lKQCimblJEYiwd49gRO5XruuDBzDj9s2w2kbeXHQp1jvgElmQi18vm4j7kwzOi6MDFMgG";
		const _returnValuewH8vvcX = await toNow(_withoutSuffixy86UMTn)
	});
})