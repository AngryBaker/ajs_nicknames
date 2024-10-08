import Validator from '../app';

test.each([
  ["sfs--666gs", true,],
  ["sfs--666gs1", false,],
  ["sfs--6666gs", false,],
  ["sfs--666gs-", false,],
  ["sfsчч666gs", false,],
  ["_sfs--666gs", false,],
])("should validate", (string, expected) => {
  const result = Validator.validateUsername(string);
  expect(result).toBe(expected);
});
