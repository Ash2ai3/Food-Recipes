


import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Default selected values for dropdowns
  selectedCategory = '🍽️ Pizza';
  selectedDifficulty = 'Easy';
  selectedTime = '⏱️ 15:00 - 30:00';

  recipes = [
    { title: 'Cheese Pizza', time: '35', difficulty: 'Easy', category: 'Pizza', author: 'Devon', rating: '4.8', reviews: '1k', image: 'image2.png' },
    { title: 'Pepperoni Paradise Pie', time: '45', difficulty: 'Medium', category: 'Pizza', author: 'Courtney', rating: '4.9', reviews: '1.2k', image: 'image3.png' },
    { title: 'Classic Burger', time: '20', difficulty: 'Easy', category: 'Burgers', author: 'John', rating: '4.7', reviews: '2.3k', image: 'image4.png' },
    { title: 'Spaghetti Bolognese', time: '40', difficulty: 'Medium', category: 'Pasta', author: 'Alice', rating: '4.6', reviews: '900', image: 'image5.png' },
    { title: 'Caesar Salad', time: '15', difficulty: 'Easy', category: 'Salads', author: 'Mark', rating: '4.5', reviews: '800', image: 'image6.png' },
    // Add more recipes here as needed
  ];

  filteredRecipes = [...this.recipes]; // Initially show all recipes

  // Function to filter recipes based on selected values
  filterRecipes(): void {
    this.filteredRecipes = this.recipes.filter(recipe => {
      return (
        this.filterCategory(recipe) &&
        this.filterDifficulty(recipe) &&
        this.filterTime(recipe)
      );
    });
  }

  // Filter by selected category
  filterCategory(recipe: any): boolean {
    return this.selectedCategory === '🍽️ Pizza' || recipe.category === this.selectedCategory;
  }

  // Filter by selected difficulty
  filterDifficulty(recipe: any): boolean {
    return this.selectedDifficulty === 'All' || recipe.difficulty === this.selectedDifficulty;
  }

  // Filter by preparation time
  filterTime(recipe: any): boolean {
    return this.isWithinTimeRange(recipe.time, this.selectedTime);
  }

  // Function to check if the recipe's time is within the selected time range
  isWithinTimeRange(recipeTime: string, selectedTime: string): boolean {
    const [minTime, maxTime] = selectedTime.split(' - ').map(time => parseInt(time.replace('⏱️ ', '').replace(':00', ''), 10));
    const recipeTimeInt = parseInt(recipeTime, 10);
    return recipeTimeInt >= minTime && recipeTimeInt <= maxTime;
  }

  // Scroll functionality for the card slider
  scroll(direction: string): void {
    const container = document.querySelector('.scrollable-container') as HTMLElement;
    const scrollAmount = direction === 'left' ? -300 : 300; // Adjust scroll amount as necessary
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
  // ================================================  quistions =========================================
  // isActive = [false, false, false]; // Add more for additional items

  // // Toggle the FAQ section
  // toggleFAQ(index: number): void {
  //   this.isActive[index] = !this.isActive[index];
  // }
  isActive = [false, false, false, false, false, false]; // Add more if you have more items

  // Toggle the FAQ section
  toggleFAQ(index: number): void {
    this.isActive[index] = !this.isActive[index]; // Toggle active state
  }
}
