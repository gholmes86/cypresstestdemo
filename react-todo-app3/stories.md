Feature: First time user
  Scenario: I should see no ToDos
    Given I am on http://localhost:3000/ for the first time
    Then I should see No ToDos

Feature: Create a ToDo task
  Scenario: I should be able to see a Add ToDo dialog box
    Given I am on http://localhost:3000/
    And I click on Add Task button
    Then I should see a dialog to add tasks

  Scenario: I should be able to create a ToDo
    Given I am on a Add ToDo dialog box
    And I provide Title and Status
    And I click Add Task
    Then I should see that task on ToDo list home page

Feature: Update a ToDo task
  Scenario: I should be able to see a Update ToDo dialog box
    Given I am on http://localhost:3000/
    And I click on Pencil (Edit) icon
    Then I should see Update TODO dialog box

  Scenario: I should be able to update a ToDo
    Given I am on a Update TODO dialog box
    And I update the Title and Status
    And I click Update Task
    Then I should see the updated task on ToDo list home page

Feature: Delete a ToDo task
  Scenario: I should be deleta a ToDo
    Given I am on http://localhost:3000/
    And I click on delete icon
    Then I should see the corresponding task getting deleted

