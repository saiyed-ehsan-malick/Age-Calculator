function calculateAge() {
  const birthdateInput = document.getElementById('birthdate');
  const birthDate = new Date(birthdateInput.value);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  document.getElementById('result').innerText = `Your age is ${age} years.`;
}
