
# 🛠️ Systems for Design and Implementation

This course focuses on the *ecosystem* of software development. You will move beyond writing isolated algorithms to building full-scale Enterprise Applications. The focus is on **Architecture**, **Persistence** (ORM), **Dependency Injection**, and **Distributed Systems**.

### 📅 Weekly Syllabus

The course progresses from setting up a professional build environment to building distributed web services and real-time applications.

| Week | 👨‍🏫 Lecture Content | 🎯 Key Concepts |
|:---:|:---|:---|
| **1** | **The Ecosystem:** Build Automation & Version Control | CI/CD, Dependency Management |
| **2** | **Persistence I:** JDBC (Database Connectivity) | Raw SQL, Drivers, Connection Pooling |
| **3** | **Architecture:** Inversion of Control (IoC) | Dependency Injection, Loose Coupling |
| **4** | **Distribution:** The Client-Server Architecture | Sockets, TCP/IP basics |
| **5** | **Remote Execution:** Remote Procedure Call (RPC) | RMI, gRPC, Marshalling/Unmarshalling |
| **6** | **Persistence II:** Object Relational Mapping (ORM) Introduction | Entity lifecycle, ORM Patterns |
| **7** | **Persistence III:** Advanced ORM | Relationships (1:N, M:N), Lazy Loading, Caching |
| **8** | **Integration I:** Enterprise Application Integration (EAI) | System interoperability patterns |
| **9** | **Integration II:** Advanced EAI | Message Queues, Event-Driven Architecture |
| **10** | **Services:** Web Services | RESTful APIs, SOAP, HTTP verbs |
| **11** | **Web:** Web Applications Structure | MVC Pattern, Request/Response cycle |
| **12** | **Real-Time:** Web Sockets | Full-duplex communication, Push notifications |
| **13** | **Security:** Web Application Security | Authentication, Authorization, OAuth, JWT |
| **14** | **Modern Data:** NoSQL Databases | Document stores (MongoDB), Key-Value pairs |

---

### 💻 Laboratory & Practical Learning

The practical component involves building a comprehensive Full-Stack Application using **FastAPI (Python)** for the backend and **React + MaterialUI** for the frontend.

#### 🧪 Lab 2: Backend Development & REST API
*   **Implementation (FastAPI):**
    *   Initialize project with `pip` / `poetry` and **Uvicorn** server.
    *   Define **Pydantic Models** (`BaseModel`) for data validation (Schemas) and Business Entities.
    *   Create **Path Operations** (Routes) for standard CRUD: `GET`, `POST`, `PUT`, `DELETE`.
    *   Implement Service layer logic and simple in-memory storage (Lists/Dicts).
    *   Connect the **React Frontend** to display data using standard `fetch` or `axios`.
*   **What we learned:**
    *   **Data Validation:** Using Pydantic to automatically validate incoming JSON request bodies.
    *   **Type Hinting:** Leveraging Python type hints for better code quality and editor support.
    *   **API Design:** Structuring endpoints using `APIRouter` to keep code modular.
    *   **MaterialUI:** Using pre-built components (DataGrid, Cards) to visualize API data.

#### 🧪 Lab 3: Backend Persistency (ORM)
*   **Implementation (SQLAlchemy):**
    *   Replace in-memory storage with a relational database (PostgreSQL/SQLite).
    *   Configure `database.py` with `create_engine` and `sessionmaker`.
    *   Define **SQLAlchemy Models** (mapping classes to DB tables).
    *   Implement **Dependency Injection** (`Depends(get_db)`) to manage database sessions per request.
    *   Handle **One-to-Many Relationships** (e.g., establishing Foreign Keys between Tables).
*   **What we learned:**
    *   **ORM Concepts:** Translating Python objects to SQL records without writing raw queries.
    *   **Session Management:** Handling database transactions and rollbacks safely.
    *   **Migration:** (Optional) Using **Alembic** to manage schema changes over time.
    *   **React Integration:** Handling loading states in the UI while waiting for async database queries.

#### 🧪 Lab 4: Authentication (Login & Register)
*   **Implementation (Security):**
    *   Add `User` model and registration endpoints.
    *   Hash passwords using **Passlib** (`bcrypt`) before storing them.
    *   Implement **OAuth2 with Password Flow** using `OAuth2PasswordBearer`.
    *   Generate **JWT (JSON Web Tokens)** using `python-jose`.
    *   Create a dependency `get_current_user` to protect private routes.
    *   **React Auth:** Storing the JWT in `localStorage` and attaching it to the `Authorization` header.
*   **What we learned:**
    *   **Stateless Auth:** Securing REST APIs without server-side sessions.
    *   **Security Dependencies:** Creating reusable dependencies to lock down endpoints with one line of code.
    *   **Password Safety:** Hashing and salting best practices.
    *   **Conditional Rendering:** Showing/hiding React UI elements (Login vs. Dashboard) based on auth state.

#### 🧪 Lab 5: Authorization (Roles) & HTTPS
*   **Implementation (Advanced):**
    *   Add a `role` field to the User model (e.g., `admin`, `regular`).
    *   Create a custom dependency `get_current_active_user` that checks permissions/scopes before allowing access.
    *   **Swagger UI:** Utilize FastAPI's built-in automatic documentation at `/docs` (OpenAPI).
    *   Enable **HTTPS** by configuring SSL certificates in Uvicorn context.
*   **What we learned:**
    *   **RBAC (Role-Based Access Control):** Fine-grained permission logic.
    *   **Self-Documentation:** How FastAPI automatically generates interactive API docs.
    *   **Secure Transport:** Configuring SSL/TLS for local development.

---

### 🧠 Competencies Acquired

**Professional Competencies:**
*   **Modern Stack Proficiency:** proficiency in Python (FastAPI) and Modern JS (React).
*   **API Architecture:** Designing clean, fast, and documented REST APIs.
*   **Full-Stack Development:** Connecting a Single Page Application (SPA) to a persistent backend.
*   **Security Implementation:** Applying industry-standard JWT auth and hashing.

**Transversal Competencies:**
*   **Team Collaboration:** Working in a group to deliver a complex software product.
*   **Adaptability:** bridging the gap between Python backend logic and JavaScript frontend UI.
*   **Engineering Ethics:** Responsible development and adherence to standards.

---

### 🛠️ Resources & Tools
*   **FastAPI** - High-performance Python web framework.
*   **React + MaterialUI** - Frontend library and Component Design system.
*   **SQLAlchemy** - Python SQL Toolkit and ORM.
*   **Pydantic** - Data validation using Python type hints.
*   **PostgreSQL / SQLite** - Database management.
