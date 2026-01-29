
# ⚙️ Database Management Systems (DBMS)

This course dives deep into the engine of the database. You will move beyond writing queries to understanding how the database executes them. Key focuses include connecting applications to databases (**ADO.NET**), handling **Concurrency** (locking mechanisms), ensuring **Recovery**, and **Query Optimization**.

### 📅 Weekly Syllabus

The course includes weekly lectures and bi-weekly seminars. The laboratory work focuses on three major practical milestones involving **Windows Forms** and **SQL Server**.

| Week | 👨‍🏫 Lecture Content | 📝 Seminar (Bi-Weekly) | 💻 Laboratory Focus |
|:---:|:---|:---|:---|
| **1** | **Intro:** DBMS Architecture, Transaction concepts | **S1: ADO.NET I:** Architecture, Connection, Command | **Lab 1 Start:** Setup WinForms & SQL Connection |
| **2** | **Transactions:** ACID properties, Schedules | *--* | *--* |
| **3** | **Concurrency:** Locking, Deadlocks, Timestamping | **S2: ADO.NET II:** DataReader vs DataAdapter, Datasets | **Lab 1 Due:** Basic CRUD with ADO.NET |
| **4** | **Recovery:** Logs, Checkpoints, Shadow Paging | *--* | *--* |
| **5** | **Security:** Roles, Privileges, Encryption, SQL Injection | **S3: Transactions:** Isolation Levels in practice | **Lab 2 Start:** Generic Reflection-based App |
| **6** | **Optimization I:** Evaluation of Relational Operators | *--* | *--* |
| **7** | **Optimization II:** Heuristics, Cost-based optimization | **S4: Multiversioning:** Snapshot Isolation | **Lab 2 Due:** Generic WinForms Config File |
| **8** | **Optimization III:** Index tuning, selectivity | *--* | *--* |
| **9** | **Optimization IV:** Execution Plan analysis | **S5: Tuning I:** Analyzing slow queries | **Lab 3 Start:** Concurrency Scenarios |
| **10** | **Distributed DBs:** Fragmentation, Replication, 2PC | *--* | *--* |
| **11** | **Distributed II:** CAP Theorem, Distributed Query Processing | **S6: Problems:** Solving concurrency problems | **Lab 3 Due:** Handling Deadlocks & Dirty Reads |
| **12** | **Modern Data:** Azure Stream Analytics, Azure ML | *--* | *--* |
| **13** | **Advanced DBs:** Parallel Databases, Spatial Data | **S7: Tuning II:** Advanced Optimization techniques | *--* |
| **14** | **Review:** Final Problem Solving | *--* | *--* |

---

### 📚 Key Topics Breakdown

<details>
<summary><strong>Click to expand detailed topic list</strong></summary>

#### Part I: Application Integration (ADO.NET)
*   **Connected Mode:** `SqlConnection`, `SqlCommand`, `SqlDataReader` (Fast, forward-only).
*   **Disconnected Mode:** `SqlDataAdapter`, `DataSet`, `DataTable` (In-memory cache).
*   **Data Binding:** Linking UI (Windows Forms) directly to data sources.

#### Part II: Transaction Management
*   **ACID:** Atomicity, Consistency, Isolation, Durability.
*   **Isolation Levels:**
    *   `READ UNCOMMITTED` (Dirty Reads allowed).
    *   `READ COMMITTED` (Default).
    *   `REPEATABLE READ` (Phantom reads possible).
    *   `SERIALIZABLE` (Strictest, highest locking).
    *   `SNAPSHOT` (Optimistic concurrency / Row Versioning).
*   **Deadlocks:** Detection, Prevention, and Victim Selection.

#### Part III: Optimization & Internals
*   **Query Processor:** Parsing -> Binding -> Optimization -> Execution.
*   **Optimization:**
    *   **Heuristic:** Pushing selections down the tree (filter early).
    *   **Cost-Based:** Estimating I/O and CPU costs for different join orders.
*   **Tools:** Reading **Execution Plans** (Scan vs Seek, Nested Loops vs Hash Match).

#### Part IV: Advanced & Cloud
*   **Distributed:** Vertical/Horizontal Fragmentation.
*   **Streams:** Processing real-time data (Windowing functions).
*   **Spatial:** Storing geometric data (Points, Polygons).

</details>

---

### 🛠️ Resources & Tools

*   **Visual Studio** - Required for Windows Forms (C#) development.
*   **SQL Server Management Studio (SSMS)** - For managing the DB and viewing Execution Plans.

---

> *"Premature optimization is the root of all evil (or at least most of it) in programming."* — Donald Knuth (Though in DBMS, optimization is mandatory!)
