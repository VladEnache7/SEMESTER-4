
# 🧠 Artificial Intelligence

This course provides a comprehensive overview of AI, bridging the gap between "Good Old-Fashioned AI" (Search, Logic, Games) and modern Computational Intelligence (Evolutionary Algorithms, Swarm Intelligence, and Neural Networks).

### 📅 Weekly Syllabus

The course features a dense laboratory schedule where a new algorithm is implemented almost every week, moving from basic pathfinding to deep learning.

| Week | 👨‍🏫 Lecture Content | 💻 Laboratory Task |
|:---:|:---|:---|
| **1** | **Intro:** AI History, Definitions, Turing Test | **Search I:** Implement **Uninformed Search** (BFS/DFS) |
| **2** | **Uninformed Search:** Problem spaces, BFS, DFS, IDDFS | **Search II:** Implement **Informed Search** (A*, Greedy) |
| **3** | **Informed Search:** Heuristics, A*, Best-First, Greedy | **Bio-Comp I:** Implement an **Evolutionary Algorithm** |
| **4** | **Local Search:** Hill Climbing, Simulated Annealing | **Swarm I:** Implement **PSO** (Particle Swarm Optimization) |
| **5** | **Evolutionary:** Genetic Algorithms, Selection, Mutation | **Swarm II:** Implement **ACO** (Ant Colony Optimization) |
| **6** | **Swarm Intel:** Particle Swarm (PSO), Ant Colony (ACO) | **Games:** Implement a Game Solver (Minimax/Alpha-Beta) |
| **7** | **Game Playing:** Minimax, Alpha-Beta Pruning | **Logic:** Implement a **Rule-Based System** |
| **8** | **Knowledge Rep:** Knowledge-based systems, Logic | **NN I:** Train a simple **Perceptron** |
| **9** | **Rule Systems:** Uncertainty management, Inference | **NN II:** Implement a full **Neural Network** |
| **10** | **ML Trees:** Decision Trees, Entropy, Information Gain | **DL:** Simple **Image Classification** (Deep Learning) |
| **11** | **Neural Nets I:** Perceptron, Single Layer | **Bio-Comp II:** Implement **Genetic Programming** (GP) |
| **12** | **Neural Nets II:** Multi-layer, Backpropagation | **Unsupervised:** Implement a **Clustering** algorithm |
| **13** | **Advanced Evo:** Genetic Programming, Evolutionary Strategies | **Regression:** Solve a complex regression problem |
| **14** | **Intelligent Sys:** SVM (Support Vector Machines), K-Means | **Classification:** Solve a complex classification problem |

---

### 📚 Key Topics Breakdown

<details>
<summary><strong>Click to expand detailed topic list</strong></summary>

#### Part I: Search & Optimization (Classical AI)
*   **Uninformed:** Exploring the search space blindly (Breadth-First, Depth-First, Iterative Deepening).
*   **Informed (Heuristic):** Using a "rule of thumb" (heuristic function $h(n)$) to guide the search.
    *   **A* (A-Star):** The gold standard for pathfinding ($f(n) = g(n) + h(n)$).
*   **Adversarial Search:** AI for zero-sum games (Chess, Tic-Tac-Toe) using Minimax and pruning the tree with Alpha-Beta.

#### Part II: Nature-Inspired Computing
*   **Evolutionary Computation:** Algorithms inspired by Darwinian natural selection (Population -> Selection -> Crossover -> Mutation).
*   **Swarm Intelligence:**
    *   **PSO:** Simulating bird flocks to find optima.
    *   **ACO:** Simulating ant pheromone trails to find shortest paths.

#### Part III: Machine Learning
*   **Symbolic:** Decision Trees, Rule-based systems.
*   **Connectionist (Neural Networks):**
    *   **Perceptron:** The mathematical neuron.
    *   **Backpropagation:** The algorithm that allows multi-layer networks to learn (calculating gradients).
    *   **Deep Learning:** Convolutional layers for image processing.
*   **Statistical:** K-Means clustering, Support Vector Machines (SVM).

</details>

---

### 🛠️ Resources & Tools

*   **Python** - The standard language for AI.
*   **Libraries:**
    *   `NumPy` / `Pandas` for data manipulation.
    *   `Scikit-learn` for classical ML (SVM, Trees, K-Means).
    *   `PyTorch` or `TensorFlow` for Neural Networks and Deep Learning tasks.
    *   `Matplotlib` for visualizing search paths and error rates.

---

> *"The question of whether a computer can think is no more interesting than the question of whether a submarine can swim."* — Edsger W. Dijkstra
