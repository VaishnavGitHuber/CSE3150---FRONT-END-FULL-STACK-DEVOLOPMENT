import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Expense {
  description: string;
  amount: number;
  date: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  expenses: Expense[] = [];
  newExpense: Expense = { description: '', amount: 0, date: '' };
  isEditing: boolean = false;
  editingIndex: number | null = null;

  addExpense() {
    if (this.newExpense.description && this.newExpense.amount && this.newExpense.date) {
      this.expenses.push({ ...this.newExpense });
      this.resetForm();
    } else {
      alert('Please fill out all fields!');
    }
  }

  editExpense(index: number) {
    this.newExpense = { ...this.expenses[index] };
    this.isEditing = true;
    this.editingIndex = index;
  }

  updateExpense() {
    if (this.editingIndex !== null && this.newExpense.description && this.newExpense.amount && this.newExpense.date) {
      this.expenses[this.editingIndex] = { ...this.newExpense };
      this.resetForm();
    } else {
      alert('Please fill out all fields!');
    }
  }

  deleteExpense(index: number) {
    this.expenses.splice(index, 1);
    if (this.editingIndex === index) {
      this.resetForm();
    } else if (this.editingIndex !== null && index < this.editingIndex) {
      this.editingIndex--; // adjust index after deletion
    }
  }

  cancelEdit() {
    this.resetForm();
  }

  private resetForm() {
    this.newExpense = { description: '', amount: 0, date: '' };
    this.isEditing = false;
    this.editingIndex = null;
  }
}
