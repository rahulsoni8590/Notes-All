````md
# Sequelize Relationship Diagrams

This document covers the four main Sequelize relationships:

1. One-to-One
2. One-to-Many
3. Many-to-Many

---

## 📘 1. One-to-One

```js
Author.hasOne(Book, { as: 'book' });
Book.belongsTo(Author);
````

### Tables

**Authors**

| id | name  |
| -- | ----- |
| 1  | Alice |
| 2  | Bob   |

**Books**

| id  | title  | authorId |
| --- | ------ | -------- |
| 101 | Book A | 1        |
| 102 | Book B | 2        |

### Diagram

```
Authors.id ---1:1---> Books.authorId
Each author has only one book
Each book belongs to one author
```

---

## 📘 2. One-to-Many

```js
Author.hasMany(Book, { as: 'books' });
Book.belongsTo(Author);
```

### Tables

**Authors**

| id | name  |
| -- | ----- |
| 1  | Alice |
| 2  | Bob   |

**Books**

| id  | title  | authorId |
| --- | ------ | -------- |
| 101 | Book A | 1        |
| 102 | Book B | 1        |
| 103 | Book C | 2        |

### Diagram

```
Authors.id ---1:N---> Books.authorId
Each author can have many books
Each book belongs to one author
```

---

## 📘 3. Many-to-Many

```js
Author.belongsToMany(Book, { through: 'AuthorBook' });
Book.belongsToMany(Author, { through: 'AuthorBook' });
```

### Tables

**Authors**

| id | name  |
| -- | ----- |
| 1  | Alice |
| 2  | Bob   |

**Books**

| id  | title  |
| --- | ------ |
| 101 | Book A |
| 102 | Book B |

**AuthorBook** (Join Table)

| authorId | bookId |
| -------- | ------ |
| 1        | 101    |
| 2        | 101    |
| 2        | 102    |

### Diagram

```
Authors <---*:*---> Books (via AuthorBook)
An author can write many books
A book can have many authors
```

---

## ✅ Summary

| Type         | Sequelize Definition                                                  |
| ------------ | --------------------------------------------------------------------- |
| One-to-One   | `A.hasOne(B)` + `B.belongsTo(A)`                                      |
| One-to-Many  | `A.hasMany(B)` + `B.belongsTo(A)`                                     |
| Many-to-Many | `A.belongsToMany(B, { through })` + `B.belongsToMany(A, { through })` |

```

---

Let me know if you'd like a visual version or a downloadable `.md` file.
```
