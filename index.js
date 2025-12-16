function validateAge(oldEnough) {
  if (oldEnough) {
    return 'old enough';
  }

  return 'not old enough';
}

module.exports = validateAge;