function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      class Worker {
         constructor(name, salary) {
            this.name = name;
            this.salary = salary;
         }
      }

      class Restaurant {
         constructor(name) {
            this.name = name;
            this.workers = {};
            this.sumSalaries = 0;
            this.bestSalary = 0;
         }

         get averageSalary() {
            return this.sumSalaries / Object.keys(this.workers).length;
         }

         addWorker(name, salary) {
            this.workers[name] = new Worker(name, salary);
            this.sumSalaries += salary;

            if (this.bestSalary < salary) {
               this.bestSalary = salary;
            }
         }
      }

      class AllRestaurants {
         constructor() {
            this.allRestaurants = new Map();
         }

         addRestaurants(array) {
            for (const restaurant of array) {
               let [name, workers] = restaurant.split(' - ');
               workers = workers.split(', ');
               let restaurantExists = false;

               let currentRestaurant = undefined

               if (this.allRestaurants.has(name)) {
                  currentRestaurant = this.allRestaurants.get(name);
                  restaurantExists = true;
               } else {
                  currentRestaurant = new Restaurant(name);
               }

               for (let worker of workers) {
                  const [workerName, salary] = worker.split(' ');

                  currentRestaurant.addWorker(workerName, Number(salary));
               }

               if (!restaurantExists) {
                  this.allRestaurants.set(name, currentRestaurant);
               }
            }
         }

         getBestRestaurant() {
            let bestRestaurants = Array.from(this.allRestaurants.values())
            bestRestaurants = bestRestaurants.sort((a, b) => b.averageSalary - a.averageSalary);

            return bestRestaurants[0];
         }
      }

      const input = document.querySelector('#inputs textarea');

      const allRestaurants = new AllRestaurants();

      const inputValue = JSON.parse(input.value);

      allRestaurants.addRestaurants(inputValue);

      const bestRestaurantOutput = document.querySelector('#bestRestaurant p');
      const bestRestaurantWorkersOutput = document.querySelector('#workers p');

      const bestRestaurant = allRestaurants.getBestRestaurant();

      bestRestaurantOutput.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

      const workers = Object.values(bestRestaurant.workers).sort((a, b) => b.salary - a.salary);

      let workersOutput = [];
      for (const worker of workers) {
         workersOutput.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
      }

      bestRestaurantWorkersOutput.textContent = workersOutput.join(' ');
   }
}