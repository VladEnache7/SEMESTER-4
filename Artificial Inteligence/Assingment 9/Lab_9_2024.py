import random


class WeightedNQueen:
    def __init__(self, board_size, population_size, max_generations, crossover_number=1):
        self.board_size = board_size
        self.population_size = population_size
        self.max_generations = max_generations
        self.population = []
        self.fitness = []
        self.weights = []
        self.crossover_number = crossover_number

    def generate_initial_population(self):
        for _ in range(self.population_size):
            permutation = random.sample(range(1, self.board_size + 1), self.board_size)
            self.population.append(permutation)

    def evaluate_fitness(self):
        self.fitness = []
        for permutation in self.population:
            individualFitness = 0
            # calculate the fitness of the individual
            for row, col in enumerate(permutation):
                individualFitness += weights[row][col - 1]
            # penalize solutions that violate the non-threatening constraint
            threatening_pairs = 0
            # check for threatening pairs of queens on diagonals
            for i in range(self.board_size):
                for j in range(i + 1, self.board_size):
                    if abs(i - j) == abs(permutation[i] - permutation[j]):
                        threatening_pairs += 1

            # check for threatening pairs of queens on the same column
            for i in range(self.board_size):
                for j in range(i + 1, self.board_size):
                    if permutation[i] == permutation[j]:
                        threatening_pairs += 1

            # if there are no threatening pairs, give a bonus to the solution
            if threatening_pairs == 0:
                individualFitness += 10 * self.board_size
            # penalize threatening pairs by giving negative weight to the solution
            else:
                individualFitness -= 10 * threatening_pairs

            self.fitness.append(individualFitness)

    def select_parents(self):
        # select 2 random parents from the population
        parent1, parent2 = random.sample(self.population, 2)
        return parent1, parent2

    # crossover function with random crossover point
    def crossover1(self, parent1, parent2):
        # one-point crossover
        crossover_point = random.randint(1, self.board_size - 1)
        offspring1 = parent1[:crossover_point] + parent2[crossover_point:]
        offspring2 = parent2[:crossover_point] + parent1[crossover_point:]
        # if the offspring has 2 equal values, replace one of them with the missing value
        if len(set(offspring1)) != self.board_size:
            missing_values = set(range(1, self.board_size + 1)) - set(offspring1)
            for j in range(len(missing_values)):
                for i in range(self.board_size):
                    if offspring1.count(offspring1[i]) > 1:
                        offspring1[i] = missing_values.pop()
                        break
        if len(set(offspring2)) != self.board_size:
            missing_values = set(range(1, self.board_size + 1)) - set(offspring2)
            for j in range(len(missing_values)):
                for i in range(self.board_size):
                    if offspring2.count(offspring2[i]) > 1:
                        offspring2[i] = missing_values.pop()
                        break

        return offspring1, offspring2

    # crossover function with the middle crossover point
    def crossover2(self, parent1, parent2):
        # middle crossover
        crossover_point = self.board_size // 2
        offspring1 = parent1[:crossover_point] + parent2[crossover_point:]
        offspring2 = parent2[:crossover_point] + parent1[crossover_point:]
        # if the offspring has 2 equal values, replace one of them with the missing value
        if len(set(offspring1)) != self.board_size:
            missing_values = set(range(1, self.board_size + 1)) - set(offspring1)
            for j in range(len(missing_values)):
                for i in range(self.board_size):
                    if offspring1.count(offspring1[i]) > 1:
                        offspring1[i] = missing_values.pop()
                        break
        if len(set(offspring2)) != self.board_size:
            missing_values = set(range(1, self.board_size + 1)) - set(offspring2)
            for j in range(len(missing_values)):
                for i in range(self.board_size):
                    if offspring2.count(offspring2[i]) > 1:
                        offspring2[i] = missing_values.pop()
                        break

        return offspring1, offspring2

    # crossover function with one random from parent1 and one random from parent2
    def crossover3(self, parent1, parent2):
        offspring1 = parent1.copy()
        offspring2 = parent2.copy()
        index1, index2 = random.sample(range(self.board_size), 2)
        offspring1[index1], offspring2[index2] = offspring2[index2], offspring1[index1]

        # if the offspring has 2 equal values, replace one of them with the missing value
        if len(set(offspring1)) != self.board_size:
            missing_values = set(range(1, self.board_size + 1)) - set(offspring1)
            for j in range(len(missing_values)):
                for i in range(self.board_size):
                    if offspring1.count(offspring1[i]) > 1:
                        offspring1[i] = missing_values.pop()
                        break
        if len(set(offspring2)) != self.board_size:
            missing_values = set(range(1, self.board_size + 1)) - set(offspring2)
            for j in range(len(missing_values)):
                for i in range(self.board_size):
                    if offspring2.count(offspring2[i]) > 1:
                        offspring2[i] = missing_values.pop()
                        break

        return offspring1, offspring2

    def mutate(self, permutation):
        #     with a chance of 5%, swap two random positions in the permutation
        if random.random() < 0.05:
            i, j = random.sample(range(self.board_size), 2)
            permutation[i], permutation[j] = permutation[j], permutation[i]

    def is_threatened(self, row, col, queen_positions):
        # check if the current position is threatened by any existing queens
        for r, c in queen_positions:
            if r == row or c == col or abs(r - row) == abs(c - col):
                return True
        return False

    def generate_next_population(self):
        new_population = []
        while len(new_population) < self.population_size // 2:
            parent1, parent2 = self.select_parents()
            offspring1, offspring2 = [], []
            if self.crossover_number == 1:
                offspring1, offspring2 = self.crossover1(parent1, parent2)
            elif self.crossover_number == 2:
                offspring1, offspring2 = self.crossover2(parent1, parent2)
            elif self.crossover_number == 3:
                offspring1, offspring2 = self.crossover3(parent1, parent2)
            self.mutate(offspring1)
            self.mutate(offspring2)
            new_population.extend([offspring1, offspring2])
        self.population.extend(new_population)

    def solve(self):
        self.generate_initial_population()

        for _ in range(self.max_generations):
            self.evaluate_fitness()

            # take the best half of the population
            self.population = [x for _, x in sorted(zip(self.fitness, self.population), reverse=True)][:self.population_size // 2]
            self.evaluate_fitness()
            # best_individual = max(zip(self.population, self.weights), key=lambda x: x[1])

            self.generate_next_population()

        # return the best 10 inidiuiduals with their weights
        # best_individuals = [x for _, x in sorted(zip(self.fitness, self.population), reverse=True)][:2]
        best_individual = sorted(zip(self.fitness, self.population))[0]
        # best_individual = max(zip(self.population, self.weights), key=lambda x: x[1])
        return best_individual

    @staticmethod
    def print_board(solution):
        for row in range(len(solution)):
            line = ""
            for col in range(len(solution)):
                if solution[row] == col + 1:
                    line += " x"
                else:
                    line += " ."
            print(line)


board_size = 6
population_size = 20
max_generations = 100

genericAlgorithm1 = WeightedNQueen(board_size, population_size, max_generations, 1)
genericAlgorithm2 = WeightedNQueen(board_size, population_size, max_generations, 2)
genericAlgorithm3 = WeightedNQueen(board_size, population_size, max_generations, 3)

weights = [[random.randint(1, 10) for _ in range(board_size)] for _ in range(board_size)]
print("Weights:")
for row in weights:
    print(row)

# set the weights for each algorithm
genericAlgorithm1.weights = weights
genericAlgorithm2.weights = weights
genericAlgorithm3.weights = weights

# solve the problem with each algorithm
solution = genericAlgorithm1.solve()
print("Solution 1 best individual:", solution)
print("Board:")
genericAlgorithm1.print_board(solution[1])

solution = genericAlgorithm2.solve()
print("Solution 2 best individual:", solution)
print("Board:")
genericAlgorithm2.print_board(solution[1])

solution = genericAlgorithm3.solve()
print("Solution 3 best individual:", solution)
print("Board:")
genericAlgorithm3.print_board(solution[1])

