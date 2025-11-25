function processStudents(students) {
  return students
    .filter(s => s.marks > 60)
    .sort((a, b) => b.marks - a.marks)
    .map(s => s.name);
}
