export {}
import {getCalendarFormat} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/calendar.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getCalendarFormat', () => {
	it('test for getCalendarFormat', async () => {
		const _myMomentlYEKxSu = "VTTn5hqn5Z6qz6ngzNltb1UsGNuuAkPmmNfztv24IEjDalQYspNtf8QJ0WvY6uUd3O";
		const _nowupeU1cH = "3YpAF2hOD6JmFfi3Pom8rD5gE7q1erymJ8ypwgJB2qBOmd6rBXKZXH33gzP1hZgRSuJxdPG2YwxcSeo1eXMp9YVabho3O14WmP";
		const _returnValueZBlYoKh = await getCalendarFormat(_myMomentlYEKxSu, _nowupeU1cH)
	});
})