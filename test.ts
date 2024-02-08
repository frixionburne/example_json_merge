import base1Conf from "./test_objects/base1.json";
import override1Conf from "./test_objects/override1.json";
import base2Conf from "./test_objects/base2.json";
import override2Conf from "./test_objects/override2.json";
import base3Conf from "./test_objects/base3.json";
import override3Conf from "./test_objects/override3.json";
import { mergeObjects } from "./index";
import assert from "node:assert";

const test1 = () => {
    mergeObjects(base1Conf, override1Conf);
    // console.log(JSON.stringify(override1Conf, null, 4));
    assert.notEqual(override1Conf.A.A1.A11, base1Conf.A.A1.A11);
    assert.equal(override1Conf.A.A1["A12"], base1Conf.A.A1.A12);
}

const test2 = () => {
    mergeObjects(base2Conf, override2Conf);
    // console.log(JSON.stringify(override2Conf, null, 4));
    assert.notEqual(override2Conf.featureFlags.f2, base2Conf.featureFlags.f2);
}

const test3 = () => {
    mergeObjects(base3Conf, override3Conf);
    // console.log(JSON.stringify(override3Conf, null, 4));
    assert.deepEqual(base3Conf, override3Conf);
}

const testAll = () => {
    test1();
    test2();
    test3();
}

testAll();