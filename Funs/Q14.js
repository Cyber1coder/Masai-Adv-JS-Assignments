function evaluateEmployees(employees) {
  const filtered = employees.filter(emp => emp.tasksCompleted > 5);

  const performanceMapped = filtered.map(emp => {
    let level = "";
    if (emp.rating > 4.5) {
      level = "Excellent";
    } else if (emp.rating >= 3 && emp.rating <= 4.5) {
      level = "Good";
    } else {
      level = "Needs Improvement";
    }
    return { name: emp.name, performance: level };
  });

  const priority = {
    "Excellent": 1,
    "Good": 2,
    "Needs Improvement": 3
  };

  performanceMapped.sort((a, b) => priority[a.performance] - priority[b.performance]);

  return performanceMapped;
}
