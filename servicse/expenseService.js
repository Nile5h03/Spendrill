export const createExpense = async (expenseData) => {
  const res = await fetch("http://localhost:3000/api/expenses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // 👈 Token as header
    },
    body: JSON.stringify(expenseData),
  });

  const data = await res.json();
  return data;
};
