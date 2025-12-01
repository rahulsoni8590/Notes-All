In SQL, **subqueries** (also known as inner queries or nested queries) can be written in several ways depending on what you need—filtering, joining, selecting, or updating. Here’s a breakdown of the **most common ways to write subqueries**:

---

##  1. **Subquery in the `WHERE` Clause**

### Use: Filter rows based on the result of another query.

```sql
SELECT name
FROM employees
WHERE department_id IN (
  SELECT id FROM departments WHERE name = 'Engineering'
);
```

---

##  2. **Subquery in the `FROM` Clause (Inline View)**

### Use: Treat a subquery as a temporary table.

```sql
SELECT dept_name, total_salary
FROM (
  SELECT department_id, SUM(salary) AS total_salary
  FROM employees
  GROUP BY department_id
) AS dept_summary
JOIN departments ON dept_summary.department_id = departments.id;
```

---

## ⚖️ 3. **Subquery in the `SELECT` Clause**

### Use: Return scalar values for each row.

```sql
SELECT name,
  (SELECT COUNT(*) FROM tasks WHERE tasks.employee_id = employees.id) AS task_count
FROM employees;
```

---

## 🔄 4. **Correlated Subquery**

### Use: A subquery that references columns from the outer query.

```sql
SELECT name
FROM employees e
WHERE salary > (
  SELECT AVG(salary) FROM employees WHERE department_id = e.department_id
);
```

> ⚠️ Correlated subqueries are executed once per outer row, so they can be slower.

---

## ✏️ 5. **Subquery in `EXISTS` or `NOT EXISTS`**

### Use: Check if rows exist in a related table.

```sql
SELECT name
FROM employees e
WHERE EXISTS (
  SELECT 1 FROM tasks t WHERE t.employee_id = e.id
);
```

---

## 🔀 6. **Subquery in `JOIN` (Rewrite Alternative)**

You can often rewrite a subquery as a join for better performance:

```sql
-- Subquery version
SELECT name FROM employees WHERE department_id = (
  SELECT id FROM departments WHERE name = 'Sales'
);

-- Join version
SELECT e.name
FROM employees e
JOIN departments d ON e.department_id = d.id
WHERE d.name = 'Sales';
```

---

## 🧹 Summary Table

| Subquery Type           | Example Location         | Use Case                                  |
| ----------------------- | ------------------------ | ----------------------------------------- |
| `WHERE` clause          | Filtering                | Match against list or scalar              |
| `FROM` clause           | Derived tables           | Complex aggregations or grouping          |
| `SELECT` clause         | Scalar values            | Lookup single values per row              |
| `EXISTS` / `NOT EXISTS` | Existence check          | Efficient when you don't need actual data |
| Correlated subquery     | Depends on outer query   | Filtering with dynamic values             |
| Rewritten as `JOIN`     | Performance optimization | Replace subqueries with joins             |

---

