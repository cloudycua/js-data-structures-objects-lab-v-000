const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  driver.push = { key: value };
  return driver;
}
